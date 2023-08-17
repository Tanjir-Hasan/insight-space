import React, { useContext } from 'react';
import usePopularPost from '../../../Hooks/usePopularPost';
import { ThemeContext } from '../../../providers/ThemeProvider';
import Marquee from 'react-fast-marquee';

const PopularPost = () => {

    const { theme } = useContext(ThemeContext);

    const [popularPost] = usePopularPost();
    console.log(popularPost)
    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className='text-center md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#84a98c] w-1/3 mx-auto lg:pt-20 pt-10'>
                Trending Posts
            </h1>

            {/* <Marquee pauseOnHover speed={100}>
                {
                    posts && posts.slice(0, 6).map(topPost =>
                        <div key={topPost._id} className='mx-5 my-20'>
                            <div className='relative px-5 py-8 bg-opacity-40 rounded-xl shadow-xl shadow-[#84a98c] md:w-[600px] w-[300px] hover:bg-[#84a98c] duration-700'>
                                <div className='flex justify-center'>
                                    <img src={topPost.userPhoto} alt="" className='rounded-full -mt-[61px] h-14' />
                                </div>
                                <h2 className='font-[Cinzel]'>{topPost.text.substring(0, 70)}... {"  "}
                                    <span className='text-[#023e8a] hover:font-semibold cursor-pointer'><Link to="/login">Read more</Link></span>
                                </h2>
                                <h2 className='font-[Cinzel]'>{topPost.userName}</h2>
                            </div>
                        </div>
                    )
                }
            </Marquee> */}

        </div>
    );
};

export default PopularPost;