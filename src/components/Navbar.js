import React from 'react'
import { Link } from 'gatsby'
import logoChera from '../img/logo/CHERA-Logo_Badge-White-Green-BG-Square.png'
import { DonateButton } from './DonateButton'
import { cheraYellow } from './Layout'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: 'navbar-active',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            

            <Link to="/" id="chera-logo" className="navbar-item" title="Logo">
              <img
                src={logoChera}
                style={{ maxHeight: '8rem', height: 'auto' }}
                alt="CHERA"
              />
            </Link>
            <div className="has-text-centered navbar-item">
              <DonateButton />
            </div>

            {/* { 
              this.state.navBarActiveClass === '' &&
              <div className={`navbar-end ${this.state.navBarActiveClass}`}>
                <DonateButton anchorProps={{className:"navbar-item"}}/>
              </div>
            } */}
            {/* Hamburger button */}

            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span style={{color:'white'}}/>
              <span style={{color:'white'}}/>
              <span style={{color:'white'}}/>
            </div>
          </div>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link id="navbar-item" className="navbar-item" activeStyle={{color:cheraYellow}} to="/about">
                About
              </Link>
              <Link id="navbar-item" className="navbar-item" activeStyle={{color:cheraYellow}} to="/health">
                Health
              </Link>
              <Link id="navbar-item" className="navbar-item" activeStyle={{color:cheraYellow}} to="/education">
                Education
              </Link>
              <Link id="navbar-item" className="navbar-item" activeStyle={{color:cheraYellow}} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
