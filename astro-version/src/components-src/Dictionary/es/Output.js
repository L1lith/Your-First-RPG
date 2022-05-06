import HoverDefinition from '../../HoverDefinition'

const Output = props => (
  <HoverDefinition definition={`Tu "output" es el resultado de tu modelo lógico`} {...props}>
    {props.children || 'output'}
  </HoverDefinition>
)

export default Output
