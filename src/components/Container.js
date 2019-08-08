import React from 'react';
import styled from '@emotion/styled';

const ContainerEl = styled.div`
  height: 100%;
  .container,
  .row,
  .column {
    height: 100%;
    width: 100%;
  }
`;
const Container = props => {
  return (
    <ContainerEl>
      <div className="container">
        <div className="row">
          <div className="offset-sm-1 column">{props.children}</div>
        </div>
      </div>
    </ContainerEl>
  );
};

export default Container;
