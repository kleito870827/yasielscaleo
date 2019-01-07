import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

const Counter = ({ menuOpen, toggle_menu }) => (
  <div>
    <p>Count: {menuOpen ? 'yes' : 'no'}</p>
    <button onClick={toggle_menu}>Toggle Menu</button>
  </div>
)


const mapStateToProps = ({ menuOpen }) => {
  return { menuOpen }
}

const mapDispatchToProps = dispatch => {
  return { toggle_menu: () => dispatch({ type: 'TOGGLE_MENU' }) }
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

class DefaultLayout extends React.Component {
  render() {
    return (
      <div style={{marginTop: '100px'}}>
        <Link to="/">
          <h3>Redux example</h3>
        </Link>
        <ConnectedCounter />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">works</Link>
          </li>
          <li>
            <Link to="/thanks">thanks</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default DefaultLayout
