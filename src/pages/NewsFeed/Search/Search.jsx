import React from 'react';

const Search = ({children}) => {

    const [searchText, setSearchText] = useState("");

    return (
        <div className='fixed h-[calc(100%+0px)] flex items-center pl-4 mt-10 md:mt-0'>
            <input searchText={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" name="text" placeholder='Search by Post' className='my-2 border-2 border-black focus:border-[#84a98c] focus:outline-0 rounded-lg md:p-2 p-1 w-full' />
            <span className='relative right-10'><FaSearch></FaSearch></span>
            {children}
        </div>
    );
};

export default Search;