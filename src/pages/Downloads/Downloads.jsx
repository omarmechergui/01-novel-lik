// Downloads.jsx
import React from 'react';
import './Downloads.css';
import TopBar from '../../components/TopBar/TopBar';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';

const downloads = [
  {
    title: 'One Piece - Chapter 1050',
    status: 'downloading',
  },
  {
    title: 'Attack on Titan - Chapter 139',
    status: 'completed',
  },
  {
    title: 'Chainsaw Man - Chapter 50',
    status: 'failed',
  },
];

const Downloads = () => {
  return (
    <div className="downloads-page">
      <TopBar title="Downloads" />

      <div className="downloads-content">
        {downloads.map((item, index) => (
          <div key={index} className={`download-item ${item.status}`}>
            <span className="chapter-title">{item.title}</span>
            <span className="download-status">
              {item.status === 'completed' && <FaCheckCircle />}
              {item.status === 'failed' && <FaTimesCircle />}
              {item.status === 'downloading' && <FaSpinner className="spin" />}
              <span className="status-text">{item.status}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
