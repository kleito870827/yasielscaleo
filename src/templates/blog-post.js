import React from 'react';
import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import { graphql } from 'gatsby'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const url = props.data.site.siteMetadata.siteUrl
    const { title, description } = post.frontmatter;
    const thumbnail = post.frontmatter.bgImg.childImageSharp.resize.src
    return (
        <div>
            <Metatags
                title={title}
                description={description}
                thumbnail={url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div>
                <h1>{title}</h1>
                <Img fluid={post.frontmatter.bgImg.childImageSharp.fluid} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
    )
}


export default BlogPost


export const query = graphql`

 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
      }
    }
  site {
    siteMetadata {
        siteUrl
      }
   }
}
`

// bgImg {
//   childImageSharp {
//     resize(width: 1500, height: 1500) {
//       src
//     }
//     fluid(maxWidth: 786) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
