module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Your First RPG'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        //additionalData: `@import "${__dirname}\\src\\styles\\_global.scss";`
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
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
