import React from 'react'
import Img from "gatsby-image"
// import { FaFacebookF } from 'react-icons/fa';

// Components
import Layout from '../components/layout'
import HomeHeader from '../components/HomeHeader'
import TimeLine from '../components/TimeLine'
import WorkScreen from '../components/WorkScreen'




const IndexPage = ({ data }, props) => {
  // console.log(data.timeLine.edges[0].node.childImageSharp.fluid);
  return (
    <Layout>
      <HomeHeader bgImage={data.homeBGImg.childImageSharp.fluid} />
      <div className="indexPage">
        <div className="indexPage__bottom-header">
          <div className="container">
            <h2 className="indexPage__about__title">About Me</h2>
            <div className="indexPage__about">
            <Img className="indexPage__about__avatar" fluid={data.avatarImg.childImageSharp.fluid} />
            <p className="indexPage__about__description">I am a Full-Stack developer, coding is my passion. I am always looking for new challenges. I love adapting and using new technologies. I feel comfortable working as a team or alone. When I'm not programming, you can find me studying the latest programming technologies or doing extreme sports.</p>
            </div>
          </div>
          <svg className="diagonal home-left" width="21%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 100 L100 100 L0 10 Z"></path>
          </svg>
          <svg className="diagonal home-right" width="80%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 100 L100 100 L100 10 Z"></path>
          </svg>
        </div>
        <TimeLine image={data.timeLine.edges} />
          <WorkScreen />
      </div>
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query {
    avatarImg: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        resize(width: 400, height: 400) {
          src
        }
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeBGImg: file(relativePath: { eq: "home-hero-image.jpeg" }) {
      childImageSharp {
        resize(width: 1920, height: 1920) {
          src
        }
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    timeLine: allFile(filter: { absolutePath: { regex: "/timeLine/" } }) {
      edges {
        node {
          absolutePath
          childImageSharp {
            resize(width: 200, height: 200) {
              src
            }
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
