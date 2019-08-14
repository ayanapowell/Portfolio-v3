import React from 'react';
import styled from '@emotion/styled';
import vars from '../../utils/emotionVars';
import Container from '../Container';

const Image2upEl = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image2up__image-wrapper {
    max-height: 380px;
  }
  .col-left {
    padding-left: 0;
    max-height: 700px;
    img {
      width: 100vw;
      position: relative;
      max-width: 100vw;
      left: calc(-1 * (100vw - 100%));
    }
  }
  .col-right {
    padding-right: 0;
    p {
      padding-top: 80px;
    }
  }
`;
const Image2up = props => {
  return (
    <>
      <Image2upEl>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-left">
              <img src={props.verticalImage} alt="" />
            </div>
            <div className="offset-sm-1 col-sm-6 col-right">
              <div className="image2up__image-wrapper">
                <img src={props.horizontalImage} alt="" />
              </div>
              <p>
                Dolorem nulla aliquam sem dis dolores deleniti tempus? Itaque
                qui. Nisl tellus mollitia laboriosam. Explicabo, dicta praesent
                luctus, ante, ipsam feugiat! In! Primis maxime dignissim
                suscipit? Vel torquent volutpat voluptas, ducimus placerat
                hendrerit vitae minus molestie! Scelerisque.
              </p>
            </div>
          </div>
        </div>
      </Image2upEl>
    </>
  );
};

export default Image2up;
