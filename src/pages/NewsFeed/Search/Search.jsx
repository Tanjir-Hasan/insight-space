import React from 'react';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useAuth from '../../../Hooks/UseAuth';

const Search = () => {
    const { setSearchText } = useAuth();
    return (
        <div className=''>
            <div className='relative'>
                <input
                    onChange={(e) => setSearchText(e.target.value)} 
                    type="text" name="text"
                    placeholder='Search by Post'
                    className='my-2 border-2 border-black focus:border-[#84a98c] focus:outline-0 rounded-lg md:p-2 p-1 w-full' />
                <span className='absolute right-5 top-5 text-xl'><FaSearch></FaSearch></span>
            </div>
        </div>
    );
};

export default Search;