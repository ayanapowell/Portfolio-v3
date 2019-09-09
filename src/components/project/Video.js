import React from 'react';
import styled from '@emotion/styled';

const VideoEl = styled.div`
  .video__wrapper {
    height: 500px;
    width: 100%;
    margin-bottom: 80px;
  }
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container-fluid {
    padding-right: 0;
  }
`;

const Video = props => {
  return (
    <>
      <VideoEl>
        <div className="container-fluid">
          <div className="row">
            <div className="video__wrapper offset-sm-2">
              <video autoPlay muted loop playsInline className="video">
                <source
                  src={props.video.file.url}
                  type={props.video.file.contentType}
                />
              </video>
            </div>
          </div>
        </div>
      </VideoEl>
    </>
  );
};

export default Video;
