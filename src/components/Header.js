import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import vars from '../utils/emotionVars';
import '../styles/variables.scss';

const HeaderEl = styled.div`
  position: relative;
  padding-top: 45px;
  .header__nav-list {
    display: flex;
  }
  .header__nav-link {
    margin-right: 52px;
    cursor: pointer;
    &:last-of-type {
      padding-right: 0;
    }
    > span {
      font-size: 18px;
      font-family: ${vars.ff_secondary};
      font-weight: 400;
    }
    &:hover {
      span {
        border-bottom: 3px solid pink;
      }
    }
  }
`;

const LogoEl = styled.div`
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

function Header() {
  const navItems = [
    { title: 'Work', id: 'nav--work', value: 'work' },
    { title: 'Contact', id: 'nav--contact', value: 'contact' },
    { title: 'About', id: 'nav--about', value: 'about' },
  ];
  return (
    <div>
      <LogoEl className="header__logo">AYANA</LogoEl>
      <div className="container">
        <HeaderEl className="row">
          <div className="offset-sm-1 header__nav">
            <ul className="header__nav-list">
              {navItems.map(item => (
                <li>
                  <Link
                    to="/"
                    className="header__nav-link"
                    id={item.id}
                    key={item.id}
                    data-value={item.value}
                  >
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </HeaderEl>
      </div>
    </div>
  );
}

export default Header;
