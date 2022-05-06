import HoverDefinition from '../../HoverDefinition'

const FunctionDef = props => (
  <HoverDefinition
    definition={`Una "function" es un fragmento de código reutilizable con su propio conjunto de entradas, reglas y salidas. ¡Es como un modelo lógico en miniatura que nos ahorra tiempo!`}
    {...props}
  >
    {props.children || 'function'}
  </HoverDefinition>
)

export default FunctionDef
