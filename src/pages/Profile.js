import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookTrain from '../components/TrainBooking';
import Sidebar from '../components/Sidebar';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="user-profile">
      <button className="toggle-btn" onClick={toggleSidebar}>
        {sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
      <Sidebar open={sidebarOpen} onLogout={handleLogout} />
      <div className={`content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <BookTrain />
      </div>
    </div>
  );
};

export default UserProfile;