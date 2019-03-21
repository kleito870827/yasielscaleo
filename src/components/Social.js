import React from 'react'
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default () => (
  <div className="social-btns">
    <a target="_blank" aria-label="Follow us on Facebook. (Opens in a new tab)" rel="noopener noreferrer" className="btn facebook" href="https://www.facebook.com/caleo.kleito">
      <FaFacebookF className="fa fa-facebook" />
    </a>
    <a target="_blank" aria-label="Follow us on Twitter. (Opens in a new tab)" rel="noopener noreferrer" className="btn twitter" href="https://twitter.com/CaleoYasiel">
      <FaTwitter className="fa fa-twitter" />
    </a>
    <a target="_blank" aria-label="Follow us on Github. (Opens in a new tab)" rel="noopener noreferrer" className="btn github" href="https://github.com/kleito870827">
      <FaGithub className="fa fa-github" />
    </a>
    <a target="_blank" aria-label="Follow us on Linkedin. (Opens in a new tab)" rel="noopener noreferrer" className="btn linkedin" href="https://www.linkedin.com/in/yasiel-caleo/">
      <FaLinkedinIn className="fa fa-linkedin" />
    </a>
  </div>
)
