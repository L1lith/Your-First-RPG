import HoverDefinition from '../../HoverDefinition'

const Operator = props => (
  <HoverDefinition
    definition={`Un "operador" es una acción en la codificación que ingresa y genera datos, como comparar dos valores booleanos o sumar dos números.`}
    {...props}>
    {props.children || 'operator'}
  </HoverDefinition>
)

export default Operator
