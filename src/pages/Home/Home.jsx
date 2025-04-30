// Home.jsx
import React from 'react';
import './Home.css';
import TopBar from '../../components/TopBar/TopBar';
import MangaCard from '../../components/MangaCard/MangaCard';

const library = [
  {
    title: 'Jujutsu Kaisen',
    image: 'https://i.ibb.co/gvVffhk/jujutsu.jpg',
    status: 'Reading',
  },
  {
    title: 'Attack on Titan',
    image: 'https://i.ibb.co/SKjThTt/aot.jpg',
    status: 'Completed',
  },
  {
    title: 'Naruto',
    image: 'https://i.ibb.co/kGRDfJh/naruto.jpg',
    status: 'Reading',
  },
  {
    title: 'Chainsaw Man',
    image: 'https://i.ibb.co/LNwRJTP/chainsaw.jpg',
    status: 'Completed',
  },
];

const Home = () => {
  const reading = library.filter(m => m.status === 'Reading');
  const completed = library.filter(m => m.status === 'Completed');

  return (
    <div className="home-page">
      <TopBar title="Library" />

      <div className="home-content">
        {reading.length > 0 && (
          <>
            <h2 className="section-title">Reading</h2>
            <div className="manga-grid">
              {reading.map((m, i) => (
                <MangaCard key={i} {...m} />
              ))}
            </div>
          </>
        )}

        {completed.length > 0 && (
          <>
            <h2 className="section-title">Completed</h2>
            <div className="manga-grid">
              {completed.map((m, i) => (
                <MangaCard key={i} {...m} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
