import React from 'react'
import styled from '@emotion/styled'
import vars from '../utils/emotionVars'

const NameEl = styled.h1`
  transform: rotate(-90deg);
  font-family: ${vars.ff_secondary};
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 40px;
  position: absolute;
`

const SiteName = () => <NameEl className="site-name">AYANA</NameEl>

export default SiteName
