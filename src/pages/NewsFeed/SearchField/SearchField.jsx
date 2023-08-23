import React, { useState } from 'react';

const SearchField = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div>
            <input
                className='input-field'
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchField;
