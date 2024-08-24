import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart'); // Navigate to the Cart page
  };

  return (
    <div>
      <ul className='order-list'>
        <li className='career-carve'>CareerCarve</li>
        <li className='order-item-container'>
          <li className='order-item'>Home</li>
          <li className='order-item'>About</li>
          <li className='order-item'>Contact us</li>
          <li className='order-item'>Event</li>
          <li className='order-item'>Become a Mentor</li>
        </li>
        <li className='cart-container'>
          <FaShoppingCart
            className='cart-icon'
            onClick={handleClick}
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
