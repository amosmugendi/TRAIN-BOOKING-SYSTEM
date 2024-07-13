import React, { useState } from 'react';
import axios from 'axios';

const TrainBooking = () => {
  const [scheduleId, setScheduleId] = useState('');
  const [seatNumber, setSeatNumber] = useState('');

  const bookTrain = async () => {
    // Replace with your API endpoint
    const token = localStorage.getItem('token'); 
    await axios.post('http://127.0.0.1:5000/passenger/book', { schedule_id: scheduleId, seat_number: seatNumber }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Booking successful');
  };

  return (
    <div>
      <h2>Book Train</h2>
      <input type="text" placeholder="Schedule ID" value={scheduleId} onChange={(e) => setScheduleId(e.target.value)} />
      <input type="text" placeholder="Seat Number" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
      <button onClick={bookTrain}>Book Train</button>
    </div>
  );
};

export default TrainBooking;