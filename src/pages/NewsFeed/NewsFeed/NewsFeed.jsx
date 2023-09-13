import { useContext } from "react";
import useAuth from "../../../Hooks/useAuth";
import DisplayNewsFeed from "../DisplayNewsFeed/DisplayNewsFeed";
import NewsForm from "../NewsForm/NewsForm";
import { ThemeContext } from "../../../providers/ThemeProvider";
import TopPosts from "../TopPosts/TopPosts";
import Categories from "../Categories/Categories";
import useTitle from "../../../Hooks/useTitle";


const NewsFeed = () => {

    useTitle('News Feed');

    const { info, searchText } = useAuth();

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme} py-5`}>

            <div className="w-[95%] mx-auto font-[Cinzel]">

                {/* for large device */}

                <div className='hidden sm:hidden md:hidden lg:block xl:block'>

                    <div className="lg:flex gap-1">

                        {/* left section */}
                        <div className="lg:w-3/12">
                            <Categories></Categories>
                        </div>


                        {/* middle section */}
                        <div className="w-6/12 mx-auto p-2 lg:p-0">

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
                        <div className="w-3/12">
                            <TopPosts></TopPosts>
                        </div>

                    </div>

                </div>


                {/* for large device */}


                {/* for medium device & small device */}

                <div className="lg:hidden md:block">

                    <div className="md:w-7/12 w-full">
                        <NewsForm></NewsForm>
                        <Categories></Categories>
                    </div>


                    <div className="md:flex gap-2">

                        <div className="md:w-7/12 w-full">
                            <DisplayNewsFeed query={searchText}></DisplayNewsFeed>
                        </div>


                        <div className="w-3/12 sm:hidden md:block">
                            <TopPosts></TopPosts>
                        </div>

                    </div>

                </div>

                {/* for medium device & small device */}

            </div>

        </div>
    );
};

export default NewsFeed;