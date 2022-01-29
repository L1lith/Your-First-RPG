import adLibs from '!!raw-loader!../boiler/playground/adLibs'
import darkWalk from '!!raw-loader!../boiler/playground/darkWalk'
import elfQuest from '!!raw-loader!../boiler/playground/elfQuest'
import memorizationGame from '!!raw-loader!../boiler/playground/memorizationGame'
import rockPaperScissors from '!!raw-loader!../boiler/playground/rockPaperScissors'
import Link from '../components/TranslatedLink'
import {
  games,
  game,
  title,
  description,
  play,
  source,
  author
} from '../styles/Playground.module.scss'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helmet } from 'react-helmet'
import { sanitize, ANY } from 'sandhands'

export default function Playground() {
  return (
    <>
      <Helmet>
        <title>The Playground</title>
        <meta name="description" content="Play the RPG games other people have made!" />
      </Helmet>
      <h1>The Playground</h1>
      <p>
        Here are a bunch of games to try 🙂 Try clicking "See the code!" to see how they were coded.
        <br />
        Once you make your own game you can submit a request to have your game featured on this
        website by going{' '}
        <a
          target="_blank"
          className="bold"
          href="https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=rpg+display&template=display-your-project-on-the-site.md">
          here.
        </a>{' '}
      </p>
      <div className={games}>
        <Game
          title="Funny Ad Libs"
          code={adLibs}
          description="A silly story creator"
          author="Lilith"
          source="adLibs"
        />
        <Game
          title="The Memorization Game"
          code={memorizationGame}
          description="See how many words you can remember in a row"
          author="Lilith"
          source="memorizationGame"
        />
        <Game
          title="Rock Paper Scissors"
          code={rockPaperScissors}
          description="A game of chance"
          author="Lilith"
          source="rockPaperScissors"
        />
        <Game
          title="A Dark Night"
          code={darkWalk}
          description="Take a walk in a dark city"
          author="Lilith"
          source="darkWalk"
        />
        <Game
          title="Elf Quest"
          code={elfQuest}
          description="Go on an RPG adventure as a lost elf. Based on the starter code in the game editor."
          author="Lilith"
          source="elfQuest"
        />
      </div>
    </>
  )
}

const gamePropsFormat = {
  _: {
    code: String,
    title: String,
    thumbnail: ANY,
    description: String,
    author: String,
    source: String
  },
  optionalProps: ['thumbnail', 'source']
}

function Game(props) {
  sanitize(props, gamePropsFormat)
  return (
    <div className={game}>
      <h2 className={title}>{props.title}</h2>
      <span className={author}>By {props.author}</span>
      <p className={description}>{props.description}</p>
      <span
        onClick={() => {
          eval(props.code)
        }}
        className={'icon ' + play}>
        <FontAwesomeIcon title="Play the game" icon={faPlayCircle} />
      </span>
      {typeof props.source == 'string' ? (
        <Link className={source} to={'/rpg/editor?code=' + encodeURIComponent(props.source)}>
          See the code!
        </Link>
      ) : null}
    </div>
  )
}
