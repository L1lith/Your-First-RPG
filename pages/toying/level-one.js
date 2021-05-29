import LevelOne from '../../components/BooleanGame/levels/LevelOne'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default () => (
  <div className="level-1">
    <NextSeo title={'#2.1 "Or" Boolean Logic'} />
    <h2>#2.1 Level 1: Basic "Or" Expressions 💬</h2>
    <br />
    <span className="intro-card">
      <img src="/images/truthTable.png" type="img/png" />
      Here you can see a chart of the basic boolean operations (it's grouped by rows)
    </span>
    <br />
    <p>
      In this section we will be playing the Matching Rules game in order to learn about boolean
      logic. Boolean logic is the fundamental language that both electronic circuitry, and computers
      themselves are made out of, and it happens to be a great tool for introducing the reasoning
      behind the way we communicate with computers.
      <br />
      <br />
      Boolean logic contains a set of expressions (kind of like coding language) that allow us to
      perform basic operations on information. True or false statements (boolean values) are the
      main type of data handled with boolean logic. We can represent all kinds of other information
      by combining many true or false statements together, however that is out of the scope of this
      section.
    </p>
    <br />
    <h2>The "Or" Operator</h2>
    <p>
      Or is a logical operator that means that any of values we input to it may be true. The Or
      expression will only output false when none of it's inputs are true. In the first level of the
      Matching Game we will experiment with the Or operator. Choose each of the tiles whose colors
      and shapes are allowed to win.
    </p>
    <LevelOne />
    <p>
      Once you've played the first level of the Matching Game a few times and are confident you
      understand OR continue on to the next section to learn about NOT expressions 😊
    </p>
    <Link href="/toying/level-two">
      <a className="next">Up next: Level 2: "Not" Expressions</a>
    </Link>
  </div>
)
