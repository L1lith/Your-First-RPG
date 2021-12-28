import HoverDefinition from '../HoverDefinition'

const Output = props => (
  <HoverDefinition definition="Your output is the result of your logic model" {...props}>
    {props.children || 'output'}
  </HoverDefinition>
)

export default Output
