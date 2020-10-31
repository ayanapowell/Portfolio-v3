import React from 'react';
import HeaderNew from './HeaderNew';
import styled from '@emotion/styled';

const LayoutEl = styled.div`
  &.layout--hp {
    height: 100vh;
    overflow: hidden;
  }
`;

const Layout = ({ children }) => {
  let modifier;
  if (window.location.pathname === '/') {
    modifier = 'hp';
  }
  return (
    <>
      <LayoutEl className={`layout--${modifier}`}>
        <HeaderNew modifier="header" />
        {children}
      </LayoutEl>
    </>
  );
};

export default Layout;
