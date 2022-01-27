import Link from '../../components/TranslatedLink'
//import BooleanGame from "../../components/BooleanGame";
import { Helmet } from 'react-helmet'

export default function ToyingIntro() {
  return (
    <div className="toying-intro">
      <Helmet>
        <title>🧩 Logic Puzzles</title>
        <meta name="description" content="Learn about Boolean Logic using puzzles" />
      </Helmet>
      <h1 className="title">Chapter 2</h1>
      <ol className="toc pages">
        <li>
          <Link to="/toying#lesson">#2.0 🧩 Playing around with Logic Puzzles</Link>
        </li>
        <li>
          <Link to="/toying/level-one">#2.1 💬 Basic "Or" Expressions</Link>
        </li>
        <li>
          <Link to="/toying/level-two">#2.2 🚫 Whats "Not" Allowed</Link>
        </li>
        <li>
          <Link to="/toying/level-three">#2.3 💻 Booleans for Coding Apps</Link>
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
        Now that you understand how to visualize your logic model, you can practice visualizing your
        own logic model while playing puzzle games. These games will help you think about coding
        without writing a single line of code.
      </p>
      <Link className="next" to="/toying/level-one">
        Next: #2.1 💬 Basic "Or" Boolean Logic
      </Link>
    </div>
  )
}
