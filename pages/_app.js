import Header from '../components/header'
import styles from '../styles/_app.module.scss'
import '../styles/_normalize.scss'
import '../styles/_global.scss'
import { DefaultSeo } from 'next-seo'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo titleTemplate="%s - YFRPG" defaultTitle="Your First RPG"></DefaultSeo>
      <Header />
      <main className={'page ' + styles.page}>
        <Component {...pageProps} />
      </main>
    </Fragment>
  )
}

export default MyApp
