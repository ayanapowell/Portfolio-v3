import React from 'react';
import styled from '@emotion/styled';

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
      width: 50%;
      border: 1px solid pink;
    }
    &__right {
      position: absolute;
      right: 0;
      height: 100%;
      width: calc(50% - 50px);
    }
  }
`;

function ProjectNavigation(props) {
  return (
    <div>
      <ProjectNavEl>
        <div className="container">
          <div className="row">
            <div className="project-nav__left offset-sm-1">
              <div className="project-nav__nav-list">
                {props.allProjects.map(e => (
                  <h1 key={e.node.id}>{e.node.title}</h1>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="project-nav__right">HELLO!</div>
      </ProjectNavEl>
    </div>
  );
}
export default ProjectNavigation;
