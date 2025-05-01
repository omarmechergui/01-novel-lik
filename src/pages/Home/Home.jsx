import React from "react";
import MangaCard from "../../components/MangaCard/MangaCard";
import { data } from "../../data/data";
import "./Home.css";
import { Link } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-header">
        <Link to="#" className="Home-menu-icon">
          <TfiAlignJustify />
        </Link>
        <input
          type="text"
          className="Home-search"
          placeholder="Search manga..."
        />
      </div>

      <div className="Home-manga-cards-container">
        {data.map((manga) => (
          <MangaCard key={manga.id} manga={manga} />
        ))}
      </div>
    </div>
  );
};

export default Home;
