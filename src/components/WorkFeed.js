import React, { Component } from 'react'
import styled from '@emotion/styled'
import weightWatchersImage from '../images/weight-watchers.jpg'
import { TweenMax, SlowMo } from 'gsap'

const WorkFeedEl = styled.div`
  color: black;
  position: relative;
  height: 100vh;
  .work-section--one {
    .work-section__image {
      position: relative;
      width: calc(100% - 180px);
      margin-left: 180px;
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
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    background: #e2e6e5;
    z-index: 1;
  }
`

class WorkFeed extends Component {
  componentDidMount() {
    const tl = new TimelineMax()

    const workFeedWrapper = document.querySelector('#work-feed')
    tl
      .to(workFeedWrapper.querySelector('.overlay'), 0.25, {
        ease: SlowMo.ease.config(0.1, 0.5, false),
        width: '100%',
        delay: 0.1,
      })
      .to(workFeedWrapper.querySelector('.work-section__image'), 0.2, {
        opacity: 1,
      })
      .to(workFeedWrapper.querySelector('.overlay'), 0.3, {
        css: {
          'margin-left': '180px',
        },
        delay: 0.1,
      })
      .to(workFeedWrapper.querySelector('.overlay'), 0.3, {
        opacity: 0,
        delay: '-0.1',
      })
  }
  render() {
    return (
      <div>
        <WorkFeedEl id="work-feed">
          <div className="overlay" />
          <div className="work-section work-section--one">
            <div className="work-section__image">
              <img src={weightWatchersImage} />
            </div>
          </div>
        </WorkFeedEl>
      </div>
    )
  }
}

export default WorkFeed
