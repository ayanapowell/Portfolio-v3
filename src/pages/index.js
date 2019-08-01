import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import vars from '../utils/emotionVars'
import Navigation from '../components/Navigation'
import Intro from '../components/Intro'
import SiteName from '../components/SiteName'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/scss/bootstrap-grid.scss'

const HeroEl = styled.div`
  font-family: ${vars.ff_primary};
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
`

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <HeroEl>
          <SiteName />
          <div className="container">
            <div className="row">
              <div className="offset-sm-1">
                <Navigation />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="offset-sm-1">
                <div>
                  <Intro />
                </div>
              </div>
            </div>
          </div>
        </HeroEl>
      </div>
    )
  }
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
