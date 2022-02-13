import HoverDefinition from '../../HoverDefinition'

const Software = props => (
  <HoverDefinition
    definition="Software is anything that you code. This can be an app or an operating system like Windows or anything you can imagine."
    {...props}>
    {props.children || 'software'}
  </HoverDefinition>
)

export default Software
