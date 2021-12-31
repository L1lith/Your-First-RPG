import HoverDefinition from '../HoverDefinition'

const StringDef = props => (
  <HoverDefinition
    definition="A string is a piece of human text your computer knows isn't code, but it can still be used in your code"
    {...props}
  >
    {props.children || 'string'}
  </HoverDefinition>
)

export default StringDef
