import LevelThreeGame from '../../components/BooleanGame/levels/LevelThree'
import BooleanDef from '../../components/Dictionary/en/BooleanDef'
import Expression from '../../components/Dictionary/en/Expression'
import Operator from '../../components/Dictionary/en/Operator'
import Software from '../../components/Dictionary/en/Software'
import Syntax from '../../components/Dictionary/en/Syntax'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function LevelThree() {
  return (
    <div className="level-3">
      <Helmet>
        <title>💻 Booleans for coding Apps</title>
        <meta name="description" content="A puzzle review of Boolean Logic" />
      </Helmet>
      <h2>#2.3 💻 Booleans for coding Apps</h2>
      <br />
      <p>
        How does <BooleanDef /> logic tie into coding? When a programmer is coding they write in a
        special language called a <Syntax />. Every coding language can have different{' '}
        <Syntax>syntaxes</Syntax>, but ultimately they are just different ways of representing our
        logic models using code.
        <br />
        <br />
        Rather than writing enormous combinations of ORs, NOTs, and other logical{' '}
        <Operator>operators</Operator>, <Software /> coders made convenient coding languages packed
        in with features that allow us to express what we are trying to do more easily. In fact,
        nearly every coding language has support for <BooleanDef /> logic built-in, which is an
        essential part of your toolkit as a coder.
        <br />
        <br />
        I've prepared one final challenge in case you'd like to test your skills at the matching
        game one more time before we proceed to talk about how to start coding.
      </p>
      <LevelThreeGame />
      <br />
      <p>
        You might have noticed that when given a NOT <Operator /> with multiple values, it is
        sometimes easier to think of it as simply a request for whatever is missing. This is an
        example of how we can build more complex rules from simplistic systems. Writing good{' '}
        <Software /> is about learning to create apps with powerful capabilities without making the
        code you write too complex or messy.
        <br />
        <br />
        Like speaking any language (human or machine), learning how to better express yourself (by
        practicing writing clean code with good design) allows you to say more while writing less.
        Spending more time to think about how your code should work will allow you to save tons of
        time dealing with frustrating bugs and other issues.
      </p>
      <p>
        Many coding languages have the capabilities to compare other kinds of data more advanced
        than <BooleanDef>booleans</BooleanDef>, which is very powerful. We can do things like use
        math <Expression>expressions</Expression>, compare text, and more. Watch this video to see
        this in practice, and to see the relationship between the <BooleanDef /> logic and coding
        mental models.
      </p>
      <YTVideo url="_j9nvYKaOVE" thumbnail="/images/cs-discoveries.jpg" />
      <Link className="next" to="/coding">
        Next: #3.0 🛣️ Stepping into Coding
      </Link>
    </div>
  )
}
