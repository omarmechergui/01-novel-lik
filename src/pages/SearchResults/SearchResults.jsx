// src/pages/SearchResults/SearchResults.jsx
import React, { useState } from 'react';
import MangaCard from '../../components/MangaCard/MangaCard';
import mangaData from '../../data/data';  // استيراد البيانات من data.js

const SearchResults = () => {
  const [query, setQuery] = useState('');
  const filteredMangas = mangaData.filter((manga) =>
    manga.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results">
      <input
        type="text"
        placeholder="Search for Manga"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
      />
      <div className="manga-cards-container">
        {filteredMangas.length > 0 ? (
          filteredMangas.map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
