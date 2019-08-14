import React from 'react';
import styled from '@emotion/styled';

const Container = props => {
  return (
    <div className="container test">
      <div className="row">
        <div className="offset-sm-1 column">{props.children}</div>
      </div>
    </div>
  );
};

export default Container;
