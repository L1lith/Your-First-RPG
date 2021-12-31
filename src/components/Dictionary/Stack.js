import HoverDefinition from '../HoverDefinition'

const Stack = props => (
  <HoverDefinition
    definition="Your stack is the list of software/apps that you use to code"
    {...props}
  >
    {props.children || 'stack'}
  </HoverDefinition>
)

export default Stack
