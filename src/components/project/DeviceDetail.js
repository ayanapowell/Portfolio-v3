import React from 'react';
import styled from '@emotion/styled';

const DeviceDetailEl = styled.div`
  .col-sm-11 {
    min-height: 500px;
    width: 100%;
    padding-left: 0;
  }
  img {
    width: 100%;
  }
  .divider {
    width: 60%;
    margin: 80px auto;
    border: 1px solid #94958b;
  }
`;

const DeviceDetail = props => {
  console.log(props);
  return (
    <>
      <DeviceDetailEl className="">
        <div className="col-sm-11">
          <img src={props.image} alt="" />
          <div className="divider" />
        </div>
      </DeviceDetailEl>
    </>
  );
};

export default DeviceDetail;
