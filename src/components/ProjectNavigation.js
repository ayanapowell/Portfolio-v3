import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import defaultImage from '../images/colored-paper.jpg';
import vars from '../utils/emotionVars';

const ProjectNavEl = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 100%;

  .project-nav {
    &__left {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
    }
    &__nav-list {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
    &__link {
      font-family: ${vars.ff_secondary};
      font-weight: 400;
      font-size: 30px;
      margin-bottom: 45px;
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
      right: 0;
      height: 100%;
      width: calc(50% - 50px);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

class ProjectNavigation extends React.Component {
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
        <ProjectNavEl>
          <div className="container">
            <div className="row">
              <div className="project-nav__left offset-sm-1">
                <div className="project-nav__nav-list">
                  {this.props.allProjects.map(e => (
                    <Link
                      to="/"
                      key={e.node.id}
                      className="project-nav__link"
                      onMouseEnter={() => this.handleFocusedItem(e)}
                      onMouseLeave={() => this.handleFocusedItem(false)}
                    >
                      <span>{e.node.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="project-nav__right">{imageToDisplay}</div>
        </ProjectNavEl>
      </div>
    );
  }
}

export default ProjectNavigation;
