import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    /*
    const [theme, setTheme] = useState(getInitialTheme);

    function getInitialTheme() {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return localStorage.getItem('theme') || (userPrefersDark ? 'dark' : 'light');
    }
    */ 

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
