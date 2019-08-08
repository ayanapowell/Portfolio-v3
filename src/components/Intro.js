import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import vars from '../utils/emotionVars';
import '../styles/variables.scss';
import Container from './Container';

const Intro = () => {
  return (
    <div>
      <Container>
        <div className="col-sm-9 px-0">
          <h1 className="intro__title">
            <span>Ayana Powell</span>
          </h1>
          <h1 className="intro__subtitle">
            <span>Web Developer</span>
          </h1>
          <p className="intro__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <button>View my work</button>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
