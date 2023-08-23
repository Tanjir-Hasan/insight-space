// CommonLayout.js
import React from 'react';
import LanguageSelector from './LanguageSelector'; // Adjust the import path

function CommonLayout({ children }) {
    return (
        <div>
            <LanguageSelector /> {/* Add the language change button */}
            {children} {/* Render the routes */}
        </div>
    );
}

export default CommonLayout;
