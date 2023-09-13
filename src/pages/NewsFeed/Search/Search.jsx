import React from 'react';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';

const Search = () => {
    const { setSearchText } = useAuth();
    return (
        <div className=''>
            <div className='lg:relative flex items-center gap-2'>
                <input
                    onChange={(e) => setSearchText(e.target.value)} 
                    type="text" name="text"
                    placeholder='Search by Post'
                    className='my-2 border-2 border-black focus:border-[#3c6e71] focus:outline-0 rounded-lg md:p-2 p-1 w-full' />
                <span className='lg:absolute -ml-10 right-5 top-5 text-xl'><FaSearch></FaSearch></span>
            </div>
        </div>
    );
};

export default Search;