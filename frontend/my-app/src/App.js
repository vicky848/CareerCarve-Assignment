import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './Components/BookingForm';
import MentorList from './Components/MentorList';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import PaymentForm from './Components/PaymentForm';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<BookingForm cart={cart} setCart={setCart} />} />
        <Route path="/mentors" element={<MentorList />} />
       
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} /> }/>
        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
