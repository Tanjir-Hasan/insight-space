import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const GuarantyMember = () => {
    const { theme } = useContext(ThemeContext);
    const controls = useAnimation();
    const [refs, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (

        <div className='mb-36 font-[Poppins]'>
            <div className=' w-10/12 pt-5 mx-auto'>
                <h2 className='md:text-5xl text-4xl font-[Poppins]  lg:w-1/2 w-11/12 '>Why Choose Our Plan?</h2>
                <p className={`border-b-2 lg:w-1/2 w-11/12 mb-8 pb-2 ${theme === 'light' ? 'border-[#3c6e71] text-black' : theme === 'dark' ? 'border-[#48cae4] text-white' : theme === 'night' ? 'border-[#b79ced] text-white' : ''}`}>"Backed by a 30-day money back Guarantee - no questions asked"</p>
            </div>

            <motion.div
                ref={refs}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -100 },
                }}
                transition={{ duration: 1.5 }}>
                <div className='w-8/12 mx-auto md:grid gap-5 lg:grid-cols-3 md:grid-cols-2'>

                    <div className={`${theme === 'dark' ? 'hover:bg-[#051923]' :
                                    theme === 'night' ? 'hover:bg-[#1a2d38]' :
                                        theme === 'light' ? 'hover:bg-[#3c6e71] hover:text-white' : ''} flex items-center gap-2 border rounded-md transition duration-1000 ease-in-out `}>
                        <div>
                            <img className='w-20 h-20 rounded-md' src="https://i.ibb.co/q101sRs/istockphoto-1357866057-612x612.jpg" alt="" />
                        </div>
                        <div className='p-1'>
                            <h2>Personalized Learning Experience</h2>
                        </div>
                    </div>
                    <div className={`${theme === 'dark' ? 'hover:bg-[#051923]' :
                                    theme === 'night' ? 'hover:bg-[#1a2d38]' :
                                        theme === 'light' ? 'hover:bg-[#3c6e71] hover:text-white' : ''} flex items-center gap-2 border rounded-md transition duration-1000 ease-in-out `}>
                        <div>
                            <img className='w-20 h-20 rounded-md' src="https://i.ibb.co/YcKLKQc/istockphoto-1430323689-612x612.jpg" alt="" />
                        </div>
                        <div className='p-1'>
                            <h2>Comprehensive Learning Paths</h2>
                        </div>
                    </div>
                    <div className={`${theme === 'dark' ? 'hover:bg-[#051923]' :
                                    theme === 'night' ? 'hover:bg-[#1a2d38]' :
                                        theme === 'light' ? 'hover:bg-[#3c6e71] hover:text-white' : ''} flex items-center gap-2 border rounded-md transition duration-1000 ease-in-out `}>
                        <div>
                            <img className='w-20 h-20 rounded-md' src="https://i.ibb.co/f0kB3sH/cor-seal.png" alt="" />
                        </div>
                        <div className='p-1'>
                            <h2>Certifications and Recognition</h2>
                        </div>
                    </div>
                    <div className={`${theme === 'dark' ? 'hover:bg-[#051923]' :
                                    theme === 'night' ? 'hover:bg-[#1a2d38]' :
                                        theme === 'light' ? 'hover:bg-[#3c6e71] hover:text-white' : ''} flex items-center gap-2 border rounded-md transition duration-1000 ease-in-out `}>
                        <div>
                            <img className='w-20 h-20 rounded-md' src="https://i.ibb.co/FWPW57s/aegis-powersports-members-only-discounts-and-allowances-advertising-gift-png-favpng-q-Kk-JCE31u10-Wn.jpg" alt="" />
                        </div>
                        <div className='p-1'>
                            <h2>Member-Only Opportunities</h2>
                        </div>
                    </div>
                    <div className={`${theme === 'dark' ? 'hover:bg-[#051923]' :
                                    theme === 'night' ? 'hover:bg-[#1a2d38]' :
                                        theme === 'light' ? 'hover:bg-[#3c6e71] hover:text-white' : ''} flex items-center gap-2 border rounded-md transition duration-1000 ease-in-out `}>
                        <div>
                            <img className='w-20 h-20 rounded-md' src="https://i.ibb.co/YcNnxN0/download-1.jpg" alt="" />
                        </div>
                        <div className='p-1'>
                            <h2>Guaranteed Satisfaction</h2>
                        </div>
                    </div>
                    <div className={`${theme === 'dark' ? 'hover:bg-[#051923]' :
                                    theme === 'night' ? 'hover:bg-[#1a2d38]' :
                                        theme === 'light' ? 'hover:bg-[#3c6e71] hover:text-white' : ''} flex items-center gap-2 border rounded-md transition duration-1000 ease-in-out `}>
                        <div>
                            <img className='w-20 h-20 rounded-md' src="https://i.ibb.co/T2XMbF3/5c3b032fd55ae49f1b7a76cb-images.png" alt="" />
                        </div>
                        <div className='p-1'>
                            <h2>Expert-Driven Insights</h2>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default GuarantyMember;