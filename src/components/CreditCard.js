import React from 'react';

const CreditCard = (props) => {
  let lastFourDigits = props.number.slice(-4);
  let year = props.expirationYear.toString().slice(2);
  let month = props.expirationMonth;

  if (month < 10) {
    month = `0` + month;
  }
  return (
    <div
      style={{ background: props.bgColor, color: props.color }}
      className="creditCard"
    >
      <p>{props.type}</p>
      <p>**** **** **** {lastFourDigits}</p>
      <p>
        {month} / {year}
      </p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
