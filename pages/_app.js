import Header from '../components/header'
import styles from '../styles/_app.module.scss'
import '../styles/_normalize.scss'
import '../styles/_global.scss'
import { Fragment, useState } from 'react'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <main className={'page ' + styles.page}>
        <Component {...pageProps} />
      </main>
    </Fragment>
  )
}

export default appWithTranslation(MyApp)
