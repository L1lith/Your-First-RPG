import LevelOneGame from '../../components/BooleanGame/levels/LevelOne'
import BooleanDef from '../../components/Dictionary/es/BooleanDef'
import Expression from '../../components/Dictionary/es/Expression'
import Operator from '../../components/Dictionary/es/Operator'
import Link from '../../components/TranslatedLink'
import BooleanOps from '../../components/booleanOps'
import { Helmet } from 'react-helmet'

export default function LevelOne() {
  return (
    <>
      <Helmet>
        <title>馃挰 Expressions "Or" b谩sicas</title>
        <meta
          name="description"
          content={'隆Aprende sobre las expresiones "Or" con un juego simple!'}
        />
      </Helmet>
      <h2>#2.1 馃挰 Expressions "Or" b谩sicas</h2>
      <br />
      <span className="introCard">
        <BooleanOps />
        Aqu铆 puede ver un gr谩fico de las <BooleanDef /> <Operator>operations</Operator> b谩sicas (&
        significa "And", || significa "Or")
      </span>
      <p>
        En esta secci贸n jugaremos el juego Matching Rules para aprender sobre la l贸gica{' '}
        <BooleanDef />. La l贸gica <BooleanDef /> es el lenguaje fundamental del que est谩n hechos
        tanto los circuitos electr贸nicos como las computadoras, y resulta ser una gran herramienta
        para aprender c贸mo hablamos con las computadoras.
        <br />
        <br />
        La l贸gica <BooleanDef>boolean</BooleanDef> contiene un conjunto de{' '}
        <Expression>expressions</Expression> (una especie de lenguaje de codificaci贸n) que nos
        permite realizar <Operator>operations</Operator> b谩sicas sobre datos. Las declaraciones
        verdaderas o falsas (valores booleanos como s铆 o no) son el tipo principal de{' '}
        <Expression>expressions</Expression> que se manejan con l贸gica <BooleanDef />. Esto
        significa que podemos preguntarle a la computadora preguntas de s铆 o no usando un c贸digo
        para decirle qu茅 hacer.
      </p>
      <br />
      <h2>El Operator "Or"</h2>
      <p>
        O es un <Operator /> l贸gico que solo dar谩 como resultado verdadero si al menos una de sus
        entradas es verdadera. En el primer nivel del Matching Game experimentaremos con el{' '}
        <Operator /> Or. Elija solo las fichas cuyos colores y formas pueden ganar.
      </p>
      <LevelOneGame />
      <p>
        Una vez que haya jugado el primer nivel del Juego de emparejar varias veces y est茅 seguro de
        que lo entiende, O contin煤e con la siguiente secci贸n para aprender acerca de las{' '}
        <Expression>expressions</Expression> "Not" 馃槉
      </p>
      <Link className="next" to="/toying/level-two">
        Siguiente: #2.2 馃毇 Lo que es "NOT" permitido
      </Link>
    </>
  )
}
