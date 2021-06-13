import LevelOne from '../../components/BooleanGame/levels/LevelOne'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default () => (
  <div className="level-1">
    <NextSeo title={'#3.5 Summary & Further Reading'} />
    <h2>#3.5 Summary & Further Reading 🔭</h2>
    <br />
    <div className="intro-card">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLRqwX-V7Uu6ZYJC7L-r6rX6utt6wwJCyi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      Daniel Shiffman has so many good videos
    </div>
    <div className="stuck">
      <h2>Feeling Stuck?</h2>
      Check out the{' '}
      <Link href="/resources">
        <a>resources page here</a>
      </Link>{' '}
      to find some help
    </div>
    <br />
    <div className="further-reading">
      <h2>Further Reading</h2>
      Thank you so much for taking my course, I hope you learned something. If you'd like me to make
      more courses (like going into more advanced JavaScript areas like interactive websites and
      scripting) consider supporting me below for free :)
      <br />
      <br />
      So where do I go from here? If you'd like to code websites you can read more about that{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Learn">here</a>. JavaScript is a great entry
      point to a lot of different areas, like{' '}
      <a href="https://www.youtube.com/watch?v=7A-bnPlxj4k&list=PLRqwX-V7Uu6avBYxeBSwF48YhAnSn_sA4">
        discord bots
      </a>
      , <a href="https://medium.com/edureka/learn-node-js-b3a9c6fb632c">Node.js</a> scripts (Node.js
      is how you run JavaScript without a browser, kind of like python, and it has a lot of cool
      functionality), and more. I've also included a list of resources on the{' '}
      <Link href="/#resources">home page</Link>.
      <br />
      <br />
      If you'd like to suggest an improvement you can open a ticket{' '}
      <a href="https://github.com/L1lith/Intro-Coding-Concepts/issues/new?assignees=&labels=enhancement&template=improvement-idea.md">
        here
      </a>
      , or you can submit a pull request{' '}
      <a href="https://github.com/L1lith/Intro-Coding-Concepts/pulls">here</a>.
    </div>
    <Link href="/support">
      <a className="next">Consider supporting me 💜</a>
    </Link>
  </div>
)
