import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/UserDetails.css';

const UserDetails = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://127.0.0.1:5000/passenger/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  const updateDetails = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.put('http://127.0.0.1:5000/passenger/user', { username, email }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Details updated');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p>Error fetching user details: {error}</p>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={updateDetails}>Update Details</button>
    </div>
  );
};

export default UserDetails;