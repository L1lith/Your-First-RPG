const withPWA = require('next-pwa')

module.exports = withPWA({
  // other next config
  pwa: {
    dest: 'public'
  },
  buildExcludes: [/middleware-manifest\.json$/, /_middleware.js$/, /_middleware.js.map$/]
})
