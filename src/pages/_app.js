import Header from '../components/header'
import styles from '../styles/_app.module.scss'
import '../styles/_normalize.scss'
import '../styles/_global.scss'
import { Fragment, useState } from 'react'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
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
