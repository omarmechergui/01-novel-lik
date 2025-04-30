// Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { FaHome, FaSearch, FaDownload, FaCog, FaBookOpen } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">TachiWeb</h2>
      <nav className="nav-links">
        <NavLink to="/" className="link"><FaHome /> <span>Home</span></NavLink>
        <NavLink to="/browse" className="link"><FaSearch /> <span>Browse</span></NavLink>
        <NavLink to="/downloads" className="link"><FaDownload /> <span>Downloads</span></NavLink>
        <NavLink to="/reader" className="link"><FaBookOpen /> <span>Reader</span></NavLink>
        <NavLink to="/settings" className="link"><FaCog /> <span>Settings</span></NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
