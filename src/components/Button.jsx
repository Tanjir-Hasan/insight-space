import React, { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const Button = ({ heading }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <button
            className={`${theme === 'light' ? 'text-white bg-gradient-to-l from-[#006466] to-[#212f45] hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45]' :
                theme === 'dark' ? 'text-white bg-gradient-to-r from-[#48cae4] to-[#051923] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4]' :
                    theme === 'night' ? 'text-white bg-gradient-to-r from-[#0d1b2a] to-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced]' : ''} text-center text-xl font-[Poppins] w-full transition-all duration-1000 py-2 rounded-lg`}
        >
            {heading}</button>
    );
};

export default Button;