import { DefaultSeo } from 'next-seo'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <DefaultSeo titleTemplate="%s - YFRPG" defaultTitle="Your First RPG"></DefaultSeo>
        <DefaultSeo description="Learn to make games in JavaScript for beginners" />
        <Head>
          <link rel="shortcut icon" href="/images/site-icon.png" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-src youtube.com www.youtube.com;"
          />
          <meta name="application-name" content="Your First RPG" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/images/app-icon.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Your First RPG" />
          <meta name="description" content="Learn to code by making a text RPG game" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="none" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
