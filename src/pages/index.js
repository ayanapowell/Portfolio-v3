import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import vars from '../utils/emotionVars'
import Header from '../blocks/Header'
import WorkWrapper from '../components/WorkWrapper'
import Intro from '../components/Intro'
import Carousel from '../blocks/Carousel'

const Hero = styled.div`
  font-family: ${vars.ff_primary};
  background-color: ${vars.black};
  height: calc(100vh - 150px);

  .hero-intro-wrapper {
    max-width: 70%;
  }
`

const IndexPage = ({ data }) => {
  return (
    <div>
      <Hero>
        <Header />
        <div className="hero-intro-wrapper">
          <Intro />
        </div>
      </Hero>
      <WorkWrapper>
        <Carousel slides={data.allContentfulWork.edges} />
      </WorkWrapper>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulWork(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          id
          mainImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`
