import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import { TweenMax } from 'gsap';
import logo from '../images/logo.png';

const SiteNameEl = styled.div`
  transform: rotate(-90deg);
  margin-top: 100px;
  margin-left: 30px;
  position: absolute;
  cursor: pointer;
  z-index: 999;

  a {
    font-family: ${vars.ff_secondary};
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 2px;
  }
`;

class SiteName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
    this.triggerLogoChange = this.triggerLogoChange.bind(this);
  }

  componentDidMount() {
    this.siteName = document.getElementsByClassName('site-name');
    this.triggerLogoChange();
  }

  triggerLogoChange() {
    window.onscroll = () => {
      if (window.scrollY === 130) {
      }
    };
  }

  render() {
    return (
      <>
        <SiteNameEl className="site-name">
          <Link to="/">AYANA</Link>
        </SiteNameEl>
      </>
    );
  }
}

export default SiteName;
