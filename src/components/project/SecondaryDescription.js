import React from 'react';
import styled from '@emotion/styled';
import vars from '../../utils/emotionVars';

const DescriptionEl = styled.div`
  padding: 80px 0;
  h2 {
    font-family: ${vars.ff_primary};
    font-weight: 500;
    font-size: 52px;
    padding-bottom: 36px;
  }
  p {
    font-size: 22px;
  }
  .horizontal-line {
    height: 3px;
    width: 110px;
    background: #3e3939;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 100px;
  }
`;
const SecondaryDescription = props => {
  return (
    <>
      <DescriptionEl className="row">
        <h2 className="desciption__title col-sm-12">{props.title}</h2>
        <span className="horizontal-line" />
        <p
          className="col-sm-8"
          dangerouslySetInnerHTML={{
            __html: props.body,
          }}
        />
      </DescriptionEl>
    </>
  );
};

export default SecondaryDescription;
