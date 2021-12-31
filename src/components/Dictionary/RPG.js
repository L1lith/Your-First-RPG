import HoverDefinition from '../HoverDefinition'

const RPG = props => (
  <HoverDefinition
    definition="RPG stand for Role Playing Game, which is a kind of adventure game"
    {...props}
  >
    {props.children || 'RPG'}
  </HoverDefinition>
)

export default RPG
