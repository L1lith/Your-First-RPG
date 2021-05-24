import Link from "next/link";
import "./index.scss";

export default () => (
  <div className="home">
    <h1 className="title">
      <span className="smaller-text">Coding Intro:</span>
      <br />
      🧠 Mental Modeling for Beginners
    </h1>
    <p>
      In this course I will describe mental models to show how & why we apply
      them to coding and other tasks.
    </p>
    <br />
    <ol className="toc">
      <h2>Sections</h2>
      <li>
        <Link href="/vision">
          <a>👀 Visioning Mental Models</a>
        </Link>
      </li>
      <li>
        <Link href="/toying">
          <a>👐 Toying with Mental Models</a>
        </Link>
      </li>
      <li>
        <Link href="/coding">
          <a>🏆 Coding with Mental Models</a>
        </Link>
      </li>
    </ol>
    <br />
    <br />
    <div className="extras">
      <h2></h2>
      <Link href="/faq">
        <a>Frequently Asked Questions</a>
      </Link>
      <Link href="/supporter">
        <a>Support Me</a>
      </Link>
    </div>
  </div>
);
