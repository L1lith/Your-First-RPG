import HoverDefinition from '../../HoverDefinition'

const BooleanDef = props => (
  <HoverDefinition
    definition="An aha moment is the satisfying feeling when you finally understand something"
    {...props}>
    {props.children || 'aha moment'}
  </HoverDefinition>
)

export default BooleanDef
