import React from 'react'
import { graphql } from 'gatsby'

// Components
import HeaderImageBg from '../components/HeaderImageBg'
import WorkScreen from '../components/WorkScreen'
import Metatags from '../components/Metatags';


const Works = (props) => {
  // console.log(props.location.pathname);
  // console.log(props);
  // console.log(props);
  const title =  props.location.pathname.replace(/[/]+/g, "");
  const mainImage = props.data.workBGImg.childImageSharp.fluid;
  const postList = props.data.allMarkdownRemark;
  return (
    <div>
      <Metatags
          title="Works - Yasiel Sanchez Caleo"
          description="Full-Stack developer, coding is my passion. I am always looking for new challenges. I love adapting and using new technologies."
          thumbnail={props.data.workBGImg.childImageSharp.resize.src}
          url={props.data.workBGImg.childImageSharp.resize.src}
          pathname="http://yasielscaleo.com/"
      />
      <HeaderImageBg bgImage={mainImage} title={title} />
      <WorkScreen isHomePage={false} works={postList.edges} />
    </div>
  )
}

export default Works;

export const listQuery = graphql`
  query ListQuery {
    workBGImg: file(relativePath: { eq: "works.jpg" }) {
      childImageSharp {
        resize(width: 1920, height: 400) {
          src
        }
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { publishing: { eq: true } } }
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
  }
`
