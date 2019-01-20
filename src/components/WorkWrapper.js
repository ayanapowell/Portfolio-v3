import React, { Component } from 'react'
import styled from '@emotion/styled'
import vars from '../utils/emotionVars'
import { SlowMo } from 'gsap'

const WorkWrapperEl = styled.div`
  color: ${vars.black};
  position: relative;
  height: 100vh;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    background: ${vars.lightGrey};
    z-index: 1;
  }
`

class WorkWrapper extends Component {
  state = {
    scrolledIntoView: false,
  }

  componentDidMount() {
    this.animateSlide()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollPos = window.scrollY
    if (scrollPos === 30) {
    }
  }

  animateSlide() {
    const animateWrapper = new TimelineMax()
    const wrapper = document.querySelector('#work-wrapper')

    animateWrapper
      .to(wrapper.querySelector('.overlay'), 0.25, {
        ease: SlowMo.ease.config(0.1, 0.5, false),
        width: '100%',
        delay: 1.5,
      })
      .to('.carousel', 0.2, {
        opacity: 1,
      })
      .to('body', 0, {
        css: {
          background: vars.white,
        },
      })
      .to(wrapper.querySelector('.overlay'), 0.4, {
        css: {
          width: `calc(100% - ${vars.gutterLeft})`,
          right: 0,
        },
        delay: 0.1,
      })
      .to(wrapper.querySelector('.overlay'), 0.3, {
        opacity: 0,
        delay: -0.1,
      })
  }
  render() {
    return (
      <div>
        <WorkWrapperEl id="work-wrapper">
          <div className="overlay" />
          {this.props.children}
        </WorkWrapperEl>
      </div>
    )
  }
}

export default WorkWrapper
