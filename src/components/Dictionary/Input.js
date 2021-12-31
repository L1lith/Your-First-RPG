import HoverDefinition from '../HoverDefinition'

const Input = props => (
  <HoverDefinition definition="Your input is data that goes into your logic model" {...props}>
    {props.children || 'input'}
  </HoverDefinition>
)

export default Input
