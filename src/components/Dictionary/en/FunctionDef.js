import HoverDefinition from '../../HoverDefinition'

const FunctionDef = props => (
  <HoverDefinition
    definition="A function is a re-usable piece of code with it's own set of inputs, rules, and outputs. It's like a miniature logic model that saves us time!"
    {...props}
  >
    {props.children || 'function'}
  </HoverDefinition>
)

export default FunctionDef
