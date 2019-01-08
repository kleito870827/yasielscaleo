import React, { Component } from 'react'
import { IoMdRocket } from "react-icons/io";

// Components
import Social from './Social'
import Contact from './Contact'

class Footer extends Component {
  state= {
    date: new Date()
  }

  onClickBackTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  render(){
    return (
      <footer className="footer">
        <Contact />
        <Social />
        <div className="footer__bottom">
          <div style={{position: 'relative'}}>
            <svg className="diagonal footer-left" width="80%" height="70" viewBox="0 0 100 102" preserveAspectRatio="none">
              <path d="M0 100 L100 100 L0 10 Z"></path>
            </svg>
            <svg className="diagonal footer-right" width="20%" height="70" viewBox="0 0 100 102" preserveAspectRatio="none">
              <path d="M0 100 L100 100 L100 10 Z"></path>
            </svg>
          </div>
          <div className="footer__bottom__back-top" onClick={this.onClickBackTop}>
            <IoMdRocket className="footer__bottom__back-top__icon" />
            <p className="footer__bottom__back-top__text">Go to the Space</p>
          </div>
          <p className="footer__bottom__copyright">© {this.state.date.getFullYear()} Yasiel S Caleo</p>
        </div>
      </footer>
    )
  }
}


export default Footer;
