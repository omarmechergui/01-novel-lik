// Settings.jsx
import React, { useState } from 'react';
import './Settings.css';
import TopBar from '../../components/TopBar/TopBar';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');

  const handleToggleDarkMode = () => setDarkMode(!darkMode);
  const handleChangeLanguage = (e) => setLanguage(e.target.value);

  return (
    <div className={`settings-page ${darkMode ? 'dark' : 'light'}`}>
      <TopBar title="Settings" />

      <div className="settings-content">
        <div className="setting-item">
          <label htmlFor="dark-mode" className="setting-label">Dark Mode</label>
          <input
            id="dark-mode"
            type="checkbox"
            checked={darkMode}
            onChange={handleToggleDarkMode}
            className="setting-checkbox"
          />
        </div>

        <div className="setting-item">
          <label htmlFor="language" className="setting-label">Language</label>
          <select
            id="language"
            value={language}
            onChange={handleChangeLanguage}
            className="setting-select"
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="jp">Japanese</option>
          </select>
        </div>

        <div className="setting-item">
          <button className="reset-btn">Reset Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
