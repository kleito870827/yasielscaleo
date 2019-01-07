import React from 'react'
import Img from 'gatsby-image'

export default (props) => {
  return(
    <div className="headerImageBg">
      <Img style={{
        position: 'absolute',
        zIndex: '-1',
        // display: 'none',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }} fluid={props.bgImage} />
      <div className="headerImageBg__text-cont">
        <h1>{props.title}</h1>
      </div>
      <svg className="diagonal work-left" width="20%" height="70" viewBox="0 0 100 102" preserveAspectRatio="none">
        <path d="M0 100 L100 100 L0 10 Z"></path>
      </svg>
      <svg className="diagonal work-right" width="80%" height="70" viewBox="0 0 100 102" preserveAspectRatio="none">
        <path d="M0 100 L100 100 L100 10 Z"></path>
      </svg>
    </div>
)}
