import React from 'react'
import Img from "gatsby-image"


export default (props) => (
    <div className="card" data-effect="zoom">
      <figure  className="card__image">
        <Img className="card__image__img" fluid={props.bgAvatar} />
      </figure>
      <div className="card__header">
        <figure className="card__profile">
          <Img className="card__profile__img" fluid={props.avatar} />
        </figure>
      </div>
      <div className="card__body">
        <h3 className="card__name">Yasiel S Caleo</h3>
        <p className="card__job">Developer</p>
        <p className="card__bio"> I am a Full-Stack developer, coding is my passion. I am always looking for new challenges. I love adapting and using new technologies. I feel comfortable working as a team or alone. When I'm not programming, you can find me traveling to other countries or doing extreme sports.</p>
      </div>
      <div className="card__footer">
        <p className="card__date">Aug 27 1987</p>
        <p className=""></p>
      </div>
    </div>
)
