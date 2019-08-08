import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import vars from '../utils/emotionVars';
import Container from './Container';
import defaultImage from '../images/colored-paper.jpg';

const ProjectNavEl = styled.div`
  .project-nav {
    width: 50%;
    &__nav-list {
      display: flex;
      flex-direction: column;
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
    &__right {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
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
      <div className="column">
        <ProjectNavEl className="project-nav">
          <Container>
            <div className="project-nav__nav-list">
              {this.props.allProjects.map(e => (
                <Link
                  to={`project/${e.node.slug}`}
                  key={e.node.id}
                  className="project-nav__link"
                  onMouseEnter={() => this.handleFocusedItem(e)}
                  onMouseLeave={() => this.handleFocusedItem(false)}
                >
                  <span>{e.node.title}</span>
                </Link>
              ))}
            </div>
          </Container>
          <div className="project-nav__right">{imageToDisplay}</div>
        </ProjectNavEl>
      </div>
    );
  }
}

export default ProjectNav;
