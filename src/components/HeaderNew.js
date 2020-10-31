import React from 'react';
import styled from '@emotion/styled';
import { TweenMax } from 'gsap';
import { Link } from 'gatsby';
import vars from '../utils/emotionVars';
import '../styles/variables.scss';
import Container from './Container';

const HeaderEl = styled.div`
position: relative;
height: 80px;
display: flex;
align-items: center;
.header__nav {
  position: absolute;
  left: 145px;
  &-inner {
    display: flex;
  }
  &-link {
    padding: 0 1rem;
    font-size: 14px;
    color: gray;
    transition: 0.3s ease all;
    &:hover {
      color: #636060;
    }
  }
}
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50px;
  width: 50px;
  height: 50px;
  padding: 15px 0;
  border-radius: 50%;
  background: #f0f0f0;

  &__inner {
    height: 100%;
    width: 0.5px;
    background: black;
  }
}
`;

class HeaderNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,

    }
    this.handleHover = this.handleHover.bind(this);
    this.animateNav = this.animateNav.bind(this);
  }
  componentDidUpdate() {
    this.animateNav(this.state.isHovered);
  }
  animateNav(isHovered) {
    TweenMax.to('.circle__inner', 0.2, {
      ease: Power0.easeOut,
      rotation: isHovered ? 90 : 0,
    });
    TweenMax.to(".header__nav", 0.3, {
      width: isHovered ? '300px' : '0px',
      ease: Power0.ease
    });
  }
  handleHover() {
    this.setState({ isHovered: !this.state.isHovered });
  }
  render() {

    return (
      <>
        <HeaderEl>
          <Link
            to="/"
            className="circle"
            onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
          >
            <span className="circle__inner circle__inner--left"></span>
          </Link>
          <nav role="navigation" className="header__nav">
            <ul className="header__nav-inner">
              <li>
                <Link to="/work" className="header__nav-link">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="header__nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="header__nav-link" >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </HeaderEl>
      </>
    )
  }
}

export default HeaderNew;