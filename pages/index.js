import Link from 'next/link'
import YTVideo from '../components/YTVideo'
import styles from '../styles/index.module.scss'
import { NextSeo } from 'next-seo'

export default () => (
  <div className={styles.home}>
    <NextSeo description="Learn to make games in JavaScript for beginners" />
    <h1 className="title">
      <span className="smaller-text">Coding Intro:</span>
      <br />
      Making a Game
    </h1>
    <span className="intro-card">
      <YTVideo url="-jRREn6ifEQ" />
      Coding is a lot like human language, and they both need diversity
    </span>
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
