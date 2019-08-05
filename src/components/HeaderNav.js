import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import '../styles/base.scss';

const HeaderNavEl = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 58px;
  position: relative;
`;

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

  .nav-list__link {
    padding-right: 52px;
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
  .nav-list__list {
    display: flex;
  }

  &.nav-list--alt {
    .nav-list__inner {
      display: none;
    }
  }
`;

function HeaderNav(props) {
  const navItems = [
    { title: 'Work', id: 'nav--work', value: 'work' },
    { title: 'Contact', id: 'nav--contact', value: 'contact' },
    { title: 'About', id: 'nav--about', value: 'about' },
  ];
  return (
    <div className="navigation">
      <HeaderNavEl>
        <NavEl className="nav-list">
          <div className="nav-list__menu-icon" />
          <div className="nav-list__inner">
            <div className="nav-list__list">
              {navItems.map(item => (
                <Link
                  to="/"
                  className="nav-list__link"
                  id={item.id}
                  key={item.id}
                  onClick={() => {
                    props.onNavSelection(item.value);
                  }}
                >
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </NavEl>
      </HeaderNavEl>
    </div>
  );
}
export default HeaderNav;
