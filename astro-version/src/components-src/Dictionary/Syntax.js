import HoverDefinition from '../../HoverDefinition'

const Syntax = props => (
  <HoverDefinition
    definition="The syntax is the grammer (or rules) of the programming language"
    {...props}
  >
    {props.children || 'syntax'}
  </HoverDefinition>
)

export default Syntax
