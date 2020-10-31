import React from 'react';
import styled from '@emotion/styled';
import { TweenMax } from 'gsap';
import { Link } from 'gatsby';
import vars from '../utils/emotionVars';
import '../styles/variables.scss';
import Container from './Container';

const HeaderEl = styled.div`
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
    this.animateHome = this.animateHome.bind(this);
  }
  componentDidUpdate() {
    this.animateHome(this.state.isHovered);
  }
  animateHome(isHovered) {
    TweenMax.to('.circle__inner', 0.2, {
      ease: Power0.easeOut,
      rotation: isHovered ? 90 : 0,
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
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <span className="circle__inner circle__inner--left"></span>
          </Link>
        </HeaderEl>
      </>
    )
  }
}

export default HeaderNew;