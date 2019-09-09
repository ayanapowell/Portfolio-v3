import React from 'react';
import styled from '@emotion/styled';

const DeviceDetailEl = styled.div`
  .col-sm-11 {
    height: 500px;
    width: 100%;
    border: 1px solid blue;
  }
`;

const DeviceDetail = props => {
  return (
    <>
      <DeviceDetailEl className="">
        <div className="col-sm-11">{props.image}</div>
      </DeviceDetailEl>
    </>
  );
};

export default DeviceDetail;
