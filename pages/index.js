import Link from 'next/link'
import './index.scss'

export default () => (
  <div className="home">
    <h1 className="title">
      <span className="smaller-text">Intro to Coding:</span>
      <br />
      Coding your first Role Playing Game
    </h1>
    <p>
      In this course I will describe mental models to show how & why we apply them to coding and
      other tasks. I will also teach you JavaScript, and show you how to make your own text based
      RPG and share it with your friends :)
    </p>
    <ol className="toc sections">
      <h2>Sections</h2>
      <li>
        <Link href="/vision">
          <a>👀 Visualizing Mental Models</a>
        </Link>
      </li>
      <li>
        <Link href="/toying">
          <a>👐 Toying with Logic Models</a>
        </Link>
      </li>
      <li>
        <Link href="/coding">
          <a>💻 Learning to Code</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg">
          <a>🎮 Building an RPG</a>
        </Link>
      </li>
    </ol>
    <div className="extras">
      {
        null /*<Link href="/faq">
      <a>Frequently Asked Questions</a>
</Link>*/
      }
      <Link href="/resources">
        <a>Remember to check out the resource section if you get stuck</a>
      </Link>
    </div>
  </div>
)
