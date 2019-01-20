import React, { Component } from 'react'
import styled from '@emotion/styled'

const CarouselSlideEl = styled.div`
  img {
    width: 100%;
    max-width: 100%;
    height: 550px;
    object-fit: cover;
  }
`

class CarouselSlide extends Component {
  imageRef = React.createRef()
  render() {
    const { imageSrc, title, description, active } = this.props
    return (
      <div className={`carousel-item ${active ? 'active' : ''}`}>
        <CarouselSlideEl>
          <img ref={this.imageRef} src={imageSrc} />
          <div className="carousel-caption d-none d-md-block">
            <h5>{title}</h5>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </CarouselSlideEl>
      </div>
    )
  }
}

export default CarouselSlide
