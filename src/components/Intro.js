import React, { Component } from 'react';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import { TweenMax } from 'gsap';

const IntroEl = styled.div`
  font-family: ${vars.ff_primary};
  margin-top: 100px;
  span {
    opacity: 0;
  }
  .intro__title,
  .intro__subtitle {
    font-weight: 300;
    position: relative;
  }
  .intro__title {
    font-size: 70px;
    line-height: 126px;
    .overlay {
      margin-top: 13px;
    }
  }

  .intro__subtitle {
    font-size: 60px;
    margin-top: -20px;
    .overlay {
      margin-top: 22px;
    }
  }
  .intro__description {
    font-size: 30px;
    line-height: 1.4;
    font-weight: 300;
    margin-top: 15px;
    opacity: 0;
    button {
      font-size: 25px;
      font-weight: 300;
      padding: 0;
      margin-top: 50px;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    background: ${vars.lightGrey};
    z-index: 1;
    height: 90px;
  }
`;

class Intro extends Component {
  componentDidMount() {
    this.animateIntro();
  }
  animateIntro() {
    const tl = new TimelineMax();

    const title = document.querySelector('.intro__title');
    const subtitle = document.querySelector('.intro__subtitle');

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
      .to('.intro__description', 0.3, { opacity: 1, delay: 0.4 });
  }
  render() {
    return (
      <div className="container">
        <IntroEl id="intro" className="intro row">
          <div className="col-sm-9 px-0">
            <h1 className="intro__title">
              <div className="overlay" />
              <span>Ayana Powell</span>
            </h1>
            <h1 className="intro__subtitle">
              <div className="overlay" />
              <span>Web Developer</span>
            </h1>
            <p className="intro__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <button>View my work</button>
            </p>
          </div>
        </IntroEl>
      </div>
    );
  }
}

export default Intro;
