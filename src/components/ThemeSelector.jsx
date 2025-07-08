import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeSelector.css';

const ThemeSelector = () => {
  const { theme, changeTheme, themes, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
    setIsOpen(false);
  };

  const getThemeIcon = (themeKey) => {
    switch (themeKey) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'system':
        return '💻';
      default:
        return '💻';
    }
  };

  return (
    <div className={`theme-selector ${isOpen ? 'open' : ''}`}>
      <button 
        className="theme-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar tema"
        title="Alterar tema"
      >
        <span className="theme-icon">
          {getThemeIcon(theme)}
        </span>
        <span className="theme-text">
          {themes[theme]}
        </span>
        <span className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          {Object.entries(themes).map(([key, label]) => (
            <button
              key={key}
              className={`theme-option ${theme === key ? 'active' : ''}`}
              onClick={() => handleThemeChange(key)}
            >
              <span className="theme-icon">
                {getThemeIcon(key)}
              </span>
              <span className="theme-label">
                {label}
              </span>
              {theme === key && (
                <span className="check-mark">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
