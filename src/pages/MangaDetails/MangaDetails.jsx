import React, { useState } from 'react';
import './MangaDetails.css'; // تأكد من أن هذا المسار صحيح
import { useParams } from 'react-router-dom';
import { data } from '../../data/data'; // تأكد من أن الاستيراد هو `data`

const MangaDetails = () => {
  const { id } = useParams();  // الحصول على معرّف المانغا من الرابط
  const manga = data.find((m) => m.id === parseInt(id));  // البحث عن المانغا بناءً على المعرف

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  if (!manga) {
    return <div className="MangaDetails-loading">Loading...</div>;
  }

  return (
    <div className="MangaDetails">
      <img src={manga.image} alt={manga.title} className="MangaDetails-image" />
      <h3 className="MangaDetails-title">{manga.title}</h3>
      <p className="MangaDetails-author">Author: {manga.author}</p>
      <p className="MangaDetails-release-date">Release Date: {manga.releaseDate}</p>
      <p className="MangaDetails-publisher">Publisher: {manga.publisher}</p>
      <button onClick={toggleDescription} className="MangaDetails-btn">
        {isDescriptionVisible ? 'Hide Description' : 'Show Description'}
      </button>
      {isDescriptionVisible && <p className="MangaDetails-description">{manga.about}</p>} {/* تم التعديل لاستخدام `about` */}
      <p className="MangaDetails-last-update">Last Updated: {manga.releaseDate}</p>
    </div>
  );
};

export default MangaDetails;
