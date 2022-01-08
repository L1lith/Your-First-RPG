import HoverDefinition from '../../HoverDefinition'

const Input = props => (
  <HoverDefinition definition="Tu input son datos que entran en tu modelo lógico" {...props}>
    {props.children || 'input'}
  </HoverDefinition>
)

export default Input
