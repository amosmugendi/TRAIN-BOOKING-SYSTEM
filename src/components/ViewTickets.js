import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ViewTickets.css';

const ViewTickets = ({ token }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/passenger/tickets', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTickets(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [token]);

  if (loading) {
    return <p>Loading tickets...</p>;
  }

  if (error) {
    return <p>Error fetching tickets: {error}</p>;
  }

  return (
    <div className="ticket-list">
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <div key={ticket.id} className="ticket-item">
            <h3>Ticket ID: {ticket.id}</h3>
            <p>Train: {ticket.train.name}</p>
            <p>Source: {ticket.train.source}</p>
            <p>Destination: {ticket.train.destination}</p>
            <p>Seat Number: {ticket.seat_number}</p>
            <p>Departure: {new Date(ticket.departure_time).toLocaleString()}</p>
            <p>Arrival: {new Date(ticket.arrival_time).toLocaleString()}</p>
            <p>Booking Date: {new Date(ticket.booking_date).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No tickets found.</p>
      )}
    </div>
  );
};

export default ViewTickets;