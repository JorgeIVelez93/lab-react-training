import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const backgroundColor = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };
  return (
    <div style={backgroundColor} className="color">
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
};

export default BoxColor;
