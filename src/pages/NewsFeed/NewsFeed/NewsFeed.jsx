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
    const [searchText, setSearchText] = useState("");


    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <div className="min-h-screen w-10/12 mx-auto">
                <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-4 w-full">
                    <div className="border border-spacing-4">
                        {/* Search Field */}
                        <div className='flex items-center justify-center px-2 mt-10 md:mt-0'>
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" name="text" placeholder='Search Post' className='my-2 border-2 border-black focus:border-[#84a98c] focus:outline-0 rounded-lg md:p-2 p-1 w-full' />
                            <span className='relative right-10'><FaSearch></FaSearch></span>
                        </div>

                        <h2 className="text-lg font-semibold text-center mt-4 mb-6 underline underline-offset-8">Select Your Favourites Categories</h2>
                        <Categories></Categories>

                    </div>
                    {/* Post start*/}
                    <div className="lg:col-span-2">
                        <NewsForm></NewsForm>
                        <div>
                            <DisplayNewsFeed query={searchText}></DisplayNewsFeed>
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