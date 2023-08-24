// LanguageSelector.js (Updated)
import React from 'react';
import { useLanguage } from './LanguageContext';
import i18n from '../i18n'; // Import the i18n instance

function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); // Change the language in i18n
  };
  

  return (
    <div>
      <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        {/* Add more language options */}
      </select>
    </div>
  );
}

export default LanguageSelector;
