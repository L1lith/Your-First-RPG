import HoverDefinition from '../../HoverDefinition'

const RPG = props => (
  <HoverDefinition
    definition={`"RPG" significa Role Playing Game, que es una especie de juego de aventuras.`}
    {...props}>
    {props.children || 'RPG'}
  </HoverDefinition>
)

export default RPG
