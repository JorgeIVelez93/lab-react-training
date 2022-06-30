import React from 'react';

const Rating = (props) => {
  let stars = Math.round(props.children);
  let whiteStar = 5 - stars;
  let black = '★';
  let white = '☆';
  return (
    <div>
      <p>
        {black.repeat(stars)}
        {white.repeat(whiteStar)}
      </p>
    </div>
  );
};

export default Rating;
