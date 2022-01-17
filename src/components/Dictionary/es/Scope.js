import HoverDefinition from '../../HoverDefinition'

const Scope = props => (
  <HoverDefinition
    definition={`El "scope" es el tamaño de las funciones y tareas de un proyecto.`}
    {...props}
  >
    {props.children || 'scope'}
  </HoverDefinition>
)

export default Scope
