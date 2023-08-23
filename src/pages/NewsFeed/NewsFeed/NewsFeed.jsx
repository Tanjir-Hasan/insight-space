import { useContext } from "react";
import useAuth from "../../../Hooks/UseAuth";
import Categories from "../Categories/Categories";
import DisplayNewsFeed from "../DisplayNewsFeed/DisplayNewsFeed";
import NewsForm from "../NewsForm/NewsForm";
import UserDetails from "../UserDetails/UserDetails";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";


const NewsFeed = () => {
    const { info } = useAuth();
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <div className="min-h-screen w-10/12 mx-auto">
                <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-4 w-full">
                    <div className="border border-spacing-4">
                        <div className='flex flex-grow justify-end items-center w-1/2'>
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" name="text" placeholder='Search Name For Your Toy' className='my-2 border-2 border-black focus:border-yellow-500 focus:outline-0 rounded-lg p-2 w-1/2' />
                        <span className='relative right-10'><FaSearch></FaSearch></span>
                    </div>
                        <Categories></Categories> 
                    </div>
                    {/* Post start*/}
                    <div className="lg:col-span-2">
                        <NewsForm></NewsForm>
                        <div>
                            <DisplayNewsFeed ></DisplayNewsFeed>
                        </div>
                    </div>
                    {/* Field start */}
                    <div className="border border-spacing-4 pt-8">
                        {info && <UserDetails></UserDetails>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;