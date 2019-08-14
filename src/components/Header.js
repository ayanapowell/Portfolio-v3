import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import vars from '../utils/emotionVars';
import '../styles/variables.scss';
import Container from './Container';
import ProjectNav from './ProjectNav';
import Project from '../templates/Project';

const HeaderEl = styled.div`
  position: relative;
  padding-top: 45px;
  .header__nav-list {
    display: flex;
    padding: 0;
  }
  .header__nav-link {
    margin-right: 52px;
    cursor: pointer;
    &:last-of-type {
      padding-right: 0;
    }
    > span {
      font-size: 18px;
      font-family: ${vars.ff_secondary};
      font-weight: 400;
    }
    &:hover {
      span {
        border-bottom: 3px solid pink;
      }
    }
  }
`;

const LogoEl = styled.div`
  transform: rotate(-90deg);
  font-family: ${vars.ff_secondary};
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 95px;
  margin-left: 30px;
  position: absolute;
  cursor: pointer;
  z-index: 999;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  render() {
    return (
      <div>
        <LogoEl className="header__logo">
          <Link to="/">AYANA</Link>
        </LogoEl>
        <Container>
          <HeaderEl>
            <ul className="header__nav-list">
              <li>
                <ul className="project-nav__nav-list" onClick={this.toggleMenu}>
                  <span className="header__nav-link">Work</span>
                  <ProjectNav isNavOpen={this.state.isNavOpen} />
                </ul>
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
          </HeaderEl>
        </Container>
      </div>
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
