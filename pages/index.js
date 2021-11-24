import Link from 'next/link'
import YTVideo from '../components/YTVideo'
import styles from '../styles/index.module.scss'
import { NextSeo } from 'next-seo'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'

export default () => {
  const { t } = useTranslation()
  return (
    <div className={styles.home}>
      <h1 className="title">
        <span className="smaller-text">{t('pages.home.title-part-one')}</span>
        <br />
        {t('pages.home.title-part-two')}
      </h1>
      <span className="intro-card">
        <YTVideo url="-jRREn6ifEQ" thumbnail="/images/poetry-of-programming.jpg" />
        {t('pages.home.intro-text')}
      </span>
      <p>{t('pages.home.description')}</p>
      <h2>Sections</h2>
      <ol className="toc sections">
        <li>
          <Link href="/vision">
            <a>{t('pages.home.sections.vision')}</a>
          </Link>
        </li>
        <li>
          <Link href="/toying">
            <a>{t('pages.home.sections.toying')}</a>
          </Link>
        </li>
        <li>
          <Link href="/coding">
            <a>{t('pages.home.sections.coding')}</a>
          </Link>
        </li>
        <li>
          <Link href="/rpg">
            <a>{t('pages.home.sections.rpg')}</a>
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
          <a>{t('pages.home.stuck')}</a>
        </Link>
      </div>
    </div>
  )
}
