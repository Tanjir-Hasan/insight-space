import React from 'react';
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const AdvancedCapabilities = () => {

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
        <>
            <div className={`${theme} pb-16`}>

                <div className="md:w-10/12 w-11/12 mx-auto">

                    <h1 className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#48cae4]'} border-b-2 text-center md:text-5xl text-4xl font-[Poppins] lg:w-1/2 md:w-10/12 mx-auto lg:pt-20 pt-10`}>
                        Advanced Capabilities
                        <br />
                        <span className='text-xl'>- Taking it to the Next Level -</span>
                    </h1>

                </div>

                <div className='lg:flex items-center gap-10 w-10/12 py-10 mx-auto'>

                    <div className='w-11/12'>

                        <img className='rounded-xl pb-8' src="https://cdn.elearningindustry.com/wp-content/uploads/2023/06/What-Are-The-Essential-Questions-To-Ask-When-Choosing-HR-Software.jpg" />

                        <div className='hover:bg-[#3c6e71] hover:text-white duration-1000 rounded-b-xl p-10'>
                            <h4 className='text-2xl font-[Poppins] mb-5'>Q&A Corner: <span className='text-lg'>Exploring Curious Minds</span></h4>
                            <p className='font-[Cinzel]'>Welcome to our Q&A Corner, where curiosity finds its answers. Have burning questions on diverse topics? Look no further. Our Q&A section is a hub of knowledge, where we unravel mysteries, simplify complexities, and provide insightful explanations.</p>
                        </div>

                    </div>

                    <div className='w-11/12'>

                        <div className='p-10 hover:bg-[#3c6e71] hover:text-white duration-1000 rounded-t-xl'>
                            <h4 className='text-2xl font-[Poppins] mb-5'>Crafting Compelling Content: <span className='text-lg'>Mastering the Art of Blog Writing</span></h4>
                            <p className='font-[Cinzel]'>Welcome to our Blog Writing section, where the power of words meets the art of expression. Whether you're an aspiring writer or a seasoned blogger looking to enhance your skills, this is your go-to resource for all things related to creating captivating content.</p>
                        </div>

                        <img className='rounded-xl pt-8' src="https://www.blogtyrant.com/wp-content/uploads/2019/07/draft-a-post.jpg" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default AdvancedCapabilities;
