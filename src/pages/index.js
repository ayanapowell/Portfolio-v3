import React, { Component } from 'react'
import styled from '@emotion/styled'
import { SlowMo } from 'gsap'
import Header from '../components/Header'
import WorkFeed from '../components/WorkFeed'
import FF from '../globals/emotionVars'

const Hero = styled.div`
  font-family: ${FF.primary};
  background-color: black;
  height: calc(100vh - 150px);

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
    font-size: 70px;
    line-height: 84px;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;
    .overlay {
      margin-top: 13px;
    }
  }
  .bio__subtitle {
    font-size: 60px;
    font-weight: 300;
    margin-top: -20px;
    position: relative;
    display: inline-block;
    .overlay {
      margin-top: 22px;
    }
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
    height: 70px;
  }
`

class HomePage extends Component {
  state = {
    initWpork: false,
  }
  animateIntro() {
    const tl = new TimelineMax()

    const title = document.querySelector('.bio__title')
    const subtitle = document.querySelector('.bio__subtitle')

    tl
      .to(title.querySelector('.overlay'), 0.2, {
        ease: SlowMo.ease.config(0.2, 0.1, false),
        width: '100%',
        delay: 0.3,
      })
      .to(subtitle.querySelector('.overlay'), 0.2, {
        ease: SlowMo.ease.config(0.2, 0.1, false),
        width: '100%',
      })
      .to(title.querySelector('span'), 0.3, { opacity: 1 })
      .to(subtitle.querySelector('span'), 0.3, { opacity: 1 })
      .to(title.querySelector('.overlay'), 0.2, {
        width: 0,
        right: 0,
        delay: -0.1,
        ease: SlowMo.ease.config(0.2, 0.1, false),
      })
      .to(subtitle.querySelector('.overlay'), 0.2, {
        width: 0,
        right: 0,
        ease: SlowMo.ease.config(0.2, 0.1, false),
      })
      .to(subtitle.querySelector('.overlay'), 0, {
        left: 0,
      })
      .to('.overlay', 0, {
        height: '60px',
      })

    tl
      .to(title.querySelector('.overlay'), 0.3, {
        width: '212px',
        delay: 1,
      })
      .to(subtitle.querySelector('.overlay'), 0.3, {
        width: '138px',
        delay: '-0.3',
      })
      .add(() => {
        this.setState({ initWork: true })
      })
      .to('.bio__description', 0.4, { opacity: 1, delay: 0.3 })
  }
  componentDidMount() {
    this.animateIntro()
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                laoreet augue ut purus consectetur tincidunt. Aenean posuere
                nibh et massa vulputate, in feugiat purus cursus.
              </p>
            </div>
          </div>
        </Hero>
        {this.state.initWork ? (
          <WorkFeed initWork={this.state.initWork} />
        ) : (
          <div />
        )}
      </div>
    )
  }
}

export default HomePage
