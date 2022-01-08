import HoverDefinition from '../../HoverDefinition'

const Operator = props => (
  <HoverDefinition
    definition="A coding operator is a tool in the language that inputs and outputs data"
    {...props}>
    {props.children || 'operator'}
  </HoverDefinition>
)

export default Operator
