import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./MangaCard.css";

const MangaCard = ({ manga }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  if (!manga || !manga.image) {
    return <div>Loading...</div>;
  }

  return (
    <Link to={`/manga/${manga.id}`}>
      <div
        ref={cardRef}
        className={`MangaCard ${visible ? "visible" : ""}`}
        style={{ width: "100%" }}
      >
        <img src={manga.image} className="MangaCard-img" alt={manga.title} />
        <div className="MangaCard-body">
          <h5 className="MangaCard-title">{manga.title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default MangaCard;
