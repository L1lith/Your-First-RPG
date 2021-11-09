import Link from 'next/link'
import styles from '../../styles/vision/index.module.scss'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'

export default () => (
  <div className={styles['vision-intro']}>
    <NextSeo description="Getting in the coding mindset" title="🗺️ Planning it out" />
    <h1 className="title">Chapter 1</h1>
    <ol className="toc pages">
      <li>
        <Link href="/vision#lesson">
          <a>#1.0 🗺️ Planning it out</a>
        </Link>
      </li>
      <li>
        <Link href="/vision/logic-models-explained">
          <a>#1.1 🧠 Logic Models Explained</a>
        </Link>
      </li>
    </ol>
    <h2 id="lesson">#1.0 🗺️ Planning it out</h2>
    <span className="intro-card">
      <YTVideo url="wiaamJZ-hHI" />
      Take coding at your own pace and take time for yourself
    </span>
    <p>
      Programmers are great at writing code only they can understand. Many beginners can feel
      alienated after hearing "just read the docs" (docs is short for documentation), and aren't
      given a proper chance to understand why coders do what they do.
      <br />
      <br />
      Documentation sites like{' '}
      <Link href="https://nodejs.org/docs/latest-v15.x/api/">
        <a>this one</a>
      </Link>{' '}
      can be a valuable tool for experienced programmers, but for a beginner it's a total headache.
      It's important to understand the concepts in simple terms so you can begin to visualize what
      you are trying to do.
      <br />
      <br />
      Another key to learning is to practice. In this section I will guide you through basic coding
      concepts like problem solving, logic rules, and working with data. In the next chapter we will
      cement these concepts with hands-on activities.
    </p>
    <Link href="/vision/logic-models-explained">
      <a className="next">Next: #1.1 Logic Models Explained</a>
    </Link>
  </div>
)
