import HoverDefinition from '../../HoverDefinition'

const Interpreter = props => (
  <HoverDefinition
    definition="The JavaScript interpreter is the software that runs your code, like the engine"
    {...props}
  >
    {props.children || 'interpreter'}
  </HoverDefinition>
)

export default Interpreter
