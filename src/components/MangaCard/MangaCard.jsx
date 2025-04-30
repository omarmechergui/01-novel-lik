// MangaCard.jsx
import React from 'react';
import './MangaCard.css';

const MangaCard = ({ manga }) => {
  return (
    <div className="manga-card">
      <img src={manga.image} alt={manga.title} className="manga-image" />
      <div className="manga-info">
        <h3 className="manga-title">{manga.title}</h3>
        <p className="manga-genre">{manga.genre}</p>
        <p className="manga-last-update">Last Updated: {manga.lastUpdate}</p>
      </div>
    </div>
  );
};

export default MangaCard;
