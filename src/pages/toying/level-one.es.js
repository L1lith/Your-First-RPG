import LevelOneGame from '../../components/BooleanGame/levels/LevelOne'
import BooleanDef from '../../components/Dictionary/es/BooleanDef'
import Expression from '../../components/Dictionary/es/Expression'
import Operator from '../../components/Dictionary/es/Operator'
import Link from '../../components/TranslatedLink'
import BooleanOps from '../../components/booleanOps'
import { Helmet } from 'react-helmet'

export default function LevelOne() {
  return (
    <div className="level-1">
      <Helmet>
        <title>💬 Expressions "Or" básicas</title>
        <meta
          name="description"
          content={'¡Aprende sobre las expresiones "Or" con un juego simple!'}
        />
      </Helmet>
      <h2>#2.1 💬 Expressions "Or" básicas</h2>
      <br />
      <span className="introCard">
        <BooleanOps />
        Aquí puede ver un gráfico de las <BooleanDef /> <Operator>operations</Operator> básicas (&
        significa "And", || significa "Or")
      </span>
      <p>
        En esta sección jugaremos el juego Matching Rules para aprender sobre la lógica{' '}
        <BooleanDef />. La lógica <BooleanDef /> es el lenguaje fundamental del que están hechos
        tanto los circuitos electrónicos como las computadoras, y resulta ser una gran herramienta
        para aprender cómo hablamos con las computadoras.
        <br />
        <br />
        La lógica <BooleanDef>boolean</BooleanDef> contiene un conjunto de{' '}
        <Expression>expressions</Expression> (una especie de lenguaje de codificación) que nos
        permite realizar <Operator>operations</Operator> básicas sobre datos. Las declaraciones
        verdaderas o falsas (valores booleanos como sí o no) son el tipo principal de{' '}
        <Expression>expressions</Expression> que se manejan con lógica <BooleanDef />. Esto
        significa que podemos preguntarle a la computadora preguntas de sí o no usando un código
        para decirle qué hacer.
      </p>
      <br />
      <h2>El Operator "Or"</h2>
      <p>
        O es un <Operator /> lógico que solo dará como resultado verdadero si al menos una de sus
        entradas es verdadera. En el primer nivel del Matching Game experimentaremos con el{' '}
        <Operator /> Or. Elija solo las fichas cuyos colores y formas pueden ganar.
      </p>
      <LevelOneGame />
      <p>
        Una vez que haya jugado el primer nivel del Juego de emparejar varias veces y esté seguro de
        que lo entiende, O continúe con la siguiente sección para aprender acerca de las{' '}
        <Expression>expressions</Expression> "Not" 😊
      </p>
      <Link className="next" to="/toying/level-two">
        Siguiente: #2.2 🚫 Lo que es "NOT" permitido
      </Link>
    </div>
  )
}
