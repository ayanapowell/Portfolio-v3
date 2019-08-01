import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import vars from '../utils/emotionVars'
import '../styles/base.scss'

const NavigationWrapperEl = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 58px;
  position: relative;
`

const NavEl = styled.nav`
  display: flex;
  .nav-list__menu-icon {
    position: fixed;
    left: 45px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    transform: scale(0, 0);
    opacity: 0;
  }

  .nav-list__item {
    padding-right: 52px;
    &:last-of-type {
      padding-right: 0;
    }
    &:hover {
      color: ${vars.white};
    }
    > p {
      font-size: 18px;
      font-family: ${vars.ff_secondary};
      font-weight: 400;
    }
  }
  .nav-list__list {
    display: flex;
  }

  &.nav-list--alt {
    .nav-list__inner {
      display: none;
    }
  }
`

function Navigation() {
  return (
    <div className="navigation">
      <NavigationWrapperEl>
        <NavEl className="nav-list">
          <div className="nav-list__menu-icon" />
          <div className="nav-list__inner">
            <div className="nav-list__list">
              <span className="nav-list__item">
                <p>Work</p>
              </span>
              <span className="nav-list__item">
                <p>Contact</p>
              </span>
              <span className="nav-list__item">
                <p>About</p>
              </span>
            </div>
          </div>
        </NavEl>
      </NavigationWrapperEl>
    </div>
  )
}
export default Navigation
