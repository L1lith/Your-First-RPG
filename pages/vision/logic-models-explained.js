import Link from 'next-translate-routes/link'
import hoverVideo from '../../functions/hoverVideo'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'
import EasterEgg from '../../components/EasterEgg'
import styles from '../../styles/vision/logic-models-explained.module.scss'
import Stack from '../../components/Dictionary/Stack'
import Output from '../../components/Dictionary/Output'
import BooleanDef from '../../components/Dictionary/BooleanDef'

export default () => (
  <div className="logic-models">
    <NextSeo description="Arranging Logic Models" title="🧠 Logic Models Explained" />
    <h2>#1.1 🧠 Logic Models Explained</h2>
    <br />
    <span className="intro-card">
      <video autoPlay {...hoverVideo()} muted>
        <source src="/video/redstoneContraption.webm" type="video/webm" />
      </video>
      Minecraft is a great place to start your adventure :)
    </span>
    <p>
      Next you will learn about <BooleanDef /> logic and how to visualize them. Visualizing logical
      systems is very useful. The entire world operates using logic; like how you do your job, how
      you cross the street, or how you navigate a website. We make a lot of decisions without
      realizing we made them.
    </p>
    {
      null /*<span className="intro-card">
      <img src="/images/spaghettiBowl.jpeg" alt="SLC Spaghetti Bowl" />
      Nothing gets the blood pumping quite like being tail-gated around a 90° turn on the freeway.
      <span className="smaller-text">
        {' '}
        Credit to <a target="_blank" href="https://www.utahseagull.com/2019/10/">Utah Seagull</a>
      </span>
    </span> */
    }
    <p>
      All logic models have 3 basic components
      <ol className={styles['logic-model-chart']}>
        <li>
          <span className="bold">Input Data: </span>An incoming source of data to your logic model
          which you can use to make decisions.
        </li>
        <li>
          <span className="bold">Rules:</span> This is the "logic" or "code" of your model. The
          rules are used to decide what the result (or output) of our model is based on the input.
        </li>
        <li>
          <span className="bold">Output Data: </span>What the result of your logic model is.
        </li>
      </ol>
      <br />
      <br />
      Imagine you are a civil engineer trying to optimize the flow of traffic through a very busy
      area. Our input data is the flow of cars into the freeway and their intended destinations. Our{' '}
      <Output /> is the flow of cars out of the freeway. As a civil engineer our logic model will
      not only make the difference when someone's trying to get to work quickly, but our decision
      will ultimately be the difference between life and death when reckless driving happens.
      <br />
      <br />
      While watching this video try to notice all the factors civil engineers must pay attention to
      when designing highways.
    </p>
    <YTVideo url="9XIjqdk69O4" thumbnail="/images/highway-geometry.jpg" />
    <p>
      "That's great... but how does this apply to coding?" I'm glad you asked! When we are coding we
      too are writing a logic system to handle the input flow of information (like mouse and
      keyboard input when navigating a webpage) and the <Output /> flow of information (like
      displaying a webpage or rendering a video-game). As a coder you write (or "code") the logical
      rules of the system (like when the user clicks this link, take them to that page). While say
      inventing a computer or a roadway from scratch might be incredibly complex, computer, civil,
      and all kinds of engineers all take advantage of the technology and methodology that has been
      been in development for much longer than we have been alive.
    </p>
    Here's a table describing the logic model we use when we are at a traffic light. Your brain
    provides the decision-making rules of the logic model.
    <table className={styles['traffic-stop']}>
      <thead>
        <th>Input</th>
        <th>Output</th>
      </thead>
      <tr>
        <td>Light is red</td>
        <td>Come to a smooth stop before the intersection.</td>
      </tr>
      <tr>
        <td>Light is yellow</td>
        <td>Pay attention to the intersection. If you can stop, stop quickly.</td>
      </tr>
      <tr>
        <td>Light is green</td>
        <td>Look ahead to ensure the traffic is clear, and continue on.</td>
      </tr>
    </table>
    <p>
      In coding we have a set of software and methodology that makes describing our logical system
      much easier. In the world of website development, we call this a <Stack />. Much like a civil
      engineer must consider the efficacy of a roadway system, when building a website we must
      consider many aspects of the system, like cyber safety (allowing unsafe input data has led to
      many stolen identities and credit cards), user experience, and visual appeal. By better
      understanding the logical rules behind our software we better understand where this issues
      arise, preventing catastrophic database leaks and user rage-quits before they ever happen.
      <br />
      <br />
    </p>
    <YTVideo url="hZdLjyK89Cw" thumbnail="/images/self-operating-napkin.jpg" />
    <span className="italic">it works perfectly 60% of the time!</span>
    <p>
      When designing software systems it's important to think it through from beginning to end. Most
      software bugs stem from coders thinking "it's not my job" or not putting that extra effort to
      consider edge cases because "it worked when I ran it". You must remember the 3 components of
      your logic model, so first consider your user <span className="bold">input</span>. When
      navigating a site the user gives many inputs, like clicking a link, scrolling the page,
      logging in, or submitting a form.
      <br />
      <br />
      Next you must think about every step in your code, and how these{' '}
      <span className="bold">rules</span> ultimately handles your users input and translates it into
      the program's <Output />. Don't cut corners or leave problems for someone else to deal with.
      Building the best software you can the first time (you'll definitely write some messy code
      starting out, but after you make your first draft of something try to come back and look for
      ways to improve it) will save you a lot of time later on. Understand the deep inner workings
      of your <Stack /> by{' '}
      <span className="underline">toying around with it and asking questions</span>
      !
      <br />
      <br />
      The <Output /> is what the users of your software experience (this is a{' '}
      <span className="underline">critical</span> aspect of your logic model), so when coding you
      must always think about what your users are trying to achieve, and not only all the possible
      issues and bugs they could run into, but also how to make your software straightforward and
      convenient. Like good road design, your software should effectively serve your users, instead
      of forcing your users to be focused on tediously tinkering with poorly designed software. Take
      responsibility as an engineer for avoidable crashes and other design issues that arise with
      your software.
    </p>
    <Link href="/toying">
      <a className="next">Next: #2.0 🧩 Playing around with Logic Puzzles</a>
    </Link>
    <br />
    <br />
    <EasterEgg>
      <p>Bonus: Liked the Rube Goldberg Machine?</p>
      <YTVideo url="Av07QiqmsoA" thumbnail="/images/lifes-lemons.jpg" />
    </EasterEgg>
  </div>
)
