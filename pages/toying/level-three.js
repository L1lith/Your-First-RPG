import LevelThree from '../../components/BooleanGame/levels/LevelThree'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'

export default () => (
  <div className="level-3">
    <NextSeo title="💻 Booleans for Apps" />
    <h2>#2.3 💻 Booleans for coding Apps</h2>
    <br />
    <p>
      How does boolean logic tie into coding? When a programmer is writing code they write in coding
      language. Every language has a syntax (a syntax is a language with a set of rules, kind of
      like any spoken language, and like boolean logic too!). Every programming language can have
      different syntax (or rules), but ultimately it is just a more advanced form of a logic model.
      <br />
      <br />
      Rather than writing enormous combinations of ORs, NOTs, and other logical operators, software
      engineers conveniently created programming languages packed in with features that allow us to
      better express what we are trying to do. In fact, nearly every programming language has
      support for boolean logic built-in, which is an essential part of your toolkit as a coder.
      <br />
      <br />
      I've prepared one final challenge in case you'd like to test your skills at the matching game
      one more time before we proceed to talk about coding.
    </p>
    <LevelThree />
    <br />
    <p>
      You might have noticed that when given a NOT with multiple values, it is sometimes easier to
      think of it as simply a request for whatever is missing. This is an example of how we can
      build more complex rules from simplistic systems. Writing good software is about learning to
      create apps with complex capabilities without making the code itself overly complex or messy.
      <br />
      <br />
      Like speaking any language (human or machine), learning how to better express yourself (i.e.
      clean code and effective design patterns) allows you to say more in fewer lines. Spending more
      time to think about your code from a design perspective will allow you to save countless hours
      dealing with mind-numbing bugs and other issues.
    </p>
    <p>
      Many programming languages have the capabilities to compare and transform more complex data
      types than booleans (true/false), which is very powerful. We can do things like evaluate math
      expressions, compare text, and more. Watch this video to see this in practice, and to see the
      relationship between the boolean logic and coding mental models.
    </p>
    <YTVideo url="_j9nvYKaOVE" />
    <Link href="/coding">
      <a className="next">Next: #3.0 🏆 Coding with Mental Models</a>
    </Link>
  </div>
)
