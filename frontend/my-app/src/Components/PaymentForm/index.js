import React from 'react'
import { useLocation } from 'react-router-dom';

 const PaymentForm = () => {
  
      const location = useLocation();
      const { price } = location.state;
    
      const handlePayment = () => {
       
      };
    
      return (
        <div>
          <h1>Payment</h1>
          <p>Total Amount: {price}</p>
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      );
    }

    

export default PaymentForm