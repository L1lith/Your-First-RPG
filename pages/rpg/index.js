import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default () => (
  <div className="coding-intro">
    <h1 className="title">Section 4: 🎮 Building an RPG</h1>
    <NextSeo title="#4.0 Let's make a Game! 🎮" />
    <ol className="toc pages">
      <h2>Pages</h2>

      <li>
        <Link href="#lesson">
          <a>#4.0 Let's make a Game! 🎮</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg/communication">
          <a>#4.1 Communicating with the Player 🗣️</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg/publishing">
          <a>#4.2 Publishing your RPG 🏆</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg/summary">
          <a>#4.3 Summary & Further Reading 🔭</a>
        </Link>
      </li>
    </ol>
    <h2 id="lesson">#4.0 Let's make a Game! 🎮</h2>
    <br />
    <span className="intro-card">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/HBEKDNndVDI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      Have fun with it!
    </span>

    <p>
      In this section I'll go over how to create your own text RPG. I've been teaching you a lot
      about how to code, and now I'd like you to take the reigns and be creative 😊 You can create
      anything you can think of!
    </p>
    <Link href="/rpg/communication">
      <a className="next">Up next: #4.1 Talking to the Player 🗣️</a>
    </Link>
  </div>
)
