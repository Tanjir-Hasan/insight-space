import React, { useContext } from 'react';
import { useEffect } from "react";
import { fetchPosts } from "../../../StateManagment/Posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import { ThemeContext } from '../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const TopPosts = () => {

    const { theme } = useContext(ThemeContext);

    const controls = useAnimation();
    const [ref, inView] = useInView();

    const { isLoading, posts, error } = useSelector(state => state.posts);

    console.log(posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>

            <div className='relative group w-10/12 mx-auto'>

                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className='text-5xl font-[Poppins]'>
                    Top Posts
                </motion.h1>

                <span className="absolute -bottom-2 w-1/6 left-0 h-1 bg-[#84a98c] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform -rotate-2 duration-700"></span>

            </div>

            <Marquee pauseOnHover speed={100}>
                {
                    posts && posts.slice(0, 4).map(topPost =>
                        <div key={topPost._id} className='mx-5 my-12'>
                            <div className='px-5 py-8 bg-opacity-40 rounded-xl shadow-xl shadow-[#84a98c] w-full hover:bg-[#84a98c] duration-700'>
                                <h2 className='font-[Cinzel]'>{topPost.text.substring(0, 70)}...</h2>
                                <h2 className='font-[Cinzel]'>By, {topPost.userName}</h2>
                            </div>
                        </div>
                    )
                }
            </Marquee>
        </div>
    );
};

export default TopPosts;