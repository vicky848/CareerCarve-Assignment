import React, { useState } from 'react';
import './index.css'
const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeItem = (mentorId) => {
    setCart(prevCart => prevCart.filter(item => item.mentorId !== mentorId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className='cart-container'>
      <h1>Your Cart</h1>
      {cart.length === 0 && <p>No items in cart.</p>}
      {cart.map(item => (
        <div key={item.mentorId}>
          <p>Mentor ID: {item.mentorId}</p>
          <p>Duration: {item.duration} minutes</p>
          <p>Price: {item.price}</p>
          <button onClick={() => removeItem(item.mentorId)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && (
        <div>
          <p>Total Amount: {totalAmount}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
