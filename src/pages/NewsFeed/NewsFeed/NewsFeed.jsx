import { useContext } from "react";
import useAuth from "../../../Hooks/UseAuth";
import Categories from "../Categories/Categories";
import DisplayNewsFeed from "../DisplayNewsFeed/DisplayNewsFeed";
import NewsForm from "../NewsForm/NewsForm";
import UserDetails from "../UserDetails/UserDetails";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { useState } from "react";
import Search from "../Search/Search";
import SearchAndCategory from "../SearchAndCategory/SearchAndCategory";
import TopPosts from "../TopPosts/TopPosts";


const NewsFeed = () => {

    const { info } = useAuth();
    const { theme } = useContext(ThemeContext);

    const [searchText, setSearchText] = useState("");

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>

            <div className="min-h-screen w-10/12 mx-auto ">

                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-4">

                    {/* left section */}

                    <div className="">
                        <SearchAndCategory></SearchAndCategory>
                    </div>

                    {/* middle section */}

                    {/* Post start*/}   
                    <div className="md:col-span-2 px-4">
                        <NewsForm></NewsForm>
                        {/* <div>
                            <DisplayNewsFeed
                            // query={searchText}
                            ></DisplayNewsFeed>
                        </div> */}
                    </div>


                    {/* right section */}

                    <div className="mt-5">
                        <TopPosts></TopPosts>
                        {/* new */}
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