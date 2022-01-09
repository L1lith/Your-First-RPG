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
        Es posible que haya notado que cuando se le da un <Operator /> NOT con múltiples valores, a
        veces es más fácil pensar en él como una simple solicitud de lo que falta. Este es un
        ejemplo de cómo podemos construir reglas más complejas a partir de sistemas simplistas.
        Escribir un buen software consiste en aprender a crear aplicaciones con capacidades
        complejas sin hacer que el código en sí sea demasiado complejo o desordenado.
        <br />
        <br />
        Al igual que hablar cualquier idioma (humano o máquina), aprender a expresarse mejor
        (mediante el uso de código limpio y buenas prácticas de diseño) le permite decir más
        mientras escribe menos. Dedicar más tiempo a pensar en su código desde una perspectiva de
        diseño le permitirá ahorrar innumerables horas lidiando con errores que entumecen la mente y
        otros problemas.
      </p>
      <p>
        Muchos lenguajes de codificación tienen la capacidad de comparar y transformar otros tipos
        de datos más avanzados que los <BooleanDef>booleans</BooleanDef>, lo cual es muy poderoso.
        Podemos hacer cosas como evaluar <Expression>expressions</Expression> matemáticas, comparar
        texto y más. Mire este video para ver esto en la práctica y para ver la relación entre la
        lógica <BooleanDef /> y los modelos mentales de codificación.
      </p>
      <YTVideo url="_j9nvYKaOVE" thumbnail="/images/cs-discoveries.jpg" />
      <Link className="next" to="/coding">
        Siguiente: #3.0 🛣️ Aprendiendo a codificar
      </Link>
    </div>
  )
}
