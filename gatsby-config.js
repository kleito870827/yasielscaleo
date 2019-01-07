module.exports = {
  siteMetadata: {
    title: 'Yasielscaleo - Portfolio',
    siteUrl: 'https://yasielscaleo.com',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
        external: true
      },
      {
        name: 'About',
        link: '/#about',
        external: false
      },
      {
        name: 'Works',
        link: '/works',
        external: true
      },
      {
        name: 'Contact',
        link: '/#contact',
        external: false
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`)
      }
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
