import React from 'react';

const OutlineButton = ({children}) => {
    return (
        <button className="border border-[#84a98c] text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-white transition duration-300 ease-in-out">{children}</button>
    );
};

export default OutlineButton;