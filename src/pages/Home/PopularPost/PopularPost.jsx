import React, { useContext } from 'react';
import usePopularPost from '../../../Hooks/usePopularPost';
import { ThemeContext } from '../../../providers/ThemeProvider';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const PopularPost = () => {
    const [popularPost] = usePopularPost();
    const { theme } = useContext(ThemeContext);
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);



    return (
        <div className={`${theme}`}>

            <div className={`${theme === 'dark' ? 'bg-[#003049]' :
                theme === 'night' ? 'bg-[#051923]' :
                    theme === 'light' ? 'bg-[#f0efeb]' : ''} trending-post h-[615px]`}>

                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className={`${theme === 'light' ? 'border-[#3c6e71]' : theme === 'dark' ? 'border-[#48cae4]' : theme === 'night' ? 'border-[#b79ced]' : ''} text-center md:text-5xl text-4xl font-[Poppins] border-b-2 lg:w-1/3 md:w-1/2 w-10/12 mx-auto lg:pt-20 pt-10`}>
                    Trending Posts
                </motion.h1>

                <Marquee pauseOnHover speed={100}>
                    {
                        popularPost && popularPost.slice(0, 6).map(topPost =>
                            <div key={topPost._id} className='mx-5 my-20'>

                                <div className={`${theme === 'dark' ? 'hover:bg-[#051923] shadow-[#48cae4]' :
                                    theme === 'night' ? 'hover:bg-[#1a2d38] shadow-[#b79ced]' :
                                        theme === 'light' ? 'hover:bg-[#3c6e71] shadow-[#3c6e71]' : ''} px-5 py-8 bg-opacity-40 rounded-xl shadow-lg md:h-32 h-36 md:w-[600px] w-[300px] hover:text-white duration-700`}>

                                    <div className='flex justify-center'>
                                        <img src={topPost.userPhoto} alt="" className='rounded-full -mt-[61px] h-14' />
                                    </div>

                                    <h2 className='font-[Cinzel]'>{topPost.text.substring(0, 70)}... {"  "}
                                        <span className={`${theme === 'dark' ? 'text-[#48cae4]' :
                                            theme === 'night' ? 'text-[#b79ced]' :
                                                theme === 'light' ? 'text-[#00a6fb]' : ''} hover:font-semibold cursor-pointer`}
                                        ><Link to="/news-feed">Read more</Link></span>
                                    </h2>

                                    <h2 className='font-[Cinzel]'>Author, {topPost.userName}</h2>

                                </div>

                            </div>
                        )
                    }
                </Marquee>

            </div>

        </div>
    );
};

export default PopularPost;