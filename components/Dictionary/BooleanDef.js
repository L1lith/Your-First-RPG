import HoverDefinition from '../HoverDefinition'

const BooleanDef = props => (
  <HoverDefinition
    definition="A boolean is something that is either true or false, like a yes or no question"
    {...props}>
    {props.children || 'boolean'}
  </HoverDefinition>
)

export default BooleanDef
