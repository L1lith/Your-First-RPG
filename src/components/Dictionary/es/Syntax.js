import HoverDefinition from '../../HoverDefinition'

const Syntax = props => (
  <HoverDefinition
    definition={`La "syntax" es la gramática (o reglas) del lenguaje de programación.`}
    {...props}>
    {props.children || 'syntax'}
  </HoverDefinition>
)

export default Syntax
