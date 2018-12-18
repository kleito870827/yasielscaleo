import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


class Header extends Component {
  state = {
    color: 'transparent',
    body: ''
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

    this.setState({ body: document.querySelector('.layout-cont')})

    // const app = (() => {
    	// let body;
    	// let menu;
    	// let menuItems;

    	// const init = () => {
    		// body = document.querySelector('body');
    		// menu = document.querySelector('.menu-icon');
    		// menuItems = document.querySelectorAll('.nav__list-item');

    		// applyListeners();
    	// }

    	// const applyListeners = () => {
    	// 	this.state.menu.addEventListener('click', () => this.toggleClass(this.state.body, 'nav-active'));
    	// }



    // 	init();
    // })();
  }

  toggleClass = (element, stringClass) => {
    if(element.classList.contains(stringClass)){
      element.classList.remove(stringClass);
    }
    else{
      element.classList.add(stringClass);
    }
  }

  onClickToggleMenu = () => {
    this.toggleClass(this.state.body, 'nav-active')
  }
  onClickLiToggleMenu = () => {
    this.toggleClass(this.state.body, 'nav-active')
  }

  // console.clear();

  render(){
    const { menuLinks } = this.props;
    // console.log(this.props.menuOpen);

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
            <nav className="header__menu-nav">
              <div className="nav">
                <div className="nav__content">
                  <ul className="nav__list">
                    {
                      menuLinks.map((link, i) =>{
                        return (
                          <li className="nav__list-item" key={i}>
                            <Link to={link.link}><span onClick={this.onClickLiToggleMenu}>{link.name}</span></Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </nav>
            <div className="container">
              <div className="header__wrapper">
                <div className="header__logo">
                  <Link to="/">
                    <Img className="header__logo__img" fluid={data.file.childImageSharp.fluid} />
                  </Link>
                </div>
                <div onClick={this.onClickToggleMenu} className="menu-icon">
                  <span className="menu-icon__line menu-icon__line-left"></span>
                  <span className="menu-icon__line"></span>
                  <span className="menu-icon__line menu-icon__line-right"></span>
                </div>
              </div>
            </div>
          </div>
        )}
        />
    )
  }
}

export default Header
