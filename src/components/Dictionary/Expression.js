import HoverDefinition from '../HoverDefinition'

const Expression = props => (
  <HoverDefinition
    definition="An expression is a piece of code that can be reduced to a single value, like a math equation"
    {...props}>
    {props.children || 'expression'}
  </HoverDefinition>
)

export default Expression
