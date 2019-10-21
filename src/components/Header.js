import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import vars from '../utils/emotionVars';
import '../styles/variables.scss';
import Container from './Container';
import ProjectNav from './ProjectNav';
import SiteName from './SiteName';

const HeaderEl = styled.div`
  display: none;
  position: relative;
  padding-top: 45px;
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
      isHidden: true,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ isHidden: !this.state.isHidden });
  }
  render() {
    // Disable scrolling when navigation is open
    if (!this.state.isHidden) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return (
      <>
        <SiteName />
        <Container>
          <HeaderEl>
            <ul className="header__nav-list">
              <li>
                <span className="header__nav-link" onClick={this.toggleMenu}>
                  Work
                </span>

                {!this.state.isHidden && (
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
          </HeaderEl>
        </Container>
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
