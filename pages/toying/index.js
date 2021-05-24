import Link from "next/link";
import "./index.scss";
//import BooleanGame from "../../components/BooleanGame";

export default () => (
  <div className="toying-intro">
    <h1 className="title">Section 2: 👐 Toying with Mental Models</h1>
    <br />
    <br />
    <h2>#2.0 Playing around with Logic Puzzles</h2>
    <br />
    <span className="intro-card">
      <img src="/static/images/milleniumPuzzle.webp" />
      <br />
      *course not guaranteed to unlock the secrets of any card game universe*
    </span>
    <br />
    <br />
    <p>
      Now that you've got a grasp on how to visualize your logic model, you will
      apply those concepts to build your own logic model while playing a puzzle
      game. This hands-on problem solving lesson will put you in a coding
      mindset before reading or writing a single line of code.
    </p>
    <Link href="/toying/level-1">
      <a className="next">Up next: Level 1: Basic "Or" Boolean Logic</a>
    </Link>
  </div>
);
