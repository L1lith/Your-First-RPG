import HoverDefinition from '../../HoverDefinition'

const Stack = props => (
  <HoverDefinition
    definition={`Su "stack" (como un pila) es la lista de software / aplicaciones que usa para codificar`}
    {...props}
  >
    {props.children || 'stack'}
  </HoverDefinition>
)

export default Stack
