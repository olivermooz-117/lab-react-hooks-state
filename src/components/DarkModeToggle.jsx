import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button 
      data-testid="dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;