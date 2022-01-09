import LevelThreeGame from '../../components/BooleanGame/levels/LevelThree'
import BooleanDef from '../../components/Dictionary/es/BooleanDef'
import Expression from '../../components/Dictionary/es/Expression'
import Operator from '../../components/Dictionary/es/Operator'
import Syntax from '../../components/Dictionary/es/Syntax'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function LevelThree() {
  return (
    <div className="level-3">
      <Helmet>
        <title>💻 Booleans for Apps</title>
      </Helmet>
      <h2>#2.3 💻 Booleans for coding Apps</h2>
      <br />
      <p>
        ¿Cómo se relaciona la lógica <BooleanDef /> con la codificación? Cuando un programador está
        codificando, escribe en un lenguaje especial llamado <Syntax />. Cada lenguaje de
        codificación puede tener diferentes <Syntax>syntaxes</Syntax>, pero en última instancia, son
        solo diferentes formas de representar nuestros modelos lógicos utilizando código.
        <br />
        <br />
        En lugar de escribir enormes combinaciones de OR, NOT y otros <Operator>
          operators
        </Operator>{' '}
        lógicos, los ingenieros de software crearon convenientemente lenguajes de codificación con
        características que nos permiten decir lo que estamos tratando de hacer más fácilmente. De
        hecho, casi todos los lenguajes de codificación tienen soporte para lógica <BooleanDef />{' '}
        incorporada, que es una parte esencial de su kit de herramientas como codificador.
        <br />
        <br />
        He preparado un desafío final en caso de que desee probar sus habilidades en el juego de
        combinación una vez más antes de proceder a hablar sobre codificación.
      </p>
      <LevelThreeGame />
      <br />
      <p>
        You might have noticed that when given a NOT <Operator /> with multiple values, it is
        sometimes easier to think of it as simply a request for whatever is missing. This is an
        example of how we can build more complex rules from simplistic systems. Writing good
        software is about learning to create apps with complex capabilities without making the code
        itself overly complex or messy.
        <br />
        <br />
        Like speaking any language (human or machine), learning how to better express yourself (by
        using clean code and good design practices) allows you to say more while writing less.
        Spending more time to think about your code from a design perspective will allow you to save
        countless hours dealing with mind-numbing bugs and other issues.
      </p>
      <p>
        Many coding languages have the capabilities to compare and transform other kinds of data
        more advanced than <BooleanDef>booleans</BooleanDef>, which is very powerful. We can do
        things like evaluate math <Expression>expressions</Expression>, compare text, and more.
        Watch this video to see this in practice, and to see the relationship between the{' '}
        <BooleanDef /> logic and coding mental models.
      </p>
      <YTVideo url="_j9nvYKaOVE" thumbnail="/images/cs-discoveries.jpg" />
      <Link className="next" to="/coding">
        Siguiente: #3.0 🛣️ Stepping into Coding
      </Link>
    </div>
  )
}
