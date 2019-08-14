import React from 'react';
import styled from '@emotion/styled';
import vars from '../../utils/emotionVars';
import Container from '../Container';

const HeroEl = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 58px;
  height: 580px;
  z-index: 1;
  h1 {
    font-family: ${vars.ff_primary};
    font-size: 75px;
    font-weight: 500;
    line-height: 0.9;
    span {
      display: block;
    }
  }
  .project__hero-image {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    overflow-x: hidden;
    z-index: -1;

    img {
      max-height: 580px;
      object-fit: cover;
      width: 100vw;
    }
    .inner {
      height: 100%;
      width: 100%;
      box-shadow: 0 1px 1px #f2f2f2f2;
    }
  }
`;

const Hero = props => {
  return (
    <>
      <HeroEl>
        <Container>{props.title}</Container>
        <div className="project__hero-image">
          <div className="container">
            <div className="row">
              <div className="offset-sm-2 inner">
                <img src={props.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </HeroEl>
    </>
  );
};

export default Hero;
