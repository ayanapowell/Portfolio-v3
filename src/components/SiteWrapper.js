import React from 'react';
import Div100vh from 'react-div-100vh';
import Header from './Header';

const SiteWrapper = props => {
  return (
    <Div100vh>
      <Header onSettingActiveComponent={props.onSettingActiveComponent} />
      {props.children}
    </Div100vh>
  );
};

export default SiteWrapper;
