import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = ({ open, onLogout }) => {
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <ul>
        <li>
          <Link to="/tickets">View Tickets</Link>
        </li>
        <li>
          <Link to="/edit-user">Edit User Details</Link>
        </li>
      </ul>
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;