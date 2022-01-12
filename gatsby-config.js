module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourfirstrpg.com',
    title: 'Your First RPG'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-use-query-params',
    'gatsby-transformer-sharp',
    `gatsby-plugin-provide-react`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/AppLayout.js`)
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/', `/*`]
      }
    }
  ]
}
