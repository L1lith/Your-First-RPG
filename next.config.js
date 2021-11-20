const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  // other next config
  pwa: {
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/]
  }
})
