import React from 'react';

const Button = ({ heading }) => {
    return (
        <button className='text-center text-xl text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] w-full duration-700 py-2 rounded-lg'>{heading}</button>
    );
};

export default Button;