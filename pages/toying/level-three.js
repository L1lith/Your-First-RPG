import LevelThree from '../../components/BooleanGame/levels/LevelThree'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'
import Syntax from '../../components/Dictionary/Syntax'
import Operator from '../../components/Dictionary/Operator'
import BooleanDef from '../../components/Dictionary/BooleanDef'
import Expression from '../../components/Dictionary/Expression'

export default () => (
  <div className="level-3">
    <NextSeo title="💻 Booleans for Apps" />
    <h2>#2.3 💻 Booleans for coding Apps</h2>
    <br />
    <p>
      How does <BooleanDef /> logic tie into coding? When a programmer is coding they write in a
      special language called a <Syntax />. Every coding language can have different
      {' ' + ''}
      <Syntax>syntaxes</Syntax>, but ultimately they are just different ways of representing our
      logic models using code.
      <br />
      <br />
      Rather than writing enormous combinations of ORs, NOTs, and other logical{' '}
      <Operator>operators</Operator>, software engineers conveniently created coding languages
      packed in with features that allow us to say what we are trying to do more easily. In fact,
      nearly every coding language has support for <BooleanDef /> logic built-in, which is an
      essential part of your toolkit as a coder.
      <br />
      <br />
      I've prepared one final challenge in case you'd like to test your skills at the matching game
      one more time before we proceed to talk about coding.
    </p>
    <LevelThree />
    <br />
    <p>
      You might have noticed that when given a NOT <Operator /> with multiple values, it is
      sometimes easier to think of it as simply a request for whatever is missing. This is an
      example of how we can build more complex rules from simplistic systems. Writing good software
      is about learning to create apps with complex capabilities without making the code itself
      overly complex or messy.
      <br />
      <br />
      Like speaking any language (human or machine), learning how to better express yourself (by
      using clean code and good design practices) allows you to say more while writing less.
      Spending more time to think about your code from a design perspective will allow you to save
      countless hours dealing with mind-numbing bugs and other issues.
    </p>
    <p>
      Many coding languages have the capabilities to compare and transform other kinds of data more
      advanced than <BooleanDef>booleans</BooleanDef>, which is very powerful. We can do things like
      evaluate math <Expression>expressions</Expression>, compare text, and more. Watch this video
      to see this in practice, and to see the relationship between the <BooleanDef /> logic and
      coding mental models.
    </p>
    <YTVideo url="_j9nvYKaOVE" thumbnail="/images/cs-discoveries.jpg" />
    <Link href="/coding">
      <a className="next">Next: #3.0 🛣️ Stepping into Coding</a>
    </Link>
  </div>
)
