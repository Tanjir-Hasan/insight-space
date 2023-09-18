import React, { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import { ColorRing } from 'react-loader-spinner';

const ButtonWithLoading = ({ loading, children, icon, width }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <button
            type="submit"
            className={`${theme === 'light' ? 'text-white bg-gradient-to-l from-[#006466] to-[#212f45] hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45]' :
                theme === 'dark' ? 'text-white bg-gradient-to-r from-[#48cae4] to-[#051923] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4]' :
                    theme === 'night' ? 'text-white bg-gradient-to-r from-[#0d1b2a] to-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced]' : ''} text-white py-2 rounded duration-700 flex justify-center items-center gap-3 text-xl font-[Poppins]  md:mx-0 mx-auto 
            ${loading ? "bg-gray-500 hover:bg-gray-500" : ""} ${width ? width : "md:w-1/3 w-11/12"}`}
            disabled={loading}
        >
            {children} {loading ? <>
                <ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </> : <>{icon}</>}
        </button>
    );
};

export default ButtonWithLoading;