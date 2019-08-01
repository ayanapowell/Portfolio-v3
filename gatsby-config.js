let env = process.env.NODE_ENV || 'development'

// This adds dotenv (for storing environment variables) to gatsby
require('dotenv').config({ path: `./.env.${env}` })

module.exports = {
  siteMetadata: {
    title: 'Ayana Powell Portfolio',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      useResolveUrlLoader: {
        options: {
          sourceMap: true, //default is false
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: `${process.env.ACCESS_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
  ],
}
