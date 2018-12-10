import React from 'react'

// Components
import WorkScreenImg from './WorkScreenImg'
import WorkScreenText from './WorkScreenText'

export default () => (
  <div className="workScreen">
    <div className="container">
      <h2 className="workScreen__title">Some Of My Work</h2>
      <div className="workScreen__img-text">
        <WorkScreenImg />
        <WorkScreenText />
      </div>
      <div className="workScreen__img-text flip">
        <WorkScreenImg />
        <WorkScreenText />
      </div>
      <div className="workScreen__img-text">
        <WorkScreenImg />
        <WorkScreenText />
      </div>
    </div>
  </div>
)
