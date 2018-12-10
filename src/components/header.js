import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

class Header extends Component {
  state = {
    color: 'transparent'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({color: '#006159'})
    } else {
      this.setState({color: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render(){
    const { menuLinks } = this.props;

    return (
      <StaticQuery
        query={
          graphql`
            query {
              file(relativePath: { eq: "ysc-logo-white.png" }) {
                childImageSharp {
                  resize(width: 100, height: 80) {
                    src
                  }
                  fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `
        }
        render={data => (
          <div className="header" style={{ background: this.state.color }}>
            <div className="container">
              <div className="header__wrapper">
                <div className="header__logo">
                <Link to="/">
                  <Img className="header__logo__img" fluid={data.file.childImageSharp.fluid} />
                </Link>
                </div>
                <nav className="header__menu-nav">
                  <ul>
                    {
                      menuLinks.map(link =>
                        <li key={link.name} style={{ 'listStyleType': 'none' }}>
                        <Link  to={link.link}>{link.name}</Link>
                        </li>)
                    }
                    </ul>
                  </nav>
              </div>
            </div>
          </div>
        )}
        />
    )
  }
}

export default Header
