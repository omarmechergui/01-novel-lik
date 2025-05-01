import React, { useState } from "react";
import "./History.css";
import { data } from "../../data/data"; // بيانات المانجات
import { Link } from "react-router-dom";

const History = () => {
  // قائمة المانجات المقروءة
  const [history, setHistory] = useState(data.slice(0, 5)); // هنا نفترض أن أول 5 مانجات هي التي تم قراءتها

  // إزالة مانجا من التاريخ
  const removeFromHistory = (id) => {
    setHistory(history.filter((manga) => manga.id !== id));
  };

  return (
    <div className="History">
      <div className="History-header">
        <h2>Your Manga History</h2>
      </div>

      <div className="History-list">
        {history.map((manga) => (
          <div key={manga.id} className="History-item">
            <Link to={`/manga/${manga.id}`} className="History-item-link">
              <img
                src={manga.image}
                alt={manga.title}
                className="History-item-img"
              />
              <div className="History-item-details">
                <h3 className="History-item-title">{manga.title}</h3>
              </div>
            </Link>
            <button
              className="History-item-remove"
              onClick={() => removeFromHistory(manga.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
