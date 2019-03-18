import React from 'react'
// import Img from "gatsby-image"
import { graphql } from 'gatsby'
// import { FaFacebookF } from 'react-icons/fa';

// Components
import HomeHeader from '../components/HomeHeader'
import TimeLine from '../components/TimeLine'
import WorkScreen from '../components/WorkScreen'
import CardAnimate from '../components/CardAnimate'
import Skills from '../components/Skills'
import Metatags from '../components/Metatags';


const IndexPage = (props) => {
  const {data} = props;
  // console.log(props.location.state);
  // console.log(props);
  // console.log(data.showWorkHome.edges);
  return (
    <div>
      <Metatags
          title="Home - Yasiel Sanchez Caleo"
          description="Full-Stack developer, coding is my passion. I am always looking for new challenges. I love adapting and using new technologies."
          thumbnail={data.avatarImg.childImageSharp.resize.src}
          url={data.avatarImg.childImageSharp.resize.src}
          pathname="http://yasielscaleo.com/"
      />
      <HomeHeader bgImage={data.homeBGImg.childImageSharp.fluid} />
      <div className="indexPage">
        <div className="indexPage__bottom-header">
          <div className="container">
            <h2 id="about" className="indexPage__about__title">About Me</h2>
            <div className="indexPage__about">
              <CardAnimate className="indexPage__about__card" avatar={data.avatarImg.childImageSharp.fluid} bgAvatar={data.bgAvatarImg.childImageSharp.fluid} />
              <TimeLine className="indexPage__about__timeLine" />
            </div>
            <Skills />
          </div>
          <svg className="diagonal home-left" width="20%" height="70" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 100 L100 100 L0 10 Z"></path>
          </svg>
          <svg className="diagonal home-right" width="80%" height="70" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 100 L100 100 L100 10 Z"></path>
          </svg>
        </div>
          <WorkScreen isHomePage={true} works={data.showWorkHome.edges} />
      </div>
    </div>
  )
}

export default IndexPage;

export const query = graphql`
  query {
    avatarImg: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        resize(width: 200, height: 200) {
          src
        }
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgAvatarImg: file(relativePath: { eq: "bg-avatar.jpg" }) {
      childImageSharp {
        resize(width: 800, height: 600) {
          src
        }
        fluid(maxWidth: 800) {
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
    showWorkHome: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { showHome: { eq: true } } }
    ) {
      edges {
        node {
          id
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            description
            skills
            liveLink
            desktopImg {
              childImageSharp {
                resize(width: 800, height: 500) {
                  src
                }
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            phoneImg {
              childImageSharp {
                resize(width: 500, height: 1000) {
                  src
                }
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
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
