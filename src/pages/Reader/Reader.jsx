// Reader.jsx
import React, { useState } from 'react';
import './Reader.css';
import TopBar from '../../components/TopBar/TopBar';

const Reader = ({ match }) => {
  const { chapter } = match.params; // نفترض أن رقم الفصل يجينا من URL

  const manga = {
    title: 'Jujutsu Kaisen',
    chapters: [
      { chapter: 1, images: ['https://i.ibb.co/gvVffhk/jujutsu.jpg', 'https://i.ibb.co/gvVffhk/jujutsu.jpg'] },
      { chapter: 2, images: ['https://i.ibb.co/gvVffhk/jujutsu.jpg', 'https://i.ibb.co/gvVffhk/jujutsu.jpg'] },
      { chapter: 3, images: ['https://i.ibb.co/gvVffhk/jujutsu.jpg', 'https://i.ibb.co/gvVffhk/jujutsu.jpg'] },
      // أضف المزيد من الصور هنا
    ],
  };

  const currentChapterIndex = parseInt(chapter, 10) - 1;
  const [currentPage, setCurrentPage] = useState(0);

  const currentChapter = manga.chapters[currentChapterIndex];
  const nextChapter = manga.chapters[currentChapterIndex + 1];
  const prevChapter = manga.chapters[currentChapterIndex - 1];

  const goToNextPage = () => {
    if (currentPage < currentChapter.images.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="reader-page">
      <TopBar title={manga.title} />

      <div className="reader-content">
        <div className="reader-header">
          <span className="chapter-title">Chapter {currentChapter.chapter}</span>
          <span className="page-number">Page {currentPage + 1} / {currentChapter.images.length}</span>
        </div>

        <div className="reader-chapter">
          <img
            src={currentChapter.images[currentPage]}
            alt={`Chapter ${currentChapter.chapter} - Page ${currentPage + 1}`}
            className="reader-image"
          />
        </div>

        <div className="reader-controls">
          <button onClick={goToPreviousPage} className="reader-btn">Previous</button>
          <button onClick={goToNextPage} className="reader-btn">Next</button>
        </div>
      </div>

      <div className="chapter-navigation">
        {prevChapter && (
          <button className="nav-btn">Previous Chapter</button>
        )}
        {nextChapter && (
          <button className="nav-btn">Next Chapter</button>
        )}
      </div>
    </div>
  );
};

export default Reader;
