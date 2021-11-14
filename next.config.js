const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  // other next config
  pwa: {
    runtimeCaching,
    dest: 'public'
  },
  buildExcludes: [/middleware-manifest\.json$/, /_middleware.js$/, /_middleware.js.map$/]
})
