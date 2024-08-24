import React from 'react';

const CheckOut = ({ cart }) => {
  return (
    <div>
      <h1>Check Out</h1>
     
      {cart.length === 0 && <p>No items in cart.</p>}
      {cart.map(item => (
        <div key={item.mentorId}>
          <p>Mentor ID: {item.mentorId}</p>
          <p>Duration: {item.duration} minutes</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckOut;
