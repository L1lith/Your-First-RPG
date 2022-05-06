import HoverDefinition from '../../HoverDefinition'

const Expression = props => (
  <HoverDefinition
    definition='Una "expression" es un fragmento de código que se puede reducir a un solo valor, como una ecuación matemática'
    {...props}
  >
    {props.children || 'expression'}
  </HoverDefinition>
)

export default Expression
