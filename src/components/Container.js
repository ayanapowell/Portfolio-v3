import React from 'react';

const Container = props => {
  return (
    <div className={`container container--${props.modifier}`}>
      <div className="row">
        <div className="offset-sm-1">{props.children}</div>
      </div>
    </div>
  );
};

export default Container;
