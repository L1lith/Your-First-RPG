import LevelOneGame from '../../components/BooleanGame/levels/LevelOne'
import BooleanDef from '../../components/Dictionary/en/BooleanDef'
import Expression from '../../components/Dictionary/en/Expression'
import Operator from '../../components/Dictionary/en/Operator'
import Link from '../../components/TranslatedLink'
import BooleanOps from '../../components/booleanOps'
import { Helmet } from 'react-helmet'

export default function LevelOne() {
  return (
    <div className="level-1">
      <Helmet>
        <title>💬 Expresiones básicas "Or"</title>
        <meta name="description" content="Learn about Or expressions with a simple game!" />
      </Helmet>
      <h2>#2.1 💬 Expresiones básicas "Or"</h2>
      <br />
      <span className="introCard">
        <BooleanOps />
        Here you can see a chart of the basic boolean <Operator>operations</Operator> (&amp; means
        AND, || means OR)
      </span>
      <p>
        In this section we will be playing the Matching Rules game in order to learn about{' '}
        <BooleanDef /> logic. <BooleanDef>Boolean</BooleanDef> logic is the fundamental language
        that both electronic circuitry, and computers themselves are made out of, and it happens to
        be a great tool for learning how we talk to computers.
        <br />
        <br />
        <BooleanDef>Boolean</BooleanDef> logic contains a set of{' '}
        <Expression>expressions</Expression> (kind of like coding language) that allow us to perform
        basic <Operator>operations</Operator> on data. True or false statements (boolean values like
        yes or no) are the main type of <Expression>expressions</Expression> handled with{' '}
        <BooleanDef /> logic. This means we can ask the computer yes or no questions using code to
        tell it what to do.
      </p>
      <br />
      <h2>The "Or" Operator</h2>
      <p>
        Or is a logical <Operator /> that will only output true if at least one of it's inputs are
        true. In the first level of the Matching Game we will experiment with the Or <Operator />.
        Choose only the tiles whose colors and shapes are allowed to win.
      </p>
      <LevelOneGame />
      <p>
        Once you've played the first level of the Matching Game a few times and are confident you
        understand OR continue on to the next section to learn about NOT{' '}
        <Expression>expressions</Expression> 😊
      </p>
      <Link className="next" to="/toying/level-two">
        Next: #2.2 🚫 Whats "Not" Allowed
      </Link>
    </div>
  )
}
