module.exports = {
  siteMetadata: {
    title: 'Myblog - reactgo',
    siteUrl: 'https://reactgo.com',
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Works',
        link: '/works'
      },
      {
        name: 'About',
        link: '/about'
      }
    ]
  },
  pathPrefix: `/`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Varela Round', 'Nunito', 'Merriweather']
        }
      }
    },
  ],
}
