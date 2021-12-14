import HoverDefinition from '../HoverDefinition'

const Expression = props => (
  <HoverDefinition
    definition="An expression is a piece of code that can be reduced into a value"
    {...props}>
    {props.children || 'expression'}
  </HoverDefinition>
)

export default Expression
