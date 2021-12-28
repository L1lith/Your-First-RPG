module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Your First RPG'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass'
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-use-query-params',
    'gatsby-transformer-sharp',
    `gatsby-plugin-provide-react`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    }
  ]
}
