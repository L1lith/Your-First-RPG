import HoverDefinition from '../../HoverDefinition'

const Input = props => (
  <HoverDefinition definition={``} {...props}>
    {props.children || 'input'}
  </HoverDefinition>
)

export default Input
