import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import "./Reader.css";

const Reader = () => {
  const { id } = useParams();
  const manga = data.find((m) => m.id.toString() === id);
  const scrollRef = useRef(null);

  const [scrollMode, setScrollMode] = useState("vertical");
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem(`lastPage-${id}`)) || 0
  );

  useEffect(() => {
    localStorage.setItem(`lastPage-${id}`, currentPage);
  }, [currentPage, id]);

  const nextPage = () => {
    if (currentPage < manga.pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
      scrollToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      scrollToPage(currentPage - 1);
    }
  };

  const scrollToPage = (index) => {
    const target = scrollRef.current?.children[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (!manga) return <div className="Reader">Manga not found</div>;

  return (
    <div className="Reader">
      <div className="Reader-header">
        <h2>{manga.title}</h2>
        <div className="Reader-controls">
          <button onClick={() => setScrollMode(scrollMode === "vertical" ? "horizontal" : "vertical")}>
            {scrollMode === "vertical" ? "📏 أفقي" : "📏 عمودي"}
          </button>
          <button onClick={prevPage}>⬅️</button>
          <span>{currentPage + 1} / {manga.pages.length}</span>
          <button onClick={nextPage}>➡️</button>
        </div>
      </div>

      <div className={`Reader-pages ${scrollMode}`} ref={scrollRef}>
        {manga.pages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Page ${idx + 1}`}
            loading="lazy"
            className={`Reader-img ${idx === currentPage ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reader;
