import React from 'react';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';

const SearchAndCategory = () => {
    return (
        <div className='fixed h-[calc(100%-276px)] mt-5'>
            <Search></Search>
            <Categories></Categories>
        </div>
    );
};

export default SearchAndCategory;