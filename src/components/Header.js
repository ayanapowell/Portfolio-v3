import React, { Component } from 'react'
import styled from '@emotion/styled'
import { TweenMax } from 'gsap'
import '../styles/base.scss'
import FF from '../globals/emotionVars'
import SiteName from './SiteName'

const HeaderEl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
  nav {
    display: flex;
  }
  .nav__item {
    padding: 0 35px;
    &:first-of-type {
      padding-left: 0;
    }
  }
  .nav__list-main {
    display: flex;
    padding: 0 180px;
  }

  .contact-info {
    font-family: ${FF.secondary};
    padding-right: 100px;
    font-weight: 100;
    font-size: 12px;
    letter-spacing: 1px;
  }
`

class Header extends Component {
  state = {
    navIsHidden: false,
  }
  componentDidMount() {
    this.switchNav()
  }
  switchNav() {
    const header = document.getElementById('header')
    window.onscroll = () => {
      const topPos = header.getBoundingClientRect().top

      if (topPos <= -90) {
        this.setState({
          navIsHidden: true,
        })
        TweenMax.to('.site-name', 0.5, { top: -150 })
      } else if (topPos === 0) {
        this.setState({
          navIsHidden: false,
        })
        TweenMax.to('.site-name', 0.3, { top: 60 })
      }
    }
  }
  render() {
    return (
      <div>
        <HeaderEl
          className={this.state.navIsHidden ? 'header-alt' : 'header'}
          id="header"
        >
          <SiteName />
          <nav>
            <div className="nav__list-main">
              <div className="nav__item">
                <p>Work</p>
              </div>
              <div className="nav__item">
                <p>About</p>
              </div>
              <div className="nav__item">
                <p>Contact</p>
              </div>
              <div className="nav__item">
                <p>Photography</p>
              </div>
            </div>
          </nav>
          <div className="contact-info">
            <a href="mailto:ayanapowell1@gmail.com?Subject=Hey%20Ayana">
              E: ayanapowell1@gmail.com
            </a>
          </div>
        </HeaderEl>
      </div>
    )
  }
}

export default Header
