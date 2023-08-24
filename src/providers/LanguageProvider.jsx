import React, { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Initialize with the default language

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language: language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
