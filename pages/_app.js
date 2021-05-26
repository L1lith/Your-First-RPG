import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/header'
import './_app.scss'
import HomeLink from '../components/homeLink'
import Head from 'next/head'
import { useRouter, withRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props
    const isHome = router.route === '/'

    return (
      <Container>
        <DefaultSeo titleTemplate="%s - Coding Intro" defaultTitle="Coding Intro"></DefaultSeo>
        <Header />
        <main id="page">
          {!isHome ? <HomeLink /> : null}
          <Component {...pageProps} />
        </main>
      </Container>
    )
  }
}

export default withRouter(MyApp)
