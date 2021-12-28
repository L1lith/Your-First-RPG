import { Link } from 'gatsby'
//import BooleanGame from "../../components/BooleanGame";
import { Helmet } from 'react-helmet'

export default function ToyingIntro() {
  return (
    <div className="toying-intro">
      <Helmet>
        <title>🧩 Logic Puzzles</title>
      </Helmet>
      <h1 className="title">Chapter 2</h1>
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
      <h2 id="lesson">#2.0 🧩 Playing around with Logic Puzzles</h2>
      <br />
      <span className="introCard">
        <img src="/images/milleniumPuzzle.webp" />
        <br />
        *course not guaranteed to unlock the secrets of any card game universe*
      </span>
      <br />
      <br />
      <p>
        Now that you've got a grasp on how to visualize your logic model, you will practice
        visualizing your own logic model while playing a puzzle game. This hands-on problem solving
        lesson will put you in a coding mindset before reading or writing a single line of code.
      </p>
      <Link href="/toying/level-one">
        <a className="next">Next: #2.1 💬 Basic "Or" Boolean Logic</a>
      </Link>
    </div>
  )
}
