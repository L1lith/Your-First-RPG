import HoverDefinition from '../HoverDefinition'

const BooleanDef = props => (
  <HoverDefinition definition="JS is short for JavaScript, the coding language" {...props}>
    {props.children || 'JS'}
  </HoverDefinition>
)

export default BooleanDef
