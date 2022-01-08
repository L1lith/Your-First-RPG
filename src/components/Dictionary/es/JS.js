import HoverDefinition from '../../HoverDefinition'

const BooleanDef = props => (
  <HoverDefinition
    definition="JS es la abreviatura de JavaScript, el lenguaje de codificación"
    {...props}>
    {props.children || 'JS'}
  </HoverDefinition>
)

export default BooleanDef
