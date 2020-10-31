import React from 'react';
import styled from '@emotion/styled';

const ImageRowEl = styled.div`
  .container-fluid {
    padding: 0 !important;
  }
  .image-row {
    display: flex;
  }
  .image-row__col {
    width: calc(100% / 3);
    height: 500px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageRow = () => {
  return (
    <>
      <ImageRowEl>
        <div className="container-fluid">
          <div className="image-row">
            <div className="image-row__col">
              <img
                src="https://images.unsplash.com/photo-1566677053057-117836a82257?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt=""
              />
            </div>
            <div className="image-row__col">
              <img
                src="https://images.unsplash.com/photo-1565971416495-c2c643084f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                alt=""
              />
            </div>
            <div className="image-row__col">
              <img
                src="https://images.unsplash.com/photo-1564099975870-431cdfa0f7bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </ImageRowEl>
    </>
  );
};

export default ImageRow;
