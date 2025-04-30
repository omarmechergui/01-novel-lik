// Browse.jsx
import React, { useState } from 'react';
import './Browse.css';
import TopBar from '../../components/TopBar/TopBar';
import MangaCard from '../../components/MangaCard/MangaCard';

const dummyMangaList = [
  {
    title: 'Jujutsu Kaisen',
    image: 'https://i.ibb.co/gvVffhk/jujutsu.jpg',
    status: 'Reading',
  },
  {
    title: 'Attack on Titan',
    image: 'https://i.ibb.co/SKjThTt/aot.jpg',
    status: 'Completed',
  },
  {
    title: 'Chainsaw Man',
    image: 'https://i.ibb.co/LNwRJTP/chainsaw.jpg',
    status: 'Pending',
  },
  {
    title: 'Naruto',
    image: 'https://i.ibb.co/kGRDfJh/naruto.jpg',
    status: 'Completed',
  },
];

const Browse = () => {
  const [search, setSearch] = useState('');

  const filteredManga = dummyMangaList.filter(manga =>
    manga.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse-page">
      <TopBar title="Browse" />

      <div className="browse-content">
        <input
          type="text"
          placeholder="Search manga..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="manga-grid">
          {filteredManga.map((manga, idx) => (
            <MangaCard
              key={idx}
              title={manga.title}
              image={manga.image}
              status={manga.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
