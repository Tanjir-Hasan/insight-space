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
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>

            <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className='text-center md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#84a98c] md:w-1/3 w-10/12 mx-auto lg:pt-20 pt-10'>
                    Trending Posts
                </motion.h1>
                
            <Marquee pauseOnHover speed={100}>
                {
                    popularPost && popularPost.slice(0, 6).map(topPost =>
                        <div key={topPost._id} className='mx-5 my-20'>
                            <div className='relative px-5 py-8 bg-opacity-40 rounded-xl shadow-xl shadow-[#84a98c] md:w-[600px] w-[300px] hover:bg-[#84a98c] duration-700'>
                                <div className='flex justify-center'>
                                    <img src={topPost.userPhoto} alt="" className='rounded-full -mt-[61px] h-14' />
                                </div>
                                <h2 className='font-[Cinzel]'>{topPost.text.substring(0, 70)}... {"  "}
                                    <span className='text-[#023e8a] hover:font-semibold cursor-pointer'><Link to="/news-feed">Read more</Link></span>
                                </h2>
                                <h2 className='font-[Cinzel]'>{topPost.userName}</h2>
                            </div>
                        </div>
                    )
                }
            </Marquee>

        </div>
    );
};

export default PopularPost;