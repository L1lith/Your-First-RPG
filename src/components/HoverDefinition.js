import { definition, hoverDefinition } from '../styles/HoverDefinition.module.scss'
import useSmartToggle from '../functions/useSmartToggle'

// const validDirections = ['up', 'left', 'down', 'right']

// const directionMap = {
//   up,
//   down,
//   left,
//   right
// }

function HoverDefinition(props) {
  const [ref, isActive] = useSmartToggle()
  if (typeof props.children != 'string') throw new Error('Expected a text child')
  if (typeof props.definition != 'string') throw new Error('Expected a definition')
  // const direction = props.hasOwnProperty('direction') ? props.direction : 'up'
  // if (!validDirections.includes(direction)) throw new Error('Invalid Direction Specified')
  return (
    <span className={hoverDefinition} ref={ref}>
      {isActive ? <span className={definition}>{props.definition}</span> : null}
      {props.children}
    </span>
  )
}

export default HoverDefinition
