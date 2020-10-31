import React from 'react';
import styled from '@emotion/styled';
import { TweenMax } from 'gsap';
import { Link } from 'gatsby';
import vars from '../utils/emotionVars';
import '../styles/variables.scss';
import Container from './Container';
import ProjectNav from './ProjectNav';

const HeaderEl = styled.div`
  position: relative;
  height: 115px;
  display: flex;
  align-items: center;
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
  .container--header {
    position: relative;
  }
  .header__nav-list {
    display: flex;
    padding: 0;
  }
  .header__nav-link {
    margin-right: 52px;
    cursor: pointer;
    font-size: 22px;
    font-family: ${vars.ff_secondary};
    font-weight: 400;
    &:last-of-type {
      padding-right: 0;
    }
    &:hover {
      span {
        border-bottom: 3px solid pink;
      }
    }
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsOpen: false,
      isHovered: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.animateNav = this.animateNav.bind(this);
    this.animateHome = this.animateHome.bind(this);
  }
  componentDidUpdate() {
    if (this.state.navIsOpen) {
      this.animateNav(this.state.isHovered);
    } else {
      this.animateHome(this.state.isHovered);
    }
  }
  toggleMenu() {
    this.setState({ navIsOpen: !this.state.navIsOpen });
    this.animateNav(this.state.isHovered);
  }
  handleHover() {
    this.setState({ isHovered: !this.state.isHovered });
  }

  animateHome(isHovered) {
    TweenMax.to('.circle__inner', 0.2, {
      ease: Power0.easeOut,
      rotation: isHovered ? 90 : 0,
    });
  }
  animateNav(isHovered) {
    switch (isHovered) {
      case true:
        TweenMax.to('.circle__inner', 0.2, {
          ease: Power0.easeOut,
          rotation: 0,
        });
        break;
      case false:
        TweenMax.to('.circle__inner--left', 0.2, {
          ease: Power0.easeOut,
          delay: 0.25,
          rotation: 45,
        });
        TweenMax.to('.circle__inner--right', 0.2, {
          delay: 0.25,
          ease: Power0.easeOut,
          rotation: -45,
        });
        break;
    }
  }

  render() {
    // Disable scrolling when navigation is open
    if (this.state.navIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return (
      <>
        <HeaderEl className="header">
          <Link
            to="/"
            className="circle"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            onClick={this.toggleMenu}
          >
            <span className="circle__inner circle__inner--left"></span>
            <span className="circle__inner  circle__inner--right"></span>
          </Link>
          <Container modifier={this.props.modifier}>
            <ul className="header__nav-list">
              <li>
                <span className="header__nav-link" onClick={this.toggleMenu}>
                  Work
                </span>

                {this.state.navIsOpen && (
                  <ProjectNav handleNavToggle={this.toggleMenu} />
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  className="header__nav-link"
                  onClick={() =>
                    this.setState({ navIsOpen: false, isHovered: false })
                  }
                >
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="header__nav-link"
                  onClick={() =>
                    this.setState({ navIsOpen: false, isHovered: false })
                  }
                >
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </Container>
        </HeaderEl>
      </>
    );
  }
}

export default Header;

export const pageQuery = graphql`
  query {
    allContentfulWork(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          id
          mainImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
