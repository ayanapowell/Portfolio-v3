import React, { Component } from 'react'
import styled from '@emotion/styled'
import vars from '../utils/emotionVars'
import weightWatchersImage from './weight-watchers.jpg'
import { SlowMo } from 'gsap'

const WorkCarouselEl = styled.div`
  color: ${vars.black};
  position: relative;
  height: 100vh;

  .work-carousel-image {
    position: relative;
    width: calc(100% - ${vars.gutterLeft});
    margin-left: ${vars.gutterLeft};
    margin-top: -150px;
    opacity: 0;
    img {
      position: absolute;
      right: 0;
      width: 100%;
      max-width: 100%;
      height: 550px;
      object-fit: cover;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    background: ${vars.lightGrey};
    z-index: 1;
  }
`

class WorkCarousel extends Component {
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

  imageRef = React.createRef()

  animateSlide() {
    const tl = new TimelineMax()

    const carouselWrapper = document.querySelector('#work-carousel')
    tl
      .to(carouselWrapper.querySelector('.overlay'), 0.25, {
        ease: SlowMo.ease.config(0.1, 0.5, false),
        width: '100%',
        delay: 1.5,
      })
      .to(carouselWrapper.querySelector('.work-carousel-image'), 0.2, {
        opacity: 1,
      })
      .to(carouselWrapper.querySelector('.overlay'), 0.4, {
        css: {
          width: `calc(100% - ${vars.gutterLeft})`,
          right: 0,
        },
        delay: 0.1,
      })
      .to(carouselWrapper.querySelector('.overlay'), 0.3, {
        opacity: 0,
        delay: -0.1,
      })
  }
  render() {
    return (
      <div>
        <WorkCarouselEl id="work-carousel">
          <div className="overlay" />
          <div className="work-carousel-wrapper">
            <div className="work-carousel-image">
              <img ref={this.imageRef} src={weightWatchersImage} />
            </div>
          </div>
        </WorkCarouselEl>
      </div>
    )
  }
}

export default WorkCarousel
