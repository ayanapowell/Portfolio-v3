import React from 'react'
import styled from '@emotion/styled'
import vars from '../utils/emotionVars'
import wwImage from '../images/weight-watchers.jpg'
import northwellImage from '../images/northwell.jpg'
import thewellImage from '../images/thewell.jpg'
import p2Image from '../images/phase2.jpg'
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
        active={index === 0 ? true : false}
        imageSrc={wwImage}
        title={slide.node.title}
        description={slide.node.body.childMarkdownRemark.html}
      />
    )
  })
  return (
    <div>
      <CarouselEl className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">{slides}</div>
      </CarouselEl>
    </div>
  )
}

export default Carousel
