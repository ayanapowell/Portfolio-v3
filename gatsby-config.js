let env = process.env.NODE_ENV || 'development'

// This adds dotenv (for storing environment variables) to gatsby
require('dotenv').config({ path: `./.env.${env}` })

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Nanum Myeongjo',
            'Quattrocento',
            'Didact Gothic',
            'sans-serif',
            'serif',
          ],
        },
      },
    },
  ],
}
