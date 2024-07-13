import React, { useState } from 'react';
import BookingForm from '../components/TrainBooking';

const Book = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div>
      <h2>Book a Train</h2>
      <BookingForm token={token} />
    </div>
  );
};

export default Book;