import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import styled from '@emotion/styled'
import { TweenMax, className } from 'gsap'
import workIcon from '../images/icons/work-icon.svg'

const IconWrapper = styled.div`
  > img {
    opacity: 0;
    bottom: 0;
    position: absolute;
    left: 50%;
    cursor: pointer;
  }
  .visible {
    opacity: 1;
  }
`

class WorkIcon extends Component {
  hoverOn() {
    console.log(workIcon);
  }
  componentDidMount() {
    TweenMax.to('.work-icon img', 0.6, { className: '+=visible', delay: 0.8 });
  }
  render() {
    return (
      <IconWrapper className="work-icon" onMouseEnter={this.hoverOn}>
        <img src={workIcon} alt=""/>
      </IconWrapper>
    )
  }
}

export default WorkIcon;