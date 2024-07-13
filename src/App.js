import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/Profile';
import Tickets from './pages/Tickets';
import EditUser from './pages/EditUser';
import Navbar from './components/Navbar';
import './App.css';  // Assuming you have some global CSS

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default App;