import React, { Component } from 'react'
import styled from '@emotion/styled'
import vars from '../utils/emotionVars'
import Header from '../blocks/Header'
import WorkCarousel from '../blocks/WorkCarousel'
import Intro from '../components/Intro'

const Hero = styled.div`
  font-family: ${vars.ff_primary};
  background-color: ${vars.black};
  height: calc(100vh - 150px);

  .hero-intro-wrapper {
    max-width: 70%;
  }
`

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero>
          <Header />
          <div className="hero-intro-wrapper">
            <Intro />
          </div>
        </Hero>
        <WorkCarousel />
      </div>
    )
  }
}

export default HomePage
