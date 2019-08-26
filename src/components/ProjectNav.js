import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link, StaticQuery } from 'gatsby';
import vars from '../utils/emotionVars';
import Container from './Container';
import defaultImage from '../images/colored-paper.jpg';

const ProjectNavEl = styled.div`
  position: fixed;
  height: calc(100% - 150px);
  bottom: 0;
  right: 0;
  left: 0;
  background: white;
  display: flex;
  align-items: center;
  z-index: 2;
  .project-nav {
    &__nav-list {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      transform: translateY(-50px);
    }
    &__link {
      font-family: ${vars.ff_secondary};
      font-weight: 400;
      font-size: 30px;
      padding-bottom: 45px;
      display: inline-block;
      &:last-of-type {
        margin-bottom: 0;
      }
      &:hover {
        span {
          border-bottom: 3px solid pink;
        }
      }
    }
  }
`;

const NavigationImage = styled.div`
  border: 1px solid pink;
  width: 50%;
  height: 100%;
`;

class ProjectNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedItem: '',
    };
    this.handleFocusedItem = this.handleFocusedItem.bind(this);
  }
  handleFocusedItem(item) {
    if (item) {
      this.setState({ focusedItem: item.node });
    } else {
      this.setState({ focusedItem: '' });
    }
  }
  render() {
    let imageToDisplay;
    if (this.state.focusedItem) {
      imageToDisplay = (
        <img
          src={this.state.focusedItem.mainImage.file.url}
          alt={this.state.focusedItem.title}
        />
      );
    } else {
      imageToDisplay = <img src={defaultImage} />;
    }
    return (
      <div>
        <ProjectNavEl className="project-nav">
          <StaticQuery
            query={graphql`
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
            `}
            render={data => (
              <Container>
                <ul className="project-nav__nav-list">
                  {data.allContentfulWork.edges.map(e => (
                    <li key={e.node.id}>
                      <Link
                        to={`project/${e.node.slug}`}
                        className="project-nav__link"
                        onClick={() => this.props.handleNavToggle()}
                        onMouseEnter={() => this.handleFocusedItem(e)}
                        onMouseLeave={() => this.handleFocusedItem(false)}
                      >
                        <span>{e.node.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            )}
          />
        </ProjectNavEl>
      </div>
    );
  }
}

export default ProjectNav;
