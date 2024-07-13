import React, { useState } from 'react';
import TicketList from '../components/ViewTickets';
import '../styles/Tickets.css';

const Tickets = () => {
  const [token] = useState(localStorage.getItem('token'));

  return (
    <div className="tickets-page">
      <h2>Your Tickets</h2>
      <TicketList token={token} />
    </div>
  );
};

export default Tickets;