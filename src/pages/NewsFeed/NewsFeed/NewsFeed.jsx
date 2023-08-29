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

            <div className="min-h-screen w-10/12 mx-auto ">

                <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-4 w-full">

                    <div className="border border-spacing-4 ">

                        {/* Search Field */}
                        {/* <div className='fixed h-[calc(100%+0px)] flex items-center w-11/12 mx-auto mt-10 md:mt-0'>
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" name="text" placeholder='Search by Post' className='my-2 border-2 border-black focus:border-[#84a98c] focus:outline-0 rounded-lg md:p-2 p-1' />
                            <span className='relative right-10'><FaSearch></FaSearch></span>
                        </div> */}

                        <div className="relative w-11/12 mx-auto">
                            <div className='fixed '>
                                <input onChange={(e) => setSearchText(e.target.value)} type="text" name="text" placeholder='Search by Post' className='my-2 border-2 border-black focus:border-[#84a98c] focus:outline-0 rounded-lg md:p-2 p-1 w-full' />
                                <span className='absolute right-5 top-5 text-xl'><FaSearch></FaSearch></span>
                            </div>
                        </div>

                        {/* Search Field */}

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