import Header from '../components/header'
import styles from '../styles/_app.module.scss'
import '../styles/_normalize.scss'
import '../styles/_global.scss'
import { DefaultSeo } from 'next-seo'
import { Fragment } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo titleTemplate="%s - YFRPG" defaultTitle="Your First RPG"></DefaultSeo>
      <DefaultSeo description="Learn to make games in JavaScript for beginners" />
      <Head>
        <link rel="shortcut icon" href="/images/site-icon.png" />
      </Head>
      <Header />
      <main className={'page ' + styles.page}>
        <Component {...pageProps} />
      </main>
    </Fragment>
  )
}

export default MyApp
