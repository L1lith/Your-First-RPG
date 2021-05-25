import Link from 'next/link'

export default () => (
  <div className="coding-intro">
    <h1 className="title">Section 3: 🏆 Coding with Mental Models</h1>
    <ol className="toc pages">
      <h2>Pages</h2>
      <li>
        <Link href="/coding#lesson">
          <a>#3.0 Stepping into Coding</a>
        </Link>
      </li>
      <li>
        <Link href="/coding/primitives">
          <a>#3.1 Coding with Primitives</a>
        </Link>
      </li>
      <li>
        <Link href="/coding/building-blocks">
          <a>#3.2 Coding Building Blocks</a>
        </Link>
      </li>
      <li>
        <Link href="/coding/text-rpg">
          <a>#3.3 Your first RPG ⚔️</a>
        </Link>
      </li>
    </ol>
    <h2 id="lesson">#3.0 Stepping into Coding</h2>
    <br />
    <span className="intro-card">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/r7dZKOL5rcg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <br />
      don't ask about my math skills
    </span>

    <p>
      How is JS (JavaScript) code written? JavaScript code is just a series of logical expressions
      (like little logic models) that are evaluated (run by the JavaScript engine software called
      the "interpreter") in a particular order. Each line is evaluated one at a time from top to
      bottom. While individual lines are generally read left-to-right The JS interpreter also
      understands and applies the rules of{' '}
      <a href="https://www.mathsisfun.com/operation-order-pemdas.html">PEMDAS</a>. Every line of
      code you write should combine cohesively in order to form a well functioning program.
      <br />
      <br />
      Coding doesn't have to be frustrating, let's try to have some fun with it. In this section I
      hope it will become clear how you can take an approached based on logic models to write basic
      code. I'm going to be providing many examples, and if you get stuck it's okay to continue on
      and come back later. Try to get a feel for what is going on overall by toying with the code.
    </p>
    <Link href="/coding/primitives">
      <a className="next">Up next: Coding with Primitives</a>
    </Link>
  </div>
)
