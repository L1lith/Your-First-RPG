import Docs from '../../components/Dictionary/en/Docs'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { visionIntro } from '../../styles/vision/index.module.scss'
import { Helmet } from 'react-helmet'

export default function CodingMindset() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Getting in the coding mindset" />
        <title>🗺️ Planning it out</title>
      </Helmet>
      <h1 className="title">Chapter 1</h1>
      <ol className="toc pages">
        <li>
          <Link to="/vision#lesson">#1.0 🗺️ Planning it out</Link>
        </li>
        <li>
          <Link to="/vision/what-is-data">#1.1 🔢 What is Data?</Link>
        </li>
        <li>
          <Link to="/vision/logic-models-explained">#1.2 🧠 Logic Models Explained</Link>
        </li>
      </ol>
      <h2 id="lesson">#1.0 🗺️ Planning it out</h2>
      <span className="introCard">
        <YTVideo url="wiaamJZ-hHI" thumbnail="/images/how-to-avoid-burnout.jpg" />
        Take coding at your own pace and take time for yourself
      </span>
      <p>
        Coders are great at writing code only they can understand. Many beginners can feel alienated
        after hearing "just read the <Docs />
        ", and aren't given a fair chance to understand why coders do what they do.
        <br />
        <br />
        Documentation sites like{' '}
        <a target="_blank" href="https://nodejs.org/docs/latest-v15.x/api/">
          this one
        </a>{' '}
        can be a valuable tool for coding experts, but for a beginner it's a giant pain. It's
        important to understand the ideas in simple terms so you can begin to visualize what you are
        trying to do.
        <br />
        <br />
        Another key to learning is to practice. In this section I will guide you through basic
        coding ideas like problem solving, logic rules, and working with data. We will cement these
        ideas with hands-on activities.
      </p>
      <Link className="next" to="/vision/what-is-data">
        Next: #1.1 🔢 What is Data?
      </Link>
    </>
  )
}
