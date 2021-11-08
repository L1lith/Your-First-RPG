import { Component, Fragment } from 'react'
import AceEditor from './AceEditor'
import './CodeSandbox.scss'
import { inspect } from 'util'
import autoBind from 'auto-bind'

class CodeSandbox extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = { value: this.props.value || '', output: null }
  }
  render() {
    return (
      <div
        className={
          'sandbox' + (this.props.hasOwnProperty('className') ? ' ' + this.props.className : '')
        }>
        {typeof this.state.shareURL == 'string' ? (
          <span className="share-popup">
            Your Sharing URL:
            <a className="url" href={this.state.shareURL}>
              Right Click and Copy This Link
            </a>
            <span className="icon close" onClick={this.closeSharing}>
              ❌
            </span>
          </span>
        ) : null}
        <h2 className="main-title">
          {this.props.disableAutoRun === true ? (
            <span title="Run" className="icon play" onClick={this.run}>
              ▶
            </span>
          ) : null}
          <h2>JavaScript {this.props.consoleMode === true ? 'Terminal' : 'Evaluator'}</h2>
          {this.props.readOnly === true ? ' (Read Only)' : null}
          {this.props.noReset !== true ? (
            <span title="Reset" className="icon reset" onClick={this.reset}>
              ❌
            </span>
          ) : null}
          {this.props.sharing == true ? (
            <Fragment>
              <span title="Share" className="icon share" onClick={this.share}>
                ☁️
              </span>
            </Fragment>
          ) : null}
        </h2>

        <div className="titles">
          <h2 className="title">Code Input</h2>
          <h2 className="title">{this.props.consoleMode === true ? 'Console' : 'Output'}</h2>
        </div>
        <div className="inner">
          <AceEditor
            width="50%"
            height="100%"
            mode="javascript"
            theme="ambiance"
            readOnly={this.props.readOnly === true}
            value={this.state.value}
            onChange={(...args) => {
              this.handleChange(...args)
            }}
          />
          {this.getOutput()}
        </div>
      </div>
    )
  }
  getOutput(skipAutoRun = false) {
    let output = null
    if (skipAutoRun !== true && this.props.disableAutoRun === true) {
      output =
        this.state.output !== null ? (
          this.state.output
        ) : (
          <span className="output empty">Run the program to see your output</span>
        )
    } else if (this.state.value.trim().length > 0) {
      output =
        this.props.consoleMode === true
          ? this.getConsoleOutput(this.state.value)
          : this.getEvalOutput(this.state.value)
    } else {
      output = <span className="output empty">Type something to see the evaluated output</span>
    }
    return output
  }
  getConsoleOutput(source) {
    const oldLog = console.log
    const logOutput = []
    console.log = (...args) => {
      if (args.length > 1) {
        logOutput.push(args)
      } else {
        logOutput.push(args[0])
      }
    }
    try {
      eval(source)
      console.log = oldLog
      if (logOutput.length < 1)
        return (
          <span className="output empty">
            Try logging something to the console to see some output
          </span>
        )
      return (
        <AceEditor
          className="output valid"
          width="50%"
          height="100%"
          mode="javascript"
          theme="ambiance"
          readOnly
          value={logOutput.map(value => inspect(value)).join(';\n')}
        />
      )
    } catch (err) {
      console.log = oldLog
      return <span className="output error">{inspect(err)}</span>
    }
  }
  getEvalOutput(source) {
    try {
      const output = eval(source)
      let outputSource = inspect(output)
      //console.log('x', outputSource)
      return (
        <AceEditor
          className="output valid"
          width="50%"
          height="100%"
          mode="javascript"
          theme="ambiance"
          readOnly
          value={outputSource}
        />
      )
    } catch (err) {
      return <span className="output error">{inspect(err)}</span>
    }
  }
  handleChange(output) {
    this.setState({ value: output })
  }
  reset() {
    this.setState({ value: this.props.value || '' })
  }
  run() {
    this.setState({ output: this.getOutput(true) })
  }
  share() {
    this.setState({
      shareURL: 'https://yourfirstrpg.com/rpg/editor?code=' + encodeURIComponent(this.state.value)
    })
  }
  closeSharing() {
    this.setState({ shareURL: null })
  }
}

export default CodeSandbox
