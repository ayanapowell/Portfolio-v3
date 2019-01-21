import React from 'react'
import styled from '@emotion/styled'
import vars from '../utils/emotionVars'
import CarouselSlide from '../components/CarouselSlide'

const CarouselEl = styled.div`
  opacity: 0;
  position: relative;
  width: calc(100% - ${vars.gutterLeft});
  margin-left: ${vars.gutterLeft};
  margin-top: -150px;
`

const Carousel = props => {
  const slides = props.slides.map((slide, index) => {
    return (
      <CarouselSlide
        key={slide.node.id}
        active={index === 0 ? true : false}
        imageSrc={slide.node.mainImage ? slide.node.mainImage.file.url : false}
        title={slide.node.title}
        slug={slide.node.slug}
      />
    )
  })
  return (
    <div>
      <CarouselEl
        id="workCarousel"
        className="carousel slide"
        data-ride="carousel"
        interval="false"
      >
        <div className="carousel-inner">{slides}</div>
        <a
          className="carousel-control-prev"
          href="#workCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#workCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </CarouselEl>
    </div>
  )
}

export default Carousel
