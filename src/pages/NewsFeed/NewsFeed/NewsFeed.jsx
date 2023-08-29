import { useContext } from "react";
import useAuth from "../../../Hooks/UseAuth";
import DisplayNewsFeed from "../DisplayNewsFeed/DisplayNewsFeed";
import NewsForm from "../NewsForm/NewsForm";
import UserDetails from "../UserDetails/UserDetails";
import { ThemeContext } from "../../../providers/ThemeProvider";
import SearchAndCategory from "../SearchAndCategory/SearchAndCategory";
import TopPosts from "../TopPosts/TopPosts";
import Categories from "../Categories/Categories";


const NewsFeed = () => {
    const { info, searchText } = useAuth();
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <div className=" w-[98%] mx-auto font-[Poppins] ">
                <div className="flex">
                    {/* left section */}
                    <div className="w-3/12">
                        <Categories></Categories>
                    </div>
                    {/* middle section */}
                    {/* Post start*/}
                    <div className="w-6/12 mx-auto">
                        <NewsForm></NewsForm>
                        <div>
                            <DisplayNewsFeed
                                query={searchText}
                            ></DisplayNewsFeed>
                        </div>
                    </div>
                    {/* right section */}
                    <div className="w-3/12">
                        <TopPosts></TopPosts>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;