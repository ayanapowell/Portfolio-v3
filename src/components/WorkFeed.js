import React, { Component } from 'react'
import styled from '@emotion/styled'
import weightWatchersImage from '../images/weight-watchers.jpg'

const WorkFeedEl = styled.div`
  color: black;
  position: relative;
  .work-section--one {
    .work-section__image {
      position: relative;
      width: calc(100% - 180px);
      margin-left: 180px;
      margin-top: -150px;
      img {
        position: absolute;
        right: 0;
        width: 100%;
        max-width: 100%;
        height: 550px;
        object-fit: cover;
      }
    }
  }
`

class WorkFeed extends Component {
  render() {
    return (
      <div>
        <WorkFeedEl>
          <div className="work-section work-section--one">
            <div className="work-section__image">
              <img src={weightWatchersImage} />
            </div>
          </div>
        </WorkFeedEl>
      </div>
    )
  }
}

export default WorkFeed
