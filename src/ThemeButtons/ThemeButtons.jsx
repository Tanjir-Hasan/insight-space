import React, { useContext, useState } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import { BsFillCircleFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ThemeButtons = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleLightButtonClick = () => {
        toggleTheme('light');
        toast.success('Light Theme Activated', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const handleDarkButtonClick = () => {
        toggleTheme('dark');
        toast.success('Dark Theme Activated', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        
    };

    const handleBlueButtonClick = () => {
        toggleTheme('night');
        toast.success('Night Theme Activated', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };

    return (
        <div className='mt-3'>

            <ToastContainer />

            <button onClick={handleLightButtonClick} disabled={theme === 'light'} className={theme === 'light' ? 'disabled-button' : ''}>
                {theme === 'light' ? <BsFillCircleFill className='text-[#3c6e71]' /> : <BsFillCircleFill className='text-white' />}
            </button>

            <button onClick={handleDarkButtonClick} disabled={theme === 'dark'} className={`px-2 ${theme === 'dark' ? 'disabled-button' : ''}`}>
                <BsFillCircleFill className={theme === 'dark' ? 'text-[#48cae4] rounded-full' : theme === 'light' ? 'text-[#001219]' : 'text-[#507dbc]'} />
            </button>

            <button onClick={handleBlueButtonClick} disabled={theme === 'night'} className={theme === 'night' ? 'disabled-button' : ''}>
                <BsFillCircleFill className={theme === 'night' ? 'text-[#48cae4] rounded-full' : 'text-[#adb5bd]'} />
            </button>

        </div>
    );
};

export default ThemeButtons;
