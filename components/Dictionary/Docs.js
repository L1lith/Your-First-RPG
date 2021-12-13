import HoverDefinition from '../HoverDefinition'

const docs = props => (
  <HoverDefinition
    definition="docs is short for documentation, which is a site that describes something"
    {...props}>
    {props.children || 'docs'}
  </HoverDefinition>
)

export default docs
