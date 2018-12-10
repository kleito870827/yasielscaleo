import React from 'react' 
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


import Header from './header'
import '../styles/index.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'My fav blog' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          {children}
        </>
    )}
  />
)



export default Layout
