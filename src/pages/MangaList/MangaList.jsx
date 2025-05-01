import React, { useState, useEffect } from "react";
import "./MangaList.css";
import { data } from "../../data/data";
import MangaCard from "../../components/MangaCard/MangaCard";
import { TfiArrowLeft } from "react-icons/tfi";
import { Link } from "react-router-dom";

const MangaList = () => {
  // الحالة الخاصة بالبحث
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredManga, setFilteredManga] = useState(data);

  // فلترة البيانات حسب البحث
  useEffect(() => {
    setFilteredManga(
      data.filter((manga) =>
        manga.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  // حالة التصفية حسب النوع
  const [selectedGenre, setSelectedGenre] = useState("");

  // فلترة البيانات حسب النوع
  useEffect(() => {
    if (selectedGenre) {
      setFilteredManga(
        data.filter(
          (manga) => manga.genre.toLowerCase() === selectedGenre.toLowerCase()
        )
      );
    } else {
      setFilteredManga(data);
    }
  }, [selectedGenre]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredManga.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="MangaList">
      <div className="MangaList-header">
        <Link to="/" className="MangaList-back-icon">
          <TfiArrowLeft />
        </Link>
        <input
          type="text"
          placeholder="Search for a manga..."
          className="MangaList-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="MangaList-filter">
        <select
          onChange={(e) => setSelectedGenre(e.target.value)}
          value={selectedGenre}
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Adventure">Adventure</option>
          {/* أضف أنواع أخرى حسب المانجات */}
        </select>
      </div>

      <div className="MangaList-grid">
        {currentItems.map((manga) => (
          <MangaCard key={manga.id} manga={manga} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredManga.length / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MangaList;
