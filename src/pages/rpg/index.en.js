import RPG from '../../components/Dictionary/RPG'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function LetsMakeAGame() {
  return (
    <div className="coding-intro">
      <h1 className="title">Chapter 4</h1>
      <Helmet>
        <title>🎮 Let's make a Game!</title>
      </Helmet>
      <ol className="toc pages">
        <li>
          <Link to="#lesson">
            <a>#4.0 🎮 Let's make a Game!</a>
          </Link>
        </li>
        <li>
          <Link to="/rpg/communication">
            <a>#4.1 🗣️ Communicating with the Player</a>
          </Link>
        </li>
        <li>
          <Link to="/rpg/publishing">
            <a>#4.2 🏆 Sharing your RPG</a>
          </Link>
        </li>
        <li>
          <Link to="/rpg/editor">
            <a>#4.3 🛠️ The Game Editor</a>
          </Link>
        </li>
        <li>
          <Link to="/rpg/summary">
            <a>#4.4 🔭 You Won! Further Reading</a>
          </Link>
        </li>
      </ol>
      <h2 id="lesson">#4.0 Let's make a Game! 🎮</h2>
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
      <Link to="/rpg/communication">
        <a className="next">Next: #4.1 🗣️ Talking to the Player</a>
      </Link>
    </div>
  )
}
