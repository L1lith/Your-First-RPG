import Link from '../../components/TranslatedLink'
//import BooleanGame from "../../components/BooleanGame";
import { Helmet } from 'react-helmet'

export default function ToyingIntro() {
  return (
    <div className="toying-intro">
      <Helmet>
        <title>🧩 Rompecabezas Lógicos</title>
      </Helmet>
      <h1 className="title">Capitulo 2</h1>
      <ol className="toc pages">
        <li>
          <Link to="/toying#lesson">#2.0 🧩 Jugando con rompecabezas lógicos</Link>
        </li>
        <li>
          <Link to="/toying/level-one">#2.1 💬 Expressions "Or" básicas</Link>
        </li>
        <li>
          <Link to="/toying/level-two">#2.2 🚫 Lo que es "NOT" permitido</Link>
        </li>
        <li>
          <Link to="/toying/level-three">#2.3 💻 Booleanos para aplicaciones de codificación</Link>
        </li>
      </ol>
      <br />
      <br />
      <h2 id="lesson">#2.0 🧩 Jugando con rompecabezas lógicos</h2>
      <br />
      <span className="introCard">
        <img src="/images/milleniumPuzzle.webp" />
        <br />
        *Por supuesto, no se garantiza que desbloquee los secretos de ningún universo de juegos de
        cartas.*
      </span>
      <br />
      <br />
      <p>
        Ahora que comprende cómo visualizar su modelo lógico, practicará visualizando su propio
        modelo lógico mientras juega un juego de rompecabezas. Esta solución práctica de problemas
        lección le pondrá en una mentalidad de codificación antes de leer o escribir una sola línea
        de código.
      </p>
      <Link className="next" to="/toying/level-one">
        Siguiente: #2.1 💬 Expressions "Or" básicas
      </Link>
    </div>
  )
}
