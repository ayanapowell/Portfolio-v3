import React, { Component } from 'react'
import { Link } from 'gatsby-link'
import TweenMax from 'gsap'
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
    transition: 0.4s ease;
    opacity: 0;

    h1 {
      font-weight: 100;
    }
  }
  .vertical-divider {
    height: 100px;
    margin: 30px 0;
    span {
      display: block;
      border-left: 1px solid #e2e6e5;
    }
  }
  .homepage__work-button {
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
  }
`

class HomePage extends Component {
  componentDidMount() {
    const tl = new TimelineMax()

    tl
      .to('.homepage__intro', 0.8, { opacity: 1 })
      .to(
        '.vertical-divider span',
        0.35,
        {
          paddingBottom: '100px',
        },
        '+=0.8'
      )
      .to('.homepage__work-button', 0.6, { opacity: 1 }, '+=0.2')
  }
  render() {
    return (
      <div>
        <Container variant="default">
          <Home id="homepage" className="homepage">
            <div className="homepage__intro">
              <h1> Hi, I'm Ayana.</h1>
              <h1>Web Developer,</h1>
              <h1>fresh from Portland,</h1>
              <h1>living in Brooklyn.</h1>
            </div>
            <div className="vertical-divider">
              <span />
            </div>
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
