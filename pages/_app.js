import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/header'
import './_app.scss'
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

    return (
      <Container>
        <DefaultSeo titleTemplate="%s - YFRPG" defaultTitle="Your First RPG"></DefaultSeo>
        <Header />
        <main id="page">
          <Component {...pageProps} />
        </main>
      </Container>
    )
  }
}

export default withRouter(MyApp)
