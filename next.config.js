const withSass = require('@zeit/next-sass')

console.log('Base Path:', process.env.NODE_ENV === 'development' ? '' : '/Intro-Coding-Concepts')

module.exports = withSass({
  basePath: process.env.NODE_ENV === 'development' ? '' : '/Intro-Coding-Concepts'
})
