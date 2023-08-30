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
        <div className={`${theme === 'dark' ? 'dark' : ''} py-5`}>

            <div className="w-[95%] mx-auto font-[Cinzel]">

                <div className="flex gap-1">
                    {/* left section */}
                    <div className="hidden lg:block lg:w-3/12 ">
                        <Categories></Categories>
                    </div>
                    {/* middle section */}
                    {/* Post start*/}
                    <div className="md:w-7/12 lg:w-6/12 mx-auto p-2 lg:p-0">
                        <NewsForm></NewsForm>
                        <div>
                            <div className="block lg:hidden">
                                <Categories></Categories>
                            </div>
                            <DisplayNewsFeed
                                query={searchText}
                            ></DisplayNewsFeed>
                        </div>
                    </div>
                    {/* right section */}
                    <div className=" hidden md:block md:w-5/12 lg:w-3/12">
                        <TopPosts></TopPosts>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default NewsFeed;