import HoverDefinition from '../../HoverDefinition'

const StringDef = props => (
  <HoverDefinition
    definition={`Una "cadena" es un fragmento de texto humano que su computadora sabe que no es código, pero aún puede usarse en su código`}
    {...props}
  >
    {props.children || 'string'}
  </HoverDefinition>
)

export default StringDef
