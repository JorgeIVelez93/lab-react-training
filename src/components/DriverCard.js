import React from 'react';
import Rating from './Rating';
const DriverCard = (props) => {
  return (
    <div className="driver">
      <img src={props.img} alt=""></img>
      <section>
        <p>{props.name}</p>
        <p>
          <Rating>{props.rating}</Rating>
        </p>
        <p>
          {props.car.model}- {props.car.licensePlate}
        </p>
      </section>
    </div>
  );
};

export default DriverCard;
