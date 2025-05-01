import React, { useState, useEffect } from "react";
import MangaCard from "../../components/MangaCard/MangaCard";
import { data } from "../../data/data";
import "./Browse.css";

const Browse = () => {
  const [mangas, setMangas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("All");

  useEffect(() => {
    setMangas(data);
  }, []);

  const filteredMangas = mangas.filter((manga) => {
    const matchesTitle = manga.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAuthor = selectedAuthor === "All" || manga.author === selectedAuthor;
    return matchesTitle && matchesAuthor;
  });

  const uniqueAuthors = ["All", ...new Set(data.map((m) => m.author))];

  return (
    <div className="browse-page">
      <h1 className="page-title">Browse Mangas</h1>

      <div className="browse-controls">
        <input
          type="text"
          placeholder="Search manga..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={selectedAuthor}
          onChange={(e) => setSelectedAuthor(e.target.value)}
        >
          {uniqueAuthors.map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>

      <div className="manga-list">
        {filteredMangas.length > 0 ? (
          filteredMangas.map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))
        ) : (
          <p className="no-results">No mangas found</p>
        )}
      </div>
    </div>
  );
};

export default Browse;
