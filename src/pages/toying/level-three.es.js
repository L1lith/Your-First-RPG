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
    <>
      <Helmet>
        <title>馃捇 Booleans para aplicaciones de codificaci贸n</title>
        <meta name="description" content="Una revisi贸n de rompecabezas de la l贸gica booleana" />
      </Helmet>
      <h2>#2.3 馃捇 Booleans para aplicaciones de codificaci贸n</h2>
      <br />
      <p>
        驴C贸mo se relaciona la l贸gica <BooleanDef /> con la codificaci贸n? Cuando un programador est谩
        codificando, escribe en un lenguaje especial llamado <Syntax />. Cada lenguaje de
        codificaci贸n puede tener diferentes <Syntax>syntaxes</Syntax>, pero en 煤ltima instancia, son
        solo diferentes formas de representar nuestros modelos l贸gicos utilizando c贸digo.
        <br />
        <br />
        En lugar de escribir enormes combinaciones de OR, NOT y otros <Operator>
          operators
        </Operator>{' '}
        l贸gicos, los ingenieros de software crearon convenientemente lenguajes de codificaci贸n con
        caracter铆sticas que nos permiten decir lo que estamos tratando de hacer m谩s f谩cilmente. De
        hecho, casi todos los lenguajes de codificaci贸n tienen soporte para l贸gica <BooleanDef />{' '}
        incorporada, que es una parte esencial de su kit de herramientas como codificador.
        <br />
        <br />
        He preparado un desaf铆o final en caso de que desee probar sus habilidades en el juego de
        combinaci贸n una vez m谩s antes de proceder a hablar sobre codificaci贸n.
      </p>
      <LevelThreeGame />
      <br />
      <p>
        Es posible que haya notado que cuando se le da un <Operator /> NOT con m煤ltiples valores, a
        veces es m谩s f谩cil pensar en 茅l como una simple solicitud de lo que falta. Este es un
        ejemplo de c贸mo podemos construir reglas m谩s complejas a partir de sistemas simplistas.
        Escribir un buen software consiste en aprender a crear aplicaciones con capacidades
        complejas sin hacer que el c贸digo en s铆 sea demasiado complejo o desordenado.
        <br />
        <br />
        Al igual que hablar cualquier idioma (humano o m谩quina), aprender a expresarse mejor
        (mediante el uso de c贸digo limpio y buenas pr谩cticas de dise帽o) le permite decir m谩s
        mientras escribe menos. Dedicar m谩s tiempo a pensar en su c贸digo desde una perspectiva de
        dise帽o le permitir谩 ahorrar innumerables horas lidiando con errores que entumecen la mente y
        otros problemas.
      </p>
      <p>
        Muchos lenguajes de codificaci贸n tienen la capacidad de comparar y transformar otros tipos
        de datos m谩s avanzados que los <BooleanDef>booleans</BooleanDef>, lo cual es muy poderoso.
        Podemos hacer cosas como evaluar <Expression>expressions</Expression> matem谩ticas, comparar
        texto y m谩s. Mire este video para ver esto en la pr谩ctica y para ver la relaci贸n entre la
        l贸gica <BooleanDef /> y los modelos mentales de codificaci贸n.
      </p>
      <YTVideo url="_j9nvYKaOVE" thumbnail="/images/cs-discoveries.jpg" />
      <Link className="next" to="/coding">
        Siguiente: #3.0 馃洠锔? Aprendiendo a codificar
      </Link>
    </>
  )
}
