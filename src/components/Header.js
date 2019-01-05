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
  position: relative;

  .contact-info {
    font-family: ${FF.secondary};
    padding-right: 100px;
    font-weight: 100;
    font-size: 12px;
    letter-spacing: 1px;
  }
`

const NavEl = styled.nav`
  display: flex;
  .nav-list__menu-icon {
    position: fixed;
    left: 45px;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    transform: scale(0, 0);
    opacity: 0;
  }
  &.nav-list--default {
    .nav-list__item {
      padding: 0 35px;
      &:first-of-type {
        padding-left: 0;
      }
    }
    .nav-list__list {
      display: flex;
      padding: 0 180px;
    }
  }

  &.nav-list--alt {
    .nav-list__menu-icon {
    }
    .nav-list__inner {
      display: none;
    }
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
        TweenMax.to('.nav-list__menu-icon', 0.4, {
          css: { opacity: 1, scaleX: 1, scaleY: 1 },
        })
      } else if (topPos === 0) {
        this.setState({
          navIsHidden: false,
        })
        TweenMax.to('.site-name', 0.3, { top: 60, delay: 0.2 })
        TweenMax.to('.nav-list__menu-icon', 0.2, {
          css: { scaleX: 0, scaleY: 0 },
        })
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
          <NavEl
            className={
              this.state.navIsHidden ? 'nav-list--alt' : 'nav-list--default'
            }
          >
            <div className="nav-list__menu-icon" />
            <div className="nav-list__inner">
              <div className="nav-list__list">
                <div className="nav-list__item">
                  <p>Work</p>
                </div>
                <div className="nav-list__item">
                  <p>About</p>
                </div>
                <div className="nav-list__item">
                  <p>Contact</p>
                </div>
                <div className="nav-list__item">
                  <p>Photography</p>
                </div>
              </div>
            </div>
          </NavEl>
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
