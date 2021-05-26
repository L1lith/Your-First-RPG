import Link from 'next/link'
import hoverVideo from '../../functions/hoverVideo'
import { NextSeo } from 'next-seo'

export default () => (
  <div className="logic-models">
    <NextSeo title="#1.1 Logic Models Explained" />
    <h2>#1.1 Logic Models Explained</h2>
    <br />
    <span className="intro-card">
      <video autoPlay {...hoverVideo()} muted>
        <source src="/Intro-Coding-Concepts/video/redstoneContraption.webm" type="video/webm" />
      </video>
      Minecraft is a great place to start your adventure :)
    </span>
    <p>
      In this section I will start to explain boolean (boolean means something that is either true
      or false) logic and explain how to create a mental model when working with it. Modeling
      logical systems is a lot more useful than you might give it credit. The entire world is ruled
      by logic, like how you do your job, how you cross the street, or how you navigate a website.
      <br />
      <br />
      Let's say for example you are at a crosswalk and you see the traffic light in the direction
      you are heading just turned red. It is now a fairly safe assumption that the street you are
      trying to cross is about to be filled with cars, and it would be a very bad idea to try to
      cross now. However, once that light turns green again you can assume that it's probably safe
      to cross (please abide by all proper safety rules, and use the crosswalk signs). The entire
      traffic system is designed to make the rules as efficient and safe as possible, and it is done
      by breaking down the logical components of the system.
    </p>
    <span className="intro-card">
      <img src="/Intro-Coding-Concepts/images/spaghettiBowl.jpeg" />
      <br />
      Nothing gets the blood pumping quite like being tail-gated around a 90° turn on the freeway.
      <br />
      <span className="smaller-text">
        {' '}
        Credit to <a href="https://www.utahseagull.com/2019/10/">Utah Seagull</a>
      </span>
    </span>
    <p>
      All logic models have 3 basic components
      <ol>
        <li>
          <span className="bold">Input Data:</span>An incoming source of data to your logic model
          which you can use to make decisions.
        </li>
        <li>
          <span className="bold">Rules:</span> this is the the "logic" or "code" of your model. The
          rules decide what the result (or output) of our model is based on the input.
        </li>
        <li>
          <span className="bold">Output Data: </span>What the result of your logic model is.
        </li>
      </ol>
      <br />
      <br />
      Imagine you are a civil engineer trying to optimize the flow of traffic through a very busy
      area. Our input data is the flow of cars into the freeway and their intended destinations. Our
      output data is the flow of cars out of the freeway. As a civil engineer our logic model will
      not only make the difference when someone's trying to get to work quickly, but our decision
      will ultimately be the difference between life and death when reckless driving happens (please
      be a considerate driver).
      <br />
      <br />
      While watching this video try to notice all the factors civil engineers must pay attention to
      when designing highways.
    </p>
    <div className="youtube-container">
      <iframe
        src="https://www.youtube.com/embed/9XIjqdk69O4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <p>
      "That's great... but how does this apply to coding?" I'm glad you asked! When we are coding we
      too are writing a logic system to handle the input flow of information (like mouse and
      keyboard input when navigating a webpage) and the output flow of information (like displaying
      a webpage or rendering a video-game). As a coder you write (or "code") the logical rules of
      the system (like when the user clicks this link, take them to that page). While say inventing
      a computer or a roadway from scratch might be incredibly complex, computer, civil, and all
      kinds of engineers all take advantage of the technology and methodology that has been been in
      development for much longer than we have been alive.
      <br />
      <br />
      In coding we have a set of software and methodology that makes describing our logical system
      much easier. In the world of website development, we call this a{' '}
      <span className="bold">stack</span>. Much like a civil engineer must consider the efficacy of
      a roadway system, when building a website we must consider many aspects of the system, like
      cyber safety (allowing unsafe input data has led to many stolen identities and credit cards),
      user experience, and visual appeal. By better understanding the logical rules behind our
      software we better understand where this issues arise, preventing catastrophic database leaks
      and user rage-quits before they ever happen.
      <br />
      <br />
    </p>
    <div className="youtube-container">
      <iframe
        src="https://www.youtube.com/embed/hZdLjyK89Cw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <br />
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
      the program's <span className="bold">output</span>. Don't cut corners or leave problems for
      someone else to deal with. Building the best software you can the first time (you'll
      definitely write some messy code starting out, but after you make your first draft of
      something try to come back and look for ways to improve it) will save you a lot of time later
      on. Understand the deep inner workings of your software (or "stack") by{' '}
      <span className="underline">toying around with it and asking questions</span>
      !
      <br />
      <br />
      The output is what the users of your software experience (this is a{' '}
      <span className="underline">critical</span> aspect of your logic model), so when coding you
      must always think about what your users are trying to achieve, and not only all the possible
      issues and bugs they could run into, but also how to make your software straightforward and
      convenient. Like good road design, your software should effectively serve your users, instead
      of forcing your users to be focused on tediously tinkering with poorly designed software. Take
      responsibility as an engineer for avoidable crashes and other design issues that arise with
      your software.
    </p>
    <Link href="/toying">
      <a className="next">Up next: Section 2: 👐 Toying with Mental Models</a>
    </Link>
    <br />
    <br />
    <p>Bonus: Liked the Rube Goldberg Machine?</p>
    <div className="youtube-container">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/Av07QiqmsoA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
)
