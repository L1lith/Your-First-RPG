import HoverDefinition from '../../HoverDefinition'

const Interpreter = props => (
  <HoverDefinition
    definition={`El "JavaScript Interpreter" es el software que ejecuta su código, como el motor`}
    {...props}>
    {props.children || 'interpreter'}
  </HoverDefinition>
)

export default Interpreter
