import React from 'react';
import { useTranslation } from "react-i18next";
import { useTheme } from '../context/ThemeContext';
import './Header.css';


const Header = () => {
  
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
  
    i18n.changeLanguage(lng);

  }
  
  return (
    <header className="header">
      
      <h1>Shopping List App</h1>
      <div className='header-buttons'>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <button onClick={() => changeLanguage("en")} className='button'>English</button>
      <button onClick={() => changeLanguage("cs")}>Čeština</button>
        <button onClick={() => changeLanguage("ru")}>Русский</button>
      </div>
    </header>
  );
};

export default Header;
