import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(''); // Clear previous errors

    try {
      await axios.post('http://localhost:5000/auth/register', { username, email, password });
      window.location.href = '/login'; // Redirect to login page
    } catch (error) {
      setError(error.response ? error.response.data.msg : 'Registration failed'); // Set error message
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
    </div>
  );
};

export default Register;