import React from 'react';
import Div100vh from 'react-div-100vh';
import Header from './Header';

function SiteWrapper(props) {
  return (
    <Div100vh>
      <Header />
      {props.children}
    </Div100vh>
  );
}

export default SiteWrapper;
