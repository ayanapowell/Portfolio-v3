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
      width: 1px;
      background: black;
      margin: 0 4px;
    }
    &__inner--left {
      display: none;
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
  }
  componentDidUpdate() {
    if (
      (!this.state.isHovered && !this.state.navIsOpen) ||
      (this.state.navIsOpen && this.state.isHovered)
    ) {
      this.animateDefault();
    } else if (this.state.navIsOpen && !this.state.isHovered) {
      this.animateClose();
    } else if (!this.state.navIsOpen && this.state.isHovered) {
      this.animateHome();
    }
  }
  animateHome(state = '') {
    TweenMax.to('.circle__inner', 0.2, {
      ease: Power0.easeOut,
      rotation: state === 'revert' ? 0 : 90,
    });
  }
  animateDefault() {
    TweenMax.to('.circle__inner', 0.2, {
      ease: Power0.easeOut,
      scale: 0,
    });
    TweenMax.to('.circle__inner', 0.2, {
      ease: Power0.easeOut,
      delay: 0.3,
      rotation: 0,
    });
    TweenMax.to('.circle__inner--left', 0, {
      ease: Power0.easeOut,
      delay: 0.3,
      display: 'none',
    });
    TweenMax.to('.circle__inner--right', 0.2, {
      ease: Power0.easeOut,
      delay: 0.4,
      scale: 1,
    });
  }
  animateClose() {
    TweenMax.to('.circle__inner', 0.2, {
      ease: Power0.easeOut,
      scale: 0,
      margin: 0,
    });
    TweenMax.to('.circle__inner--left', 0, {
      ease: Power0.easeOut,
      delay: 0.2,
      display: 'block',
      rotation: 45,
    });
    TweenMax.to('.circle__inner--right', 0.2, {
      delay: 0.2,
      ease: Power0.easeOut,
      rotation: -45,
    });
    TweenMax.to('.circle__inner', 0.2, {
      delay: 0.4,
      ease: Power0.easeOut,
      scale: '1',
    });
  }
  toggleMenu() {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }
  handleHover() {
    this.setState({ isHovered: !this.state.isHovered });
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
                <Link to="/contact" className="header__nav-link">
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="header__nav-link">
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
