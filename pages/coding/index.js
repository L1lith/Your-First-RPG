import Link from 'next/link'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'

export default () => (
  <div className="coding-intro">
    <h1 className="title">Chapter 3</h1>
    <NextSeo title="#3.0 Stepping into Coding" />
    <ol className="toc pages">
      <li>
        <Link href="/coding#lesson">
          <a>#3.0 Stepping into Coding 🛣️</a>
        </Link>
      </li>
      <li>
        <Link href="/coding/primitives">
          <a>#3.1 Primitives: Basic Data Types 📊</a>
        </Link>
      </li>
      <li>
        <Link href="/coding/essential-tools">
          <a>#3.2 Essential Tools 🔨</a>
        </Link>
      </li>
    </ol>
    <h2 id="lesson">#3.0 Stepping into Coding 🛣️</h2>
    <br />
    <span className="intro-card">
      <YTVideo url="MAlSjtxy5ak" />
      (this video is a joke)
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
      <a className="next">Next: #3.1 Basic Data Types 📊</a>
    </Link>
  </div>
)
