import React from 'react';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';

const NameEl = styled.h1`
  transform: rotate(-90deg);
  font-family: ${vars.ff_secondary};
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 95px;
  margin-left: 30px;
  position: absolute;
  cursor: pointer;
  z-index: 999;
`;

const SiteName = props => (
  <NameEl
    className="site-name"
    onClick={() => {
      props.onNavSelection('home');
    }}
  >
    AYANA
  </NameEl>
);

export default SiteName;
