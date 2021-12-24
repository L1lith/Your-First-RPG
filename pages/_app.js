import Header from '../components/header'
import styles from '../styles/_app.module.scss'
import '../styles/_normalize.scss'
import '../styles/_global.scss'
import { Fragment, useState } from 'react'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { getActualDefaultLocale, setCookieLocale } from 'next-multilingual'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locales, defaultLocale, locale } = router
  if (locale === defaultLocale) {
    router.locale = getActualDefaultLocale(locales, defaultLocale)
  }
  setCookieLocale(router.locale)
  return (
    <Fragment>
      <DefaultSeo titleTemplate="%s - YFRPG" defaultTitle="Your First RPG"></DefaultSeo>
      <DefaultSeo description="Learn to make games in JavaScript for beginners" />
      <Header />
      <main className={'page ' + styles.page}>
        <Component {...pageProps} />
      </main>
    </Fragment>
  )
}

export default MyApp
