import React from 'react';
import Img from "gatsby-image"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default (props) => (
  <div className="timeLine container">
    <h2 className="timeLine__section-title">My History</h2>
    <VerticalTimeline animate={ false }>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2015-2016"
      iconStyle={{
        background: '#fff',
        width: '150px',
        height: '150px',
        marginLeft: '-75px'
      }}
      icon={
        <a target="_blank" href="https://techlaunch.io/">
          <Img style={{ borderRadius: '100%' }} fluid={props.image[1].node.childImageSharp.fluid} />
        </a>}
      >
      <h3 className="vertical-timeline-element-title">Techlaunch</h3>
      <h4 className="vertical-timeline-element-subtitle">School, Miami FL</h4>
      <p className="vertical-timeline-element-description">
        This school helped me improve and update my programming skills, which has made me a better programmer.
      </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2016-2017"
      iconStyle={{
        background: '#fff',
        width: '150px',
        height: '150px',
        marginLeft: '-75px'
      }}
      icon={
        <a target="_blank" href="http://msmadlogistics.com/">
          <Img style={{ borderRadius: '100%' }} fluid={props.image[0].node.childImageSharp.fluid} />
        </a>}
      >
      <h3 className="vertical-timeline-element-title">MSM</h3>
      <h4 className="vertical-timeline-element-subtitle">Developer, Miami FL</h4>
      <p className="vertical-timeline-element-description">
        MSM was my first job in the US as a developer while studying at Techlaunch.
      </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2017- Present"
      iconStyle={{
        background: '#fff',
        width: '150px',
        height: '150px',
        marginLeft: '-75px'
      }}
      icon={
        <a target="_blank" href="https://www.spiderboost.com/">
          <Img style={{ borderRadius: '100%' }} fluid={props.image[2].node.childImageSharp.fluid} />
        </a>}
      >
      <h3 className="vertical-timeline-element-title">SpiderBoost</h3>
      <h4 className="vertical-timeline-element-subtitle">Developer, Miami FL</h4>
      <p className="vertical-timeline-element-description">
        SpiderBoost is where I currently work as a developer, surrounded by a very well prepared team.
      </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
      className="vertical-timeline-element--bpms last-child-timeline"
      // date="2015-2016"
      iconStyle={{ background: '#006159', width: '150px', height: '150px', marginLeft: '-75px'  }}
      icon={
        <a className="vertical-timeline-element--bpms__a" href="#">
          <p>Be Part<br/>Of My<br/>History!</p>
        </a>}
      >
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
)
