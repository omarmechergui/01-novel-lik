// MangaDetails.jsx
import React from 'react';
import './MangaDetails.css';
import TopBar from '../../components/TopBar/TopBar';

const MangaDetails = ({ match }) => {
  const { title } = match.params; // نفترض أن العنوان يجينا من URL

  // بيانات وهمية كمثال
  const manga = {
    title: 'Jujutsu Kaisen',
    image: 'https://i.ibb.co/gvVffhk/jujutsu.jpg',
    description: 'Cursed spirits are wreaking havoc across the world, and it’s up to high school student Yuji Itadori to fight them off!',
    chapters: 200,
    status: 'Ongoing',
    chaptersList: [
      { chapter: 1, title: 'The Beginning', downloadLink: '#' },
      { chapter: 2, title: 'New Allies', downloadLink: '#' },
      { chapter: 3, title: 'Shibuya Incident', downloadLink: '#' },
      // أضف المزيد من الفصول هنا
    ],
  };

  return (
    <div className="manga-details-page">
      <TopBar title={manga.title} />

      <div className="manga-details-content">
        <div className="manga-details-header">
          <img src={manga.image} alt={manga.title} className="manga-cover" />
          <div className="manga-info">
            <h2 className="manga-title">{manga.title}</h2>
            <span className="manga-status">{manga.status}</span>
            <p className="manga-description">{manga.description}</p>
            <span className="manga-chapters">{manga.chapters} Chapters</span>
          </div>
        </div>

        <div className="manga-actions">
          <button className="action-btn">Add to Library</button>
          <button className="action-btn">Read Manga</button>
        </div>

        <div className="manga-chapters-list">
          <h3>Available Chapters</h3>
          <ul>
            {manga.chaptersList.map((chapter, idx) => (
              <li key={idx} className="chapter-item">
                <span className="chapter-title">
                  Chapter {chapter.chapter}: {chapter.title}
                </span>
                <a href={chapter.downloadLink} className="download-link" target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MangaDetails;
