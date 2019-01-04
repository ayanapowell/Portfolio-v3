import React, { Component } from 'react'
import { TweenMax, Expo } from "gsap";
import { Link } from 'gatsby-link'
import styled from '@emotion/styled'
import WorkIcon from '../components/workIcon'
import Div100vh from 'react-div-100vh'
import Navigation from '../components/navigation'
import '../styles/base.scss'

const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 60px;
  position: relative;
  .homepage__intro {
    opacity: 0;
    h1 {
      text-align: center;
      font-weight: 600;
      letter-spacing: 4.72px;      
    }
    p {
      text-align: center;
      width: 600px;
      font-size: 20px;
    }
  }
`

class HomePage extends Component {
  componentDidMount() {
    TweenMax.to('.homepage__intro', 0.8, {
      opacity: 1,
      ease: Expo.easeInOut,
      delay: 0.3
    })
  }
  render() {
    return (
      <Div100vh>
        <Navigation/>
        <Home id="homepage" className="homepage">
          <div className="homepage__intro style-primary">
            <h1>AYANA POWELL</h1>
            <p>
              Developer. Creative. Consultant.
            </p>
          </div>
          <WorkIcon/>
        </Home>
      </Div100vh>
    )
  }
}

export default HomePage
