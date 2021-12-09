import Link from 'next/link'
import YTVideo from '../components/YTVideo'
import styles from '../styles/index.module.scss'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home']))
      // Will be passed to the page component as props
    }
  }
}

export default () => {
  const { t } = useTranslation('home')
  return (
    <div className={styles.home}>
      <h1 className="title">
        <span className="smaller-text">{t('title-part-one')}</span>
        <br />
        {t('title-part-two')}
      </h1>
      <span className="intro-card">
        <YTVideo url="-jRREn6ifEQ" thumbnail="/images/poetry-of-programming.jpg" />
        {t('intro-text')}
      </span>
      <p>{t('description')}</p>
      <h2>Sections</h2>
      <ol className="toc sections">
        <li>
          <Link href="/vision">
            <a>{t('sections.vision')}</a>
          </Link>
        </li>
        <li>
          <Link href="/toying">
            <a>{t('sections.toying')}</a>
          </Link>
        </li>
        <li>
          <Link href="/coding">
            <a>{t('sections.coding')}</a>
          </Link>
        </li>
        <li>
          <Link href="/rpg">
            <a>{t('sections.rpg')}</a>
          </Link>
        </li>
      </ol>
      <div className="extras">
        {
          null /*<Link href="/faq">
      <a>Frequently Asked Questions</a>
</Link>*/
        }
        <Link href="/resources">
          <a>{t('stuck')}</a>
        </Link>
      </div>
    </div>
  )
}
