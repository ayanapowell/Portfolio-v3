import React, { Component } from 'react'
import styled from '@emotion/styled'
import { TweenMax, className } from 'gsap'
import homeIcon from '../images/icons/home-button.svg'
import menuIcon from '../images/icons/menu-button.svg'

const HeaderDiv = styled.div`
  position: relative;
  header {
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
    padding: 0 60px 110px 60px;
    opacity: 0;
  }
  .visible {
    padding: 30px 60px; 
    margin-top: 0;
    opacity: 1;
  }
`

class Header extends Component {
  componentDidMount() {
    TweenMax.to('header', 0.5, {className: '+=visible', delay: 1});
  }
  render() {
    const { variant } = this.props

    return (
      <HeaderDiv>
        <header className={`style--${variant}`}>
          <div className="header__home-button">
            <img src={homeIcon} alt="home" />
          </div>
          <div className="header__menu-button">
            <img src={menuIcon} alt="home" />
          </div>
        </header>
      </HeaderDiv>
    )
  }
}

export default Header
