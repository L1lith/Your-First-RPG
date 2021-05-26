import Link from 'next/link'
import './index.scss'
import hoverVideo from '../../functions/hoverVideo'
import { NextSeo } from 'next-seo'

export default () => (
  <div className="vision-intro">
    <NextSeo title="#1.0 Planning it out" />
    <h1 className="title">Section 1: 👀 Visioning Mental Models</h1>
    <ol className="toc pages">
      <h2>Pages</h2>
      <li>
        <Link href="/vision#lesson">
          <a>#1.0 Planning it out: Saving Monitors</a>
        </Link>
      </li>
      <li>
        <Link href="/vision/logic-models-explained">
          <a>#1.1 Logic Models Explained</a>
        </Link>
      </li>
    </ol>
    <h2 id="lesson">#1.0 Planning it out: Saving Monitors</h2>
    <span className="intro-card">
      <video autoPlay muted {...hoverVideo()}>
        <source src="/static/video/punchingMonitor.mp4" type="video/mp4" />
      </video>
      Don't let this be you
    </span>
    <p>
      If you believe what you hear on the internet, you might be inclined to believe the modern
      programmer might be more easily replaced by a gang of monkeys randomly hammering away on
      type-writers, and sometimes you might be right. Many beginners meet their demise after hearing
      "just read the docs" (docs is short for documentation), and aren't given a proper chance to
      understand why coders do what they do.
      <br />
      <br />
      Documentation sites like{' '}
      <Link href="https://nodejs.org/docs/latest-v15.x/api/">
        <a>this one</a>
      </Link>{' '}
      can be a valuable glossary to experienced programmers, but as a learning tool it's the
      equivalent of throwing a thesaurus at your students' foreheads. This can often leave the
      reader confused & frustrated, as it fails to explain fundamental programming concepts and why
      we use them.
      <br />
      <br />
      Another barrier to learning is the lack of approachable hands-on work. In this section I will
      guide you through fundamental coding concepts (like problem solving, logic rules, and working
      with data).
    </p>
    <Link href="/vision/logic-models-explained">
      <a className="next">Up next: Logic Models Explained</a>
    </Link>
  </div>
)
