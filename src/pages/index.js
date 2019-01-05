import React, { Component } from 'react'
import styled from '@emotion/styled'
import Header from '../components/Header'
import weightWatchersImage from '../images/weight-watchers.jpg'
import FF from '../globals/emotionVars'

const Hero = styled.div`
  font-family: ${FF.primary};
  background-color: black;
  padding-bottom: 100px;

  .bio {
    padding: 0 180px;
    margin-top: 100px;
  }
  .bio__title {
    font-weight: 300;
    font-size: 74px;
    line-height: 84px;
    letter-spacing: -1px;
  }
  .bio__subtitle {
    font-size: 60px;
    font-weight: 300;
    margin-top: -20px;
  }
  .bio__description {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.2px;
    max-width: 550px;
  }
`

const WorkSection = styled.div`
  color: black;
`

class HomePage extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Hero>
          <Header />
          <div className="bio__wrapper">
            <div className="bio">
              <h1 className="bio__title">Ayana Powell</h1>
              <h1 className="bio__subtitle">Web Developer</h1>
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
