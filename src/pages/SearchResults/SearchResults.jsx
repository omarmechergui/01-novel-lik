// SearchResults.jsx
import React, { useState, useEffect } from 'react';
import './SearchResults.css';
import MangaCard from '../../components/MangaCard/MangaCard';
import TopBar from '../../components/TopBar/TopBar';
import mangaData from '../../data/data';  // استيراد البيانات من data.js

const SearchResults = ({ searchQuery }) => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    // هنا نفلتر البيانات بناءً على الـ searchQuery
    const filteredMangas = mangaData.filter((manga) =>
      manga.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMangas(filteredMangas);
  }, [searchQuery]);

  return (
    <div className="search-results-page">
      <TopBar title="Search Results" />

      <div className="search-results-content">
        {mangas.length > 0 ? (
          <div className="manga-list">
            {mangas.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        ) : (
          <p className="no-results">No results found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
