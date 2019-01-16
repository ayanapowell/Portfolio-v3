import React, { Component } from 'react'
import styled from '@emotion/styled'
import vars from '../utils/emotionVars'

const IntroEl = styled.div`
  font-family: ${vars.ff_primary};
  padding: 0 180px;
  margin-top: 100px;
  span {
    opacity: 0;
  }
  .intro-title {
    font-weight: 300;
    font-size: 70px;
    line-height: 84px;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;
    .overlay {
      margin-top: 13px;
    }
  }
  .intro-subtitle {
    font-size: 60px;
    font-weight: 300;
    margin-top: -20px;
    position: relative;
    display: inline-block;
    .overlay {
      margin-top: 22px;
    }
  }
  .intro-description {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.2px;
    max-width: 550px;
    opacity: 0;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    background: ${vars.lightGrey};
    z-index: 1;
    height: 70px;
  }
`

class Intro extends Component {
  componentDidMount() {
    this.animateIntro()
  }
  animateIntro() {
    const tl = new TimelineMax()

    const title = document.querySelector('.intro-title')
    const subtitle = document.querySelector('.intro-subtitle')

    tl
      .to(title.querySelector('.overlay'), 0.3, {
        ease: SlowMo.ease.config(0.1, 0.5, false),
        width: '100%',
        delay: 0.3,
      })
      .to(subtitle.querySelector('.overlay'), 0.3, {
        ease: SlowMo.ease.config(0.1, 0.7, false),
        width: '100%',
        delay: -0.2,
      })
      .to(title.querySelector('span'), 0.2, { opacity: 1 })
      .to(subtitle.querySelector('span'), 0.2, { opacity: 1 })
      .to(title.querySelector('.overlay'), 0.2, {
        width: 0,
        right: 0,
        delay: -0.2,
      })
      .to(subtitle.querySelector('.overlay'), 0.2, {
        width: 0,
        right: 0,
      })
      .to('.intro-description', 0.4, { opacity: 1, delay: 0.4 })
  }
  render() {
    return (
      <div>
        <IntroEl id="intro" className="intro">
          <h1 className="intro-title">
            <div className="overlay" />
            <span>Ayana Powell</span>
          </h1>
          <h1 className="intro-subtitle">
            <div className="overlay" />
            <span>Web Developer</span>
          </h1>
          <p className="intro-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet augue ut purus consectetur tincidunt. Aenean posuere nibh et
            massa vulputate, in feugiat purus cursus.
          </p>
        </IntroEl>
      </div>
    )
  }
}

export default Intro
