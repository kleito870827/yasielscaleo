import React from 'react'
import { Link } from 'gatsby'
import Img404 from "../images/image_404.svg";
import Astronaut from "../images/astronaut.svg";
import Rocket from "../images/rocket.svg";
import Earth from "../images/earth.svg";
import Moon from "../images/moon.svg";

const NotFoundPage = () => (
  <div className="pageNotFound">
    <div className="bg-purple">
      <div className="stars">
          <div className="central-body">
            <div className="body-text img404_svg">
              <Img404 className="image-404" width="300px" />
              <Link className="btn-go-home" to="/">
                GO BACK HOME
              </Link>
            </div>
          </div>
          <div className="objects">
              <div className="rocket_svg">
                <Rocket className="object_rocket" width="40px"/>
              </div>
              <div className="earth-moon">
                <div className="earth_svg">
                  <Earth className="object_earth" width="100px" />
                </div>
                <div className="moon_svg">
                  <Moon className="object_moon" width="80px" />
                </div>
              </div>
              <div className="box_astronaut astronaut_svg">
                <Astronaut className="object_astronaut" width="140px" />
              </div>
          </div>
          <div className="glowing_stars">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
          </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage
