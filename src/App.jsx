// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import SearchResults from './pages/SearchResults/SearchResults';
import MangaDetails from './pages/MangaDetails/MangaDetails';
import Reader from './pages/Reader/Reader';
import Downloads from './pages/Downloads/Downloads';
import Settings from './pages/Settings/Settings';
import './App.css';
import MangaList from './pages/MangaList/MangaList';
import Favourite from './pages/Favourite/Favourite';
import History from './pages/History/History';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mangalist" element={<MangaList />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/history" element={<History />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/manga/:id" element={<MangaDetails />} />
            <Route path="/reader/:id" element={<Reader />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
