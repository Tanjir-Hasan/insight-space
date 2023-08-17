import React from 'react';

const Button = ({ heading }) => {
    return (
        <button className='text-center text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 py-2 rounded-lg'>{heading}</button>
    );
};

export default Button;