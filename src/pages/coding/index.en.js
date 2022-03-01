import AhaMoment from '../../components/Dictionary/en/AhaMoment'
import Expression from '../../components/Dictionary/en/Expression'
import Interpreter from '../../components/Dictionary/en/Interpreter'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function CodingIntro() {
  return (
    <div className="coding-intro">
      <h1 className="title">Chapter 3</h1>
      <Helmet>
        <title>🛣️ Stepping into Coding</title>
        <meta name="description" content="An introduction to coding in JavaScript" />
      </Helmet>
      <ol className="toc pages">
        <li>
          <Link to="/coding#lesson">#3.0 🛣️ Stepping into Coding</Link>
        </li>
        <li>
          <Link to="/coding/primitives">#3.1 📊 Basic Data Types</Link>
        </li>
        <li>
          <Link to="/coding/essential-tools">#3.2 🔨 Essential Tools</Link>
        </li>
      </ol>
      <h2 id="lesson">#3.0 🛣️ Stepping into Coding</h2>
      <br />
      <span className="introCard">
        <YTVideo url="MAlSjtxy5ak" thumbnail="/images/coding-tutorial-meme.jpg" />
        (this video is a joke)
      </span>

      <p>
        How is JS (JavaScript) code written? JavaScript code is just a series of{' '}
        <Expression>code expressions</Expression> (like putting together a bunch of little logic
        models like legos) that are run by the <Interpreter>JavaScript Interpreter</Interpreter> in
        a particular order. Each line of code is evaluated one at a time from top to bottom and
        left-to-right like English. The <Interpreter /> also understands and applies the rules of{' '}
        <a target="_blank" href="https://www.mathsisfun.com/operation-order-pemdas.html">
          PEMDAS
        </a>
        . Your goal should be to write code that is easy to understand, this will help you make
        awesome programs.
        <br />
        <br />
        In this section you will learn how to use logic to write your first code, hurray! Take it at
        your own pace so you don't get overwhelmed, and I promise coding can be fun! I'm going to be
        providing many examples, and if you get confused it's okay to continue on and come back
        later. Playing around with code is one of the best ways to have a wonderful{' '}
        <AhaMoment>"aha moment"</AhaMoment>.
      </p>
      <Link className="next" to="/coding/primitives">
        Next: #3.1 📊 Basic Data Types
      </Link>
    </div>
  )
}
