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
          <Link to="/rpg/publishing">#4.2 🏆 Sharing your RPG</Link>
        </li>
        <li>
          <Link to="/rpg/editor">#4.3 🛠️ The Game Editor</Link>
        </li>
        <li>
          <Link to="/rpg/summary">#4.4 🔭 You Won! Further Reading</Link>
        </li>
      </ol>
      <h2 id="lesson">#4.0 🎮 Construyendo un juego!</h2>
      <br />
      <span className="introCard">
        <YTVideo url="eMR6c8xbgpc" thumbnail="/images/heart-of-the-forest.jpg" />
        Have fun with it!
      </span>

      <p>
        In this section I'll go over how to create your own text based <RPG /> game. I've been
        teaching you a lot about how to code, and now I'd like you to take the reigns and be
        creative 😊 You can create anything you can think of!
      </p>
      <Link className="next" to="/rpg/communication">
        Next: #4.1 🗣️ Comunicarse con el jugador
      </Link>
    </div>
  )
}
