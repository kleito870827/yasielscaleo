import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

export default (props) => (
  <StaticQuery
    query={graphql`
    query{
      desktopImg: file(relativePath: { eq: "desktop-background.png" }) {
        childImageSharp {
          resize(width: 700, height: 700) {
            src
          }
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImg: file(relativePath: { eq: "mobile-background.png" }) {
        childImageSharp {
          resize(width: 400, height: 400) {
            src
          }
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => (
      <div className="workScreenImg">
        <a href="#">
          <div className="single-card-post-cont">
            <div className="descktop-cont">
              <Img fluid={data.desktopImg.childImageSharp.fluid} />
              <div className="descktop-img">
                <img className="img-fluid" src="http://yasielscaleo.com/wp-content/themes/yasielscaleo/assets/images/screenshots/snipcode-desktop.jpeg" alt="SnipCode Desktop"/>
              </div>
              <div className="mobile-img-phone">
                <Img fluid={data.mobileImg.childImageSharp.fluid} />
                <div className="mobile-img">
                  <img className="img-fluid" src="http://yasielscaleo.com/wp-content/themes/yasielscaleo/assets/images/screenshots/snipcode-mobile.jpeg" alt="SnipCode Mobile"/>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    )}
  />
)
