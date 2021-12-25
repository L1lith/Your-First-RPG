import Link from 'next-multilingual/link'
//import BooleanGame from "../../components/BooleanGame";
import { NextSeo } from 'next-seo'
import { useMessages } from 'next-multilingual/messages'

export default () => {
  const messages = useMessages()
  return (
    <div className="toying-intro">
      <NextSeo title="🧩 Logic Puzzles" />
      <h1 className="title">{messages.format('chapterTwo')}</h1>
      <ol className="toc pages">
        <li>
          <Link href="/toying#lesson">
            <a>#2.0 🧩 Playing around with Logic Puzzles</a>
          </Link>
        </li>
        <li>
          <Link href="/toying/level-one">
            <a>#2.1 💬 Basic "Or" Expressions</a>
          </Link>
        </li>
        <li>
          <Link href="/toying/level-two">
            <a>#2.2 🚫 Whats "Not" Allowed</a>
          </Link>
        </li>
        <li>
          <Link href="/toying/level-three">
            <a>#2.3 💻 Booleans for Coding Apps</a>
          </Link>
        </li>
      </ol>
      <br />
      <br />
      <h2 id="lesson">{messages.format('pageTitle')}</h2>
      <br />
      <span className="intro-card">
        <img src="/images/milleniumPuzzle.webp" />
        <br />
        {messages.format('introDescription')}
      </span>
      <br />
      <br />
      <p>
        Now that you've got a grasp on logic models, you will practice visualizing your own logic
        model while playing a puzzle game. This hands-on problem solving lesson will put you in a
        coding mindset before reading or writing a single line of code.
      </p>
      <Link href="/toying/level-one">
        <a className="next">{messages.format('nextPageLink')}</a>
      </Link>
    </div>
  )
}
