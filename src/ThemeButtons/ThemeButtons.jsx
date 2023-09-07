import React, { useContext, useState } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import { BsFillCircleFill } from 'react-icons/bs';

const ThemeButtons = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleLightButtonClick = () => {
        toggleTheme('light');
    };

    const handleDarkButtonClick = () => {
        toggleTheme('dark');
    };

    const handleBlueButtonClick = () => {
        toggleTheme('night');
    };

    return (
        <div className='mt-3'>

            <button onClick={handleLightButtonClick} disabled={theme === 'light'} className={theme === 'light' ? 'disabled-button' : ''}>
                {theme === 'light' ? <BsFillCircleFill className='text-[#48cae4]' /> : <BsFillCircleFill className='text-white' />}
            </button>

            <button onClick={handleDarkButtonClick} disabled={theme === 'dark'} className={`px-2 ${theme === 'dark' ? 'disabled-button' : ''}`}>
                <BsFillCircleFill className={theme === 'dark' ? 'text-[#48cae4] rounded-full' : 'text-[#011627]'} />
            </button> 

            <button onClick={handleBlueButtonClick} disabled={theme === 'night'} className={theme === 'night' ? 'disabled-button' : ''}>
                <BsFillCircleFill className={theme === 'night' ? 'text-[#48cae4] rounded-full' : 'text-[#adb5bd]'} />
            </button>

        </div>
    );
};

export default ThemeButtons;
