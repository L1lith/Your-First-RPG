import HoverDefinition from '../HoverDefinition'

const FunctionDef = props => (
  <HoverDefinition
    definition="A variable holds any kind of data you want. They have a label and value."
    {...props}
  >
    {props.children || 'variable'}
  </HoverDefinition>
)

export default FunctionDef
