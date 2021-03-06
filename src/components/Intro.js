import React from 'react';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import Container from './Container';

const IntroEl = styled.div`
  font-family: ${vars.ff_primary};
  margin-top: 100px;
  .intro__title,
  .intro__subtitle {
    font-weight: 300;
    position: relative;
  }
  .intro__title {
    font-size: 70px;
    line-height: 126px;
  }

  .intro__subtitle {
    font-size: 60px;
    margin-top: -20px;
    .overlay {
      margin-top: 22px;
    }
  }
  .intro__description {
    font-size: 30px;
    line-height: 1.4;
    font-weight: 300;
    margin-top: 15px;
    button {
      font-size: 25px;
      font-weight: 300;
      margin-top: 50px;
      padding: 0;
      display: block;
    }
  }
`;

const Intro = () => {
  return (
    <>
      <Container>
        <IntroEl className="col-sm-9 px-0">
          <h1 className="intro__wrapper">
            <span className="intro__title">Ayana Powell</span>
            <span className="intro__subtitle">Web Developer</span>
          </h1>

          <p className="intro__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>View my work</button>
        </IntroEl>
      </Container>
    </>
  );
};

export default Intro;
