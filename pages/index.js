import YTVideo from '../components/YTVideo'
import styles from '../styles/index.module.scss'
import RPG from '../components/Dictionary/RPG'
import {
  getActualLocales,
  getActualDefaultLocale,
  getActualLocale,
  getPreferredLocale,
  getCookieLocale,
  setCookieLocale
} from 'next-multilingual'
import { useMessages, getTitle } from 'next-multilingual/messages'
import { useRouter } from 'next/router'
import Link from 'next-multilingual/link'

export async function getServerSideProps(nextPageContext) {
  const { req, locale, locales, defaultLocale } = nextPageContext
  const actualLocales = getActualLocales(locales, defaultLocale)
  const actualDefaultLocale = getActualDefaultLocale(locales, defaultLocale)
  const cookieLocale = getCookieLocale(nextPageContext, actualLocales)
  let resolvedLocale = getActualLocale(locale, defaultLocale, locales)
  if (locale === defaultLocale) {
    resolvedLocale = cookieLocale
      ? cookieLocale
      : getPreferredLocale(
          req.headers['accept-language'],
          actualLocales,
          actualDefaultLocale
        ).toLowerCase()
  }

  return {
    props: {
      resolvedLocale
    }
  }
}

const Home = ({ resolvedLocale }) => {
  const router = useRouter()

  // Overwrite the locale with the resolved locale.
  router.locale = resolvedLocale
  setCookieLocale(router.locale)

  // Load the messages in the correct locale.
  const messages = useMessages()
  return (
    <div className={styles.home}>
      <h1 className="title">{messages.format('siteTitle')}</h1>
      <p>
        {messages.format('siteDescriptionPartOne')}
        <RPG /> {messages.format('siteDescriptionPartTwo')}
      </p>
      <h2>Sections</h2>
      <ol className="toc sections">
        <li>
          <Link href="/vision">
            <a>{messages.format('sectionOne')}</a>
          </Link>
        </li>
        <li>
          <Link href="/toying">
            <a>{messages.format('sectionTwo')}</a>
          </Link>
        </li>
        <li>
          <Link href="/coding">
            <a>{messages.format('sectionThree')}</a>
          </Link>
        </li>
        <li>
          <Link href="/rpg">
            <a>{messages.format('sectionFour')}</a>
          </Link>
        </li>
      </ol>
      <Link href="/resources">
        <a>{messages.format('resourceDescription')}</a>
      </Link>
      <div className={styles.extra}>
        <h2 className={styles.enticement}>{messages.format('enticement')}</h2>
        {messages.format('talkDescription')}
        <YTVideo url="-jRREn6ifEQ" thumbnail="/images/poetry-of-programming.jpg" />
      </div>
    </div>
  )
}

export default Home
