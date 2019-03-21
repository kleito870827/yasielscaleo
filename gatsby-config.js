module.exports = {
  siteMetadata: {
    title: 'Yasiel Sanchez Caleo - Portfolio',
    description: 'Full-Stack developer, coding is my passion. I am always looking for new challenges. I love adapting and using new technologies.',
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
        name: 'Yasiel Sanchez Caleo',
        short_name: 'yasielscaleo',
        start_url: '/',
        background_color: '#006159',
        theme_color: '#006159',
        display: 'standalone',
        include_favicon: true,
        legacy: true,
        icon: 'src/images/favicons/icon-72x72.png', // This path is relative to the root of the site.
        // icons: [
        //   {
        //     src: 'src/images/favicons/icon-72x72.png',
        //     sizes: '72x72',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/images/icon-96x96.png',
        //     sizes: '96x96',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/images/icon-128x128.png',
        //     sizes: '128x128',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/images/icon-144x144.png',
        //     sizes: '144x144',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/images/icon-152x152.png',
        //     sizes: '152x152',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/images/icon-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/images/icon-384x384.png',
        //     sizes: '384x384',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/images/icon-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png',
        //   }
        // ],
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
