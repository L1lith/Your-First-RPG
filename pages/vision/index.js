import Link from 'next-multilingual/link'
import styles from '../../styles/vision/index.module.scss'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'
import Docs from '../../components/Dictionary/Docs'
import { useMessages } from 'next-multilingual/messages'

export default () => {
  const messages = useMessages()
  return (
    <div className={styles['vision-intro']}>
      <NextSeo description="Getting in the coding mindset" title="🗺️ Planning it out" />
      <h1 className="title">{messages.format('chapterOne')}</h1>
      <ol className="toc pages">
        <li>
          <Link href="/vision#lesson">
            <a>{messages.format('moduleOne')}</a>
          </Link>
        </li>
        <li>
          <Link href="/vision/logic-models-explained">
            <a>{messages.format('moduleTwo')}</a>
          </Link>
        </li>
      </ol>
      <h2 id="lesson">{messages.format('pageTitle')}</h2>
      <span className="intro-card">
        <YTVideo url="wiaamJZ-hHI" thumbnail="/images/how-to-avoid-burnout.jpg" />
        {messages.format('introText')}
      </span>
      <p>
        {messages.format('introPartOne')}
        <Docs />
        {messages.format('introPartTwo')}
        <br />
        <br />
        {messages.format('introPartThree')}
        <a target="_blank" href="https://nodejs.org/docs/latest-v15.x/api/">
          {messages.format('introLink')}
        </a>
        {messages.format('introPartFour')}
        <br />
        <br />
        Another key to learning is to practice. In this section I will guide you through basic
        coding concepts like problem solving, logic rules, and working with data. In the next
        chapter we will cement these concepts with hands-on activities.
      </p>
      <Link href="/vision/logic-models-explained">
        <a className="next">{messages.format('nextPageLink')}</a>
      </Link>
    </div>
  )
}
