import RPG from '../../components/Dictionary/es/RPG'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function LetsMakeAGame() {
  return (
    <div className="coding-intro">
      <h1 className="title">Chapter 4</h1>
      <Helmet>
        <title>🎮 Construyendo un juego!</title>
      </Helmet>
      <ol className="toc pages">
        <li>
          <Link to="/rpg#lesson">#4.0 🎮 Construyendo un juego!</Link>
        </li>
        <li>
          <Link to="/rpg/communication">#4.1 🗣️ Comunicarse con el jugador</Link>
        </li>
        <li>
          <Link to="/rpg/publishing">#4.2 🏆 Compartiendo tu juego RPG</Link>
        </li>
        <li>
          <Link to="/rpg/editor">#4.3 🛠️ La editora de juegos</Link>
        </li>
        <li>
          <Link to="/rpg/summary">#4.4 🔭 ¡Ganaste! Otras lecturas</Link>
        </li>
      </ol>
      <h2 id="lesson">#4.0 🎮 Construyendo un juego!</h2>
      <br />
      <span className="introCard">
        <YTVideo url="eMR6c8xbgpc" thumbnail="/images/heart-of-the-forest.jpg" />
        ¡Diviértete con eso!
      </span>

      <p>
        En esta sección, repasaré cómo crear su propio juego <RPG /> basado en texto. He estado
        enseñándote mucho sobre cómo codificar, y ahora me gustaría que tomes las riendas y seas
        creativo 😊 ¡Puedes crear cualquier cosa que se te ocurra!
      </p>
      <Link className="next" to="/rpg/communication">
        Siguiente: #4.1 🗣️ Comunicarse con el jugador
      </Link>
    </div>
  )
}
