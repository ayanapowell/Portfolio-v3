import React from 'react';
import styled from '@emotion/styled';

const DescriptionEl = styled.div`
  padding: 80px 0;
  p {
    font-size: 22px;
  }

  .project__link {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    &::before {
      content: '';
      height: 90px;
      width: 3px;
      background: #706b6b;
    }
    a {
      display: block;
      padding-left: 54px;
    }
  }
`;
const DescriptionCopy = props => {
  return (
    <>
      <DescriptionEl className="row">
        <p
          className="col-sm-8"
          dangerouslySetInnerHTML={{
            __html: props.body,
          }}
        />
        <div className="offset-sm-1 col-sm-3 project__link">
          <a href={props.projectUrl} target="_blank">
            Visit site
          </a>
        </div>
      </DescriptionEl>
    </>
  );
};

export default DescriptionCopy;
