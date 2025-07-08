import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Mudar para tema ${isDark ? 'claro' : 'escuro'}`}
      title={`Mudar para tema ${isDark ? 'claro' : 'escuro'}`}
    >
      <span className={`theme-icon ${isDark ? 'dark' : 'light'}`}>
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeToggle;
