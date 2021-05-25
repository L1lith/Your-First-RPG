const withSass = require('@zeit/next-sass')

module.exports = withSass({
  basePath: process.env.NODE_ENV === 'development' ? '' : '/Intro-Coding-Concepts'
})
