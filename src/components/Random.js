import React from 'react';

const Random = (props) => {
  let randomRange = Math.round(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div className="random">
      <p>
        Random value between {props.min} and {props.max} is = {randomRange}
      </p>
    </div>
  );
};

export default Random;
