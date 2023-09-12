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

            <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#48cae4]'} text-center md:text-5xl text-4xl font-[Poppins] border-b-2 lg:w-1/3 md:w-1/2 w-10/12 mx-auto lg:pt-20 pt-10`}>
                    Trending Posts
                </motion.h1>
                
            <Marquee pauseOnHover speed={100}>
                {
                    popularPost && popularPost.slice(0, 6).map(topPost =>
                        <div key={topPost._id} className='mx-5 my-20'>
                            <div className=' px-5 py-8 bg-opacity-40 rounded-xl shadow-xl shadow-[#3c6e71] md:h-32 h-36 md:w-[600px] w-[300px] hover:bg-[#3c6e71] hover:text-white duration-700'>
                                <div className='flex justify-center'>
                                    <img src={topPost.userPhoto} alt="" className='rounded-full -mt-[61px] h-14' />
                                </div>
                                <h2 className='font-[Cinzel]'>{topPost.text.substring(0, 70)}... {"  "}
                                    <span className='text-[#48cae4] hover:font-semibold cursor-pointer'><Link to="/news-feed">Read more</Link></span>
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