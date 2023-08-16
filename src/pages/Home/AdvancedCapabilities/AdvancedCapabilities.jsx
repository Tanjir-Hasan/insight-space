import React from 'react';
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import '../../Home/PeerToPeer/PeerToPeer.css'

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
            <div className={`${theme === 'dark' ? 'dark' : ''}`}>

                <h1 className='text-center text-4xl text-semibold pt-10'>Advanced Capabilities: Taking it to the Next Level</h1>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>

                    <div className='p-20'>
                    <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -100 },
                            }}
                            transition={{ duration: 0.9 }}

                            className="md:ml-24 w-full md:w-5/6 ">
                            <div className='pb-10 justify-center'>
                                <img className='w-11/12 h-80' src="https://cdn.elearningindustry.com/wp-content/uploads/2023/06/What-Are-The-Essential-Questions-To-Ask-When-Choosing-HR-Software.jpg"></img>
                            </div>

                        </motion.div>

                        <div className='hover:bg-[#84a98c] duration-500 rounded-3xl p-10'>
                            <h4 className='text-2xl mb-5'>Q&A Corner: Exploring Curious Minds</h4>
                            <p>Welcome to our Q&A Corner, where curiosity finds its answers. Have burning questions on diverse topics? Look no further. Our Q&A section is a hub of knowledge, where we unravel mysteries, simplify complexities, and provide insightful explanations.</p>
                        </div>
                    </div>
                    <div className='p-20'>
                        <div className='p-10 hover:bg-[#84a98c] duration-500 rounded-3xl'>
                            <h4 className='text-2xl mb-5'>Crafting Compelling Content: Mastering the Art of Blog Writing</h4>
                            <p>Welcome to our Blog Writing section, where the power of words meets the art of expression. Whether you're an aspiring writer or a seasoned blogger looking to enhance your skills, this is your go-to resource for all things related to creating captivating content. </p>
                        </div>
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -100 },
                            }}
                            transition={{ duration: 0.9 }}

                            className="md:ml-24 w-full md:w-5/6 ">

                            <div className='pt-10 justify-center'>
                                <img className='w-11/12 h-80' src="https://www.blogtyrant.com/wp-content/uploads/2019/07/draft-a-post.jpg"></img>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AdvancedCapabilities;
