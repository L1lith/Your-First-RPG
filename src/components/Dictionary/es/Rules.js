import HoverDefinition from '../../HoverDefinition'

const Rules = props => (
  <HoverDefinition
    definition={
      'Esta es la "lógica" o el "código" de su modelo lógico. Las "rules" se utilizan para decidir cuál es la salida de nuestro modelo en función de la entrada'
    }
    {...props}>
    {props.children || 'rules'}
  </HoverDefinition>
)

export default Rules
