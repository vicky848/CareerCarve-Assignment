import React, { useState, useEffect } from 'react';
import Header from '../Header';
import axios from 'axios';
import './index.css';

const BookingForm = ({ cart, setCart }) => {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [duration, setDuration] = useState(30);
  const [time, setTime] = useState('');
  const [price, setPrice] = useState(2000);

  const handleAddToCart = () => {
    const item = {
      mentorId: selectedMentor,
      duration,
      time,
      price: duration === 30 ? 2000 : duration === 45 ? 3000 : 4000,
    };
    setCart(prevCart => [...prevCart, item]);
  };

  useEffect(() => {
    axios.get('/mentors/')
      .then(response => setMentors(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDurationChange = (e) => {
    const newDuration = parseInt(e.target.value, 10);
    setDuration(newDuration);
    if (newDuration === 30) setPrice(2000);
    if (newDuration === 45) setPrice(3000);
    if (newDuration === 60) setPrice(4000);
  };

  return (
    <div className='booking-container'>
      <Header />
      <h1>Book a Session</h1>
      <select onChange={(e) => setSelectedMentor(e.target.value)}>
        {mentors.map(mentor => (
          <option key={mentor.id} value={mentor.id}>{mentor.name}</option>
        ))}
      </select>
      <input type="datetime-local" onChange={(e) => setTime(e.target.value)} />
      <select onChange={handleDurationChange}>
        <option value={30}>30 minutes</option>
        <option value={45}>45 minutes</option>
        <option value={60}>60 minutes</option>
      </select>
      <p>Price: {price}</p>
      <button onClick={handleAddToCart} className='button'>Booking</button>
    </div>
  );
}

export default BookingForm;
