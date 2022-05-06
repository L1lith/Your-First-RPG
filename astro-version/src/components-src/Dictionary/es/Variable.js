import HoverDefinition from '../../HoverDefinition'

const VariableDef = props => (
  <HoverDefinition
    definition={`Una "variable" contiene cualquier tipo de datos que desee. Tienen etiqueta y valor.`}
    {...props}
  >
    {props.children || 'variable'}
  </HoverDefinition>
)

export default VariableDef
