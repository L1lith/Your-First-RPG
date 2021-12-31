import HoverDefinition from '../HoverDefinition'

const Rules = props => (
  <HoverDefinition
    definition={
      'This is the "logic" or "code" of your logic model. The rules are used to decide what the output of our model is based on the input'
    }
    {...props}
  >
    {props.children || 'rules'}
  </HoverDefinition>
)

export default Rules
