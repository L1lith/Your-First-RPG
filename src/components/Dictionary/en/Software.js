import HoverDefinition from '../../HoverDefinition'

const Software = props => (
  <HoverDefinition
    definition="Software is any project that you code. This can be an app or a website or anything else you can imagine."
    {...props}>
    {props.children || 'software'}
  </HoverDefinition>
)

export default Software
