import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const WorkScreenImg = ({ data, desktopWorkImg, phoneWorkImg }) => {
  // console.log(desktopWorkImg);
  return (
  <div className="workScreenImg">
    <div className="single-card-post-cont">
      <div className="descktop-cont">
        <Img fluid={data.desktopImg.childImageSharp.fluid} />
        <div className="descktop-img">
          <Img fluid={desktopWorkImg} />
        </div>
        <div className="mobile-img-phone">
          <Img fluid={data.mobileImg.childImageSharp.fluid} />
          <div className="mobile-img">
            <Img fluid={phoneWorkImg} />
          </div>
        </div>
      </div>
    </div>  
  </div>
)}

export default props => (
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
    render={data => <WorkScreenImg data={data} {...props} />}
  />
)
