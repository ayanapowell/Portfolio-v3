import React from 'react';
import styled from '@emotion/styled';
import vars from '../../utils/emotionVars';

const ProjectDetailEl = styled.div`
  margin-bottom: 80px;
  .col-right {
    padding: 0;
  }
  img {
    width: 100%;
  }
  ul {
    margin-top: 80px;
  }
  li {
    margin-bottom: 80px;
  }
  .divider {
    width: 60px;
    height: 3px;
    background: #706b6b;
    margin-bottom: 30px;
  }
  .col-right {
    max-height: 1200px;
    overflow-y: hidden;
  }
`;

const ProjectDetail = props => {
  return (
    <div>
      <ProjectDetailEl className="row">
        <div className="col-sm-7">
          <img src={props.detailImage} alt="" />
        </div>
        <div className="offset-sm-1 col-sm-3">
          <ul>
            {props.detailList.map(item => (
              <li>
                <div className="divider" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ProjectDetailEl>
    </div>
  );
};

export default ProjectDetail;
