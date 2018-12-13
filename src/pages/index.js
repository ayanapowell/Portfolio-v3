import React, { Component } from 'react'
import { Link } from 'gatsby-link'
import TweenMax from 'gsap/TweenMax'
import styled from '@emotion/styled'
import selfImage from '../images/ayana-3.jpg'
import Container from '../components/container'

const Home = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -115px;

  .homepage__intro {
    text-align: center;
    font-weight: light;

    h1 {
      font-weight: 100;
    }
  }

  .homepage__work-button {
    font-size: 24px;
    cursor: pointer;
    &:hover {
    }
  }
`

class HomePage extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Container variant="default">
          <Home id="homepage" className="homepage">
            <div className="homepage__intro">
              <h1> Hi, I'm Ayana.</h1>
              <h1>I'm a Web Developer,</h1>
              <h1>fresh from Portland,</h1>
              <h1>living in Brooklyn.</h1>
            </div>
            <span className="vertical-divider" />
            <button className="homepage__work-button" aria-label="View my work">
              View my work
            </button>
          </Home>
        </Container>
      </div>
    )
  }
}

export default HomePage
