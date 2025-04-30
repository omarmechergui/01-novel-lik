// TopBar.jsx
import React from 'react';
import './TopBar.css';
import { FaSearch, FaEllipsisV } from 'react-icons/fa';

const TopBar = ({ title = "Home" }) => {
  return (
    <div className="topbar">
      <h1 className="page-title">{title}</h1>
      <div className="topbar-actions">
        <FaSearch className="icon" />
        <FaEllipsisV className="icon" />
      </div>
    </div>
  );
};

export default TopBar;
