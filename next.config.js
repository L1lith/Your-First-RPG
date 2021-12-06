const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const securityHeaders = require('./security-headers')

module.exports = withPWA({
  // other next config
  get headers() {
    return Object.entries(securityHeaders).map(([key, value]) => ({ key, value }))
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US'
  },
  pwa: {
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/]
  }
})

// const { getConfig } = require('next-multilingual/config')
// module.exports = getConfig('YourFirstRPG', ['en-US', 'fr-CA'], /**/ { poweredByHeader: false })
