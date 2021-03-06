import Link from '../../components/TranslatedLink'
//import BooleanGame from "../../components/BooleanGame";
import { Helmet } from 'react-helmet'

export default function ToyingIntro() {
  return (
    <>
      <Helmet>
        <title>馃З Rompecabezas L贸gicos</title>
        <meta name="description" content="Aprende sobre l贸gica booleana usando rompecabezas" />
      </Helmet>
      <h1 className="title">Capitulo 2</h1>
      <ol className="toc pages">
        <li>
          <Link to="/toying#lesson">#2.0 馃З Jugando con rompecabezas l贸gicos</Link>
        </li>
        <li>
          <Link to="/toying/level-one">#2.1 馃挰 Expressions "Or" b谩sicas</Link>
        </li>
        <li>
          <Link to="/toying/level-two">#2.2 馃毇 Lo que es "NOT" permitido</Link>
        </li>
        <li>
          <Link to="/toying/level-three">#2.3 馃捇 Booleans para aplicaciones de codificaci贸n</Link>
        </li>
      </ol>
      <br />
      <br />
      <h2 id="lesson">#2.0 馃З Jugando con rompecabezas l贸gicos</h2>
      <br />
      <span className="introCard">
        <img src="/images/milleniumPuzzle.webp" />
        <br />
        *Por supuesto, no se garantiza que desbloquee los secretos de ning煤n universo de juegos de
        cartas.*
      </span>
      <br />
      <br />
      <p>
        Ahora que comprende c贸mo visualizar su modelo l贸gico, practicar谩 visualizando su propio
        modelo l贸gico mientras juega un juego de rompecabezas. Esta soluci贸n pr谩ctica de problemas
        lecci贸n le pondr谩 en una mentalidad de codificaci贸n antes de leer o escribir una sola l铆nea
        de c贸digo.
      </p>
      <Link className="next" to="/toying/level-one">
        Siguiente: #2.1 馃挰 Expressions "Or" b谩sicas
      </Link>
    </>
  )
}
