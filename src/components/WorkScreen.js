import React from 'react'
import { Link } from 'gatsby'

// Components
import WorkScreenImg from './WorkScreenImg'
import WorkScreenText from './WorkScreenText'

export default (props) => (
  <div className="workScreen">
    <div className="container">
      {props.isHomePage && <h2 className="workScreen__title">Some Of My Work</h2>}
      {props.works.map((work, i) => {
        // console.log(work.node.frontmatter.desktopImg.childImageSharp.fluid);
        // console.log(work.node.frontmatter.skills);
        console.log(work);
        return (
          <div key={work.node.id} className={`workScreen__img-text ${i%2 !== 0 && 'flip'}`}>
            <WorkScreenImg
            desktopWorkImg={work.node.frontmatter.desktopImg.childImageSharp.fluid}
            phoneWorkImg={work.node.frontmatter.phoneImg.childImageSharp.fluid} />
            <WorkScreenText
            title={work.node.frontmatter.title}
            description={work.node.frontmatter.description}
            liveLink={work.node.frontmatter.liveLink}
            skills={work.node.frontmatter.skills} />
          </div>
        )
      })}
    </div>
    {props.isHomePage && (
      <div className="container">
        <div className="workScreen__workLink">
          <Link className="greenLink" to="/works">All My Works</Link>
        </div>
      </div>
    )}
  </div>
)

// <div className="workScreen__img-text flip">
//   <WorkScreenImg />
//   <WorkScreenText />
// </div>
// <div className="workScreen__img-text">
//   <WorkScreenImg />
//   <WorkScreenText />
// </div>
