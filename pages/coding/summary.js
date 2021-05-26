import LevelOne from '../../components/BooleanGame/levels/LevelOne'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default () => (
  <div className="level-1">
    <NextSeo title={'#3.5 Summary & Further Reading'} />
    <h2>#3.5 Summary & Further Reading</h2>
    <br />
    <div className="intro-card">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/_nuS86ITjIM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      Your imagination is your limit
    </div>
    <br />
    <p>
      Thank you so much for taking my course, I hope you learned something. If you'd like me to make
      more courses (like going into more advanced JavaScript areas like interactive websites and
      scripting) consider supporting me below for free :)
      <br />
      <br />
      So where do I go from here? If you'd like to code websites you can read more about that{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Learn">here</a>. JavaScript is a great entry
      point to a lot of different areas, like{' '}
      <a href="https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b">
        discord bots
      </a>
      , <a href="https://medium.com/edureka/learn-node-js-b3a9c6fb632c">Node.js</a> scripts (Node.js
      is how you run JavaScript without a browser, kind of like python, and it has a lot of cool
      functionality), and more. I've also included a list of resources on the{' '}
      <Link href="/">home page</Link>.
      <br />
      <br />
      If you'd like to suggest an improvement you can open a ticket{' '}
      <a href="https://github.com/L1lith/Intro-Coding-Concepts/issues">here</a>, or you can submit a
      pull request <a href="https://github.com/L1lith/Intro-Coding-Concepts/pulls">here</a>.
    </p>
    <Link href="/support">
      <a className="next">Consider supporting me 💜</a>
    </Link>
  </div>
)
