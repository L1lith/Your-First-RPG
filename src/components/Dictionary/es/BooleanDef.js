import HoverDefinition from '../../HoverDefinition'

const BooleanDef = props => (
  <HoverDefinition
    definition="Un booleano es algo que es verdadero o falso, como una pregunta de sí o no."
    {...props}>
    {props.children || 'boolean'}
  </HoverDefinition>
)

export default BooleanDef
