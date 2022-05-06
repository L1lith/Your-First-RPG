import HoverDefinition from '../../HoverDefinition'

const Operator = props => (
  <HoverDefinition
    definition="An operator is an action in coding that inputs and outputs data, like comparing two booleans, or adding two numbers"
    {...props}
  >
    {props.children || 'operator'}
  </HoverDefinition>
)

export default Operator
