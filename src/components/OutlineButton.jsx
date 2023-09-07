import React from 'react';

const OutlineButton = ({children, width}) => {
    return (
        <button className={`border border-[#3c6e71] text-[#3c6e71] rounded-lg px-4 py-2 hover:bg-[#3c6e71] hover:text-white transition duration-300 ease-in-out ${width ? width : ""}`}>{children}</button>
    );
};

export default OutlineButton;