import { Component } from 'react'
import { sanitize } from 'sandhands'
import randomBetween from '../../functions/randomBetween'
import styles from '../../styles/BooleanGame.module.scss'
import autoBind from 'auto-bind'
import generateRules from '../../functions/generateRules'
import ntc from 'ntcjs'
import AceEditor from '../AceEditor'
import ScratchBlocks from '../ScratchBlocks'

const propsFormat = {
  _: {
    size: { _: Number, min: 1, max: 20, finite: true, integer: true },
    width: { _: Number, min: 1, max: 20, finite: true, integer: true },
    height: { _: Number, min: 1, max: 20, finite: true, integer: true },
    colors: [{ _: String, trimmed: true }],
    shapes: [{ _: String, trimmed: true }],
    rules: Object,
    title: String,
    rulesOptions: Object
  },
  allOptional: true
}

const defaultColors = ['#ffccfb', '#00ff00', '#0080b3']
const defaultShapes = ['▢', '⧍', '○']

class BooleanGame extends Component {
  constructor(props) {
    super(props)
    sanitize(props, propsFormat)
    autoBind(this)

    this.state = {
      ...this.generateGameState(this.props),
      gameState: 'ongoing'
    }
  }
  generateGameState(options = {}) {
    const colors = options.colors || defaultColors
    const shapes = options.shapes || defaultShapes
    if (
      options.hasOwnProperty('size') &&
      (options.hasOwnProperty('width') || options.hasOwnProperty('height'))
    )
      throw new Error('Must supply either size or w/h dimensions not both')
    const width = options.size || options.width || 3
    const height = options.height || options.width || options.size || 3
    const rules = options.rules || generateRules(colors, shapes, this.props.rulesOptions)
    const board = []
    while (this.getRemainingCells(board, rules).length < 1) {
      for (let i = 0, ss = width * height; i < ss; i++) {
        board[i] = {
          color: colors[randomBetween(0, colors.length - 1)],
          shape: shapes[randomBetween(0, shapes.length - 1)],
          active: true
        }
      }
    }
    return { width, height, board, colors, shapes, rules }
  }
  canActivate(cell, rules) {
    rules = rules || this.state.rules
    const { color, shape } = cell
    return rules.validate(color, shape)
  }
  reset() {
    this.setState({
      ...this.generateGameState(this.props),
      gameState: 'ongoing'
    })
  }
  lose() {
    this.setState({ gameState: 'lost' })
    //console.log("lost");
  }
  getRemainingCells(board, rules) {
    return (board || this.state.board)
      .filter(cell => this.canActivate(cell, rules))
      .filter(cell => cell.active === true)
  }
  activateCell(cell, index) {
    if (this.state.gameState !== 'ongoing') return // Don't let you click when the game is not running
    if (cell.active !== true) return // don't trigger for a deactivated cell
    let lost = this.canActivate(cell) !== true
    const newBoard = [...this.state.board]
    const newCell = { ...cell }
    newCell.active = false
    if (lost) {
      newCell.failed = true
    }
    //console.log(newCell);
    newBoard[index] = newCell
    this.setState({ board: newBoard })
    //console.log("x", lost, this.getRemainingCells(), this.state.board);
    if (lost) {
      this.lose()
    } else if (this.getRemainingCells().length < 2) {
      // Offset by one to account for the recently activated cell
      this.win()
    }
  }
  win() {
    //console.log("You won!");
    this.setState({ gameState: 'won' })
  }
  render() {
    console.log(this.state.rules)
    const notColors = this.state.rules.colorsDescription.startsWith('not')
    const notShapes = this.state.rules.shapesDescription.startsWith('not')
    return (
      <div className={styles['boolean-game']}>
        <h2 className={styles.title}>
          Matching Rules
          {this.props.hasOwnProperty('title') ? ' - ' + this.props.title.trim() : null}
        </h2>
        <noscript>
          <span className={styles.jserror}>JavaScript is required to play this game.</span>
        </noscript>
        <div className={styles.rules}>
          <h2>Color Palette</h2>
          <ul className={styles['color-list']}>
            {this.state.colors.map((color, i) => (
              <li key={i}>
                <span className={styles.color} style={{ backgroundColor: color }}>
                  {ntc.name(color)[1]}
                </span>
              </li>
            ))}
          </ul>
          <h2>Rules</h2>
          {
            (notColors ? '' : '(') +
              this.state.rules.colorsDescription +
              (notColors ? '' : ')') +
              ' and ' +
              (notShapes ? '' : '(') +
              this.state.rules.shapesDescription +
              (notShapes
                ? ''
                : ')') /*<span className="colors">Colors: {this.state.rules.colorsDescription}</span>
          <br />
          <span className="shapes">Shapes: {this.state.rules.shapesDescription}</span>*/
          }
          {
            null /*<h2>Rules in JavaScript</h2>
          {
            null /*<AceEditor
            mode="javascript"
            theme="ambiance"
            width="100%"
            height="120px"
            value={this.state.rules.sourceCode}
          readOnly></AceEditor>{<ScratchBlocks>{this.state.rules.sourceCode}</ScratchBlocks>} */
          }
        </div>
        {this.state.gameState === 'ongoing' ? null : this.state.gameState === 'won' ? (
          <span
            className={[styles.result, styles.won].join(' ')}
            ref={ref => {
              if (document.body.contains(ref)) ref.scrollIntoView()
            }}>
            You Won!
          </span>
        ) : this.state.gameState === 'lost' ? (
          <span
            className={[styles.result, styles.lost].join(' ')}
            ref={ref => {
              if (document.body.contains(ref)) ref.scrollIntoView()
            }}>
            You lost 〠_〠
          </span>
        ) : (
          'UNEXPECTED STATE: ' + this.state.gameState
        )}
        {this.state.gameState !== 'ongoing' ? (
          <button className={styles.replay} onClick={this.reset}>
            Replay
          </button>
        ) : null}
        {this.renderBoard()}
      </div>
    )
  }
  renderBoard() {
    const { width, height } = this.state
    return (
      <div className={styles.board}>
        {this.state.board.map((content, i) => {
          const y = Math.floor(i / width)
          const x = i % width
          return (
            <CellRenderer
              width={width}
              height={height}
              x={x}
              y={y}
              activateCell={this.activateCell}
              index={i}
              cell={content}
              key={i}
            />
          )
        })}
      </div>
    )
  }
}

function CellRenderer(props) {
  const { cell, width, height, x, y, activateCell, index } = props
  const { color, shape, active, failed } = cell

  const horizontalEdge = x === 0 ? 'left' : x >= width - 1 ? 'right' : 'middle'
  const verticalEdge = y === 0 ? 'top' : y >= height - 1 ? 'bottom' : 'middle'

  return (
    <span
      className={styles.cell + (failed === true ? ' failed' : '')}
      vertical={verticalEdge}
      horizontal={horizontalEdge}
      style={{
        backgroundColor: color,
        width: 100 / width + '%',
        height: 100 / height + '%'
      }}
      onClick={() => {
        activateCell(cell, index)
      }}
      disabled={active !== true}>
      <span className={styles.inner}>{shape}</span>
    </span>
  )
}

export default BooleanGame
