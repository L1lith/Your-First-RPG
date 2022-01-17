import HoverDefinition from '../../HoverDefinition'

const Scope = props => (
  <HoverDefinition
    definition="The scope is the size of the features and tasks in a project"
    {...props}
  >
    {props.children || 'scope'}
  </HoverDefinition>
)

export default Scope
