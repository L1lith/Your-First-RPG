const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const securityHeaders = require('./security-headers')
const { i18n } = require('./next-i18next.config')
//const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  en: 'en-US',
  fr: 'fr'
}

module.exports = withPWA({
  // other next config
  //rewrites: async () => nextI18NextRewrites(localeSubpaths),
  get headers() {
    return Object.entries(securityHeaders).map(([key, value]) => ({ key, value }))
  },
  i18n,
  pwa: {
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/]
  }
})

// const { getConfig } = require('next-multilingual/config')
// module.exports = getConfig('YourFirstRPG', ['en-US', 'fr-CA'], /**/ { poweredByHeader: false })
