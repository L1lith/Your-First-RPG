import HoverDefinition from '../../HoverDefinition'

const Operator = props => (
  <HoverDefinition
    definition={`Un "operator" de codificación es una herramienta en el lenguaje que ingresa y emite datos.`}
    {...props}>
    {props.children || 'operator'}
  </HoverDefinition>
)

export default Operator
