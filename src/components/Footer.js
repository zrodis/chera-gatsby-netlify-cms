import React from 'react'
import { Link } from 'gatsby'
import logoChera from '../img/logo/CHERA-Logo_Green.png'
import facebook from '../img/social/facebook.svg'
import { DonateButton } from './DonateButton'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logoChera}
            alt="CHERA"
            style={{ height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/education">
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link  className="navbar-item" to="/reports">
                        Financial Reports
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <DonateButton
                  buttonProps={{ className: 'is-large button is-white' }}
                />
              </div>
              
            </div>
          </div>
          <div style={{ margin: '4em' }}>
            Stay up to date by following us on Facebook:
            <br />
            
            <a
              title="CHERA facebook"
              href="https://www.facebook.com/CHERAhealth/"
              className="light-link"
              style={{ margin: '10px', fontSize: '1.5em' }}
            >
              <img
                src={facebook}
                alt="CHERA Facebook"
                style={{ width: '0.8em', height: '0.8em', marginRight: '4px' }}
              />
              CHERA
            </a>
            
          </div>
          <span className="fine-print">{`© ${new Date().getFullYear()} Community Health and Education for Rural Africa `}</span>
          <div>
            <span className="fine-print">
              {' '}
              <Link style={{ color: 'white' }} to="/aboutthissite">
                {' '}
                About this site
              </Link>
            </span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
