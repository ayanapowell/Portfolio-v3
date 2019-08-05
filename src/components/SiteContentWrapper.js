import React from 'react';
import Intro from './Intro';
import ProjectNavigation from './ProjectNavigation';

function SiteContentWrapper(props) {
  let visibleContent;
  if (props.activeItem === 'work') {
    visibleContent = <ProjectNavigation allProjects={props.allProjects} />;
  } else if (props.activeItem === 'contact') {
    visibleContent = 'Contact page!';
  } else if (props.activeItem === 'about') {
    visibleContent = 'About!!';
  } else {
    visibleContent = <Intro />;
  }
  return <div>{visibleContent}</div>;
}

export default SiteContentWrapper;
