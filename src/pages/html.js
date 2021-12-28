import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/_global.scss'
import { page } from '../styles/_app.module.scss'
import Header from '../../../components/header'

class Application extends React.Component {
  render() {
    return (
      <div className={'app ' + page}>
        <Header />
        <Helmet>
          <link rel="shortcut icon" href="/images/icons/site-icon.svg" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-src youtube.com www.youtube.com; worker-src 'self';"
          />
          <link rel="preload" href="/fonts/droidSerifRegular.ttf" as="font" type="font/ttf" />
          <meta name="application-name" content="Your First RPG" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/images/icons/site-icon.svg" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Your First RPG" />
          <meta name="description" content="Learn to code by making a text RPG game" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="none" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Your First RPG" />
          <meta property="og:description" content="Learn to code by making a text RPG game" />
          <meta property="og:site_name" content="Your First RPG" />
          <meta property="og:url" content="https://yourfirstrpg.com" />
          <meta property="og:image" content="https://yourfirstrpg.com/images/icons/site-icon.svg" />
        </Helmet>
      </div>
    )
  }
}

export default Application
