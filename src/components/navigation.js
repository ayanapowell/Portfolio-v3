import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import styled from '@emotion/styled'
import { TweenMax, className } from 'gsap'
import menuIcon from '../images/icons/menu-new.svg'

const NavWrapper = styled.div`
  position: relative;
  nav {
    display: flex;
    justify-content: flex-end;
    margin-top: -50px;
    padding: 0 60px 110px 60px;
    opacity: 0;
    cursor: pointer;
    position: fixed;
    width: 100%;
    z-index: 1;
  }
  .nav__menu-button {
    align-self: flex-end;
    width: 30px;
    img {
      width: 100%;
    }
  }
  .visible {
    padding: 30px 60px;
    margin-top: 0;
    opacity: 1;
  }
  .hidden {
    display: none;
  }
`

class Navigation extends Component {
  state = {
    isFront: false,
  }
  componentWillMount() {
    this.setState({
      isFront: location.pathname === withPrefix('/') ? true : false,
    })
  }
  componentDidMount() {
    TweenMax.to('nav', 0.5, { className: '+=visible', delay: 0.8 })
  }
  render() {
    const { variant } = this.props
    const { isFront } = this.state

    return (
      <NavWrapper>
        <nav>
          <div className="nav__menu-button">
            <img src={menuIcon} alt="home" />
          </div>
        </nav>
      </NavWrapper>
    )
  }
}

export default Navigation
