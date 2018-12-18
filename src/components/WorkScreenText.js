import React from 'react'

export default (props) => {
  const skills = props.skills.map((skill) => {
    return `<span> ${skill}</span>`
  })
  return (
  <div className="workScreenText">
    <h3 className="workScreenText__title">{props.title}</h3>
      <p className="workScreenText__muted"><strong>What I Did:</strong> {props.description}</p>
      <p className="workScreenText__skills" dangerouslySetInnerHTML={{ __html: `<strong>Skills:</strong> ${skills}` }} />
      <div className="workScreenText__link">
        <a className="greenLink" target="_blank" rel="noopener noreferrer" href={props.liveLink}>VISIT WEBSITE</a>        
      </div>
  </div>
)}
