import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';

const LayoutEl = styled.div`
  &.layout--hp {
    height: 100vh;
    overflow: hidden;
  }
`;

const Layout = ({ children }) => {
  let modifier;
  if (children.props.location.pathname === '/') {
    modifier = 'hp';
  }
  return (
    <>
      <LayoutEl className={`layout--${modifier}`}>
        <Header modifier="header" />
        {children}
      </LayoutEl>
    </>
  );
};

export default Layout;
