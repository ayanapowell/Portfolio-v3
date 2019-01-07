import React, { Component } from 'react'
import styled from '@emotion/styled'
import { SlowMo } from 'gsap'
import Header from '../components/Header'
import weightWatchersImage from '../images/weight-watchers.jpg'
import FF from '../globals/emotionVars'

const Hero = styled.div`
  font-family: ${FF.primary};
  background-color: black;
  padding-bottom: 100px;

  .bio__wrapper {
    max-width: 70%;
  }
  .bio {
    padding: 0 180px;
    margin-top: 100px;
    span {
      opacity: 0;
    }
  }
  .bio__title {
    font-weight: 300;
    font-size: 74px;
    line-height: 84px;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;
  }
  .bio__subtitle {
    font-size: 60px;
    font-weight: 300;
    margin-top: -20px;
    position: relative;
    display: inline-block;
  }
  .bio__description {
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
    background: #f2f2f2;
    z-index: 1;
  }
`

const WorkSection = styled.div`
  color: black;
`

class HomePage extends Component {
  componentDidMount() {
    const tl = new TimelineMax()

    tl
      .to('.bio__title .overlay', 0.2, {
        ease: SlowMo.ease.config(0.2, 0.1, false),
        width: '100%',
        delay: 0.3,
      })
      .to('.bio__subtitle .overlay', 0.2, {
        ease: SlowMo.ease.config(0.2, 0.1, false),
        width: '100%',
      })
      .to('.bio__title span', 0.3, { opacity: 1 })
      .to('.bio__subtitle span', 0.3, { opacity: 1 })
      .to('.bio__title .overlay', 0.2, {
        width: 0,
        right: 0,
        delay: -0.1,
        ease: SlowMo.ease.config(0.2, 0.1, false),
      })
      .to('.bio__subtitle .overlay', 0.2, {
        width: 0,
        right: 0,
        ease: SlowMo.ease.config(0.2, 0.1, false),
      })
      .to('.bio__description', 0.3, { opacity: 1, delay: 0.2 })
  }
  render() {
    return (
      <div>
        <Hero>
          <Header />
          <div className="bio__wrapper">
            <div className="bio">
              <h1 className="bio__title">
                <div className="overlay" />
                <span>Ayana Powell</span>
              </h1>
              <h1 className="bio__subtitle">
                <div className="overlay" />
                <span>Web Developer</span>
              </h1>
              <p className="bio__description">
                Strategi, teknologi og design er grundstenene i udviklingen af
                stærke brugeroplevelser, der understøtter jeres behov og styrker
                jeres forretning
              </p>
            </div>
          </div>
        </Hero>
        <WorkSection>
          <div className="work-section work-section--one">
            <div className="work-section__image">
              <img src={weightWatchersImage} />
            </div>
          </div>
        </WorkSection>
      </div>
    )
  }
}

export default HomePage
