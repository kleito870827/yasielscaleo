import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Styles
import '../styles/index.scss'


// Components
import Header from './header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            menuLinks {
              name
              link
              external
            }
          }
        }
      }
    `}
    render={data => (
      <div className='layout-cont'>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
          ]}
        >
          <html lang="en" />
        </Helmet>
          {!children.props.location.pathname.includes('404') && <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />}           
          {children}
          {!children.props.location.pathname.includes('404') && <Footer />}
      </div>
    )}
  />
)



export default Layout
