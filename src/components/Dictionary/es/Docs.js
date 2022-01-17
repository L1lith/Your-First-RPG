import HoverDefinition from '../../HoverDefinition'

const docs = props => (
  <HoverDefinition
    definition="docs es la abreviatura de documentación, que es un sitio que describe algo"
    {...props}
  >
    {props.children || 'docs'}
  </HoverDefinition>
)

export default docs
