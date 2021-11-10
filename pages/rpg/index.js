import Link from 'next/link'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'

export default () => (
  <div className="coding-intro">
    <h1 className="title">Chapter 4</h1>
    <NextSeo title="🎮 Let's make a Game!" />
    <ol className="toc pages">
      <li>
        <Link href="#lesson">
          <a>#4.0 🎮 Let's make a Game!</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg/communication">
          <a>#4.1 🗣️ Communicating with the Player</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg/publishing">
          <a>#4.2 🏆 Sharing your RPG</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg/editor">
          <a>#4.3 🛠️ The Game Editor</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg/summary">
          <a>#4.4 🔭 Summary & Further Reading</a>
        </Link>
      </li>
    </ol>
    <h2 id="lesson">#4.0 Let's make a Game! 🎮</h2>
    <br />
    <span className="intro-card">
      <YTVideo url="eMR6c8xbgpc" thumbnail="/images/heart-of-the-forest.jpg" />
      Have fun with it!
    </span>

    <p>
      In this section I'll go over how to create your own text RPG game. I've been teaching you a
      lot about how to code, and now I'd like you to take the reigns and be creative 😊 You can
      create anything you can think of!
    </p>
    <Link href="/rpg/communication">
      <a className="next">Next: #4.1 🗣️ Talking to the Player</a>
    </Link>
  </div>
)
