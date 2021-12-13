import LevelOne from '../../components/BooleanGame/levels/LevelOne'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import BooleanOps from '../../components/booleanOps'
import Operator from '../../components/Dictionary/Operator'

export default () => (
  <div className="level-1">
    <NextSeo title={'💬 "Or" Expressions'} />
    <h2>#2.1 💬 Basic "Or" Expressions</h2>
    <br />
    <span className="intro-card">
      <BooleanOps />
      Here you can see a chart of the basic boolean <Operator>operations</Operator> (&amp; means
      AND, || means OR)
    </span>
    <p>
      In this section we will be playing the Matching Rules game in order to learn about boolean
      logic. Boolean logic is the fundamental language that both electronic circuitry, and computers
      themselves are made out of, and it happens to be a great tool for learning how we talk to
      computers.
      <br />
      <br />
      Boolean logic contains a set of expressions (kind of like coding language) that allow us to
      perform basic <Operator>operations</Operator> on data. True or false statements (boolean
      values like yes or no) are the main type of data handled with boolean logic. We can ask the
      computer yes or no questions using code to tell it what to do.
    </p>
    <br />
    <h2>The "Or" Operator</h2>
    <p>
      Or is a logical <Operator /> that will only output true if at least one of it's inputs are
      true. In the first level of the Matching Game we will experiment with the Or operator. Choose
      each of the tiles whose colors and shapes are allowed to win.
    </p>
    <LevelOne />
    <p>
      Once you've played the first level of the Matching Game a few times and are confident you
      understand OR continue on to the next section to learn about NOT expressions 😊
    </p>
    <Link href="/toying/level-two">
      <a className="next">Next: #2.2 🚫 Whats "Not" Allowed</a>
    </Link>
  </div>
)
