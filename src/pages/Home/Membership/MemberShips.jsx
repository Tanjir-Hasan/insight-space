import React, { useContext, useEffect, useState } from 'react';
import { FaCheck, FaRegWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const MemberShips = () => {
    const [hovered, setHovered] = useState(false);
    const [hovereds, setHovereds] = useState(false);
    const [hoveredss, setHoveredss] = useState(false);
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

    const handleHover = () => {
        setHovered(true);

    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    const handleHovers = () => {
        setHovereds(true);
    };

    const handleMouseLeaves = () => {
        setHovereds(false);
    };
    const handleHoverss = () => {
        setHoveredss(true);
    };

    const handleMouseLeavess = () => {
        setHoveredss(false);
    };

    // src="https://i.ibb.co/Jdg5n3c/LTd5ax-LXc-removebg-preview.png"
    return (
        <div className={` ${theme} pb-28`}>
            <div className="md:w-10/12 w-11/12 mx-auto ">
                <h1 className="border-b-2 text-center md:text-5xl text-4xl font-[Poppins] lg:w-1/2 mx-auto lg:pt-10">
                    Exclusive Membership
                    <br />
                    <span className='text-xl'>- Taking it to the Next Level -</span>
                </h1>

                <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto drop-shadow-lg">

                    <div className="md:px-0 px-6">

                        <p className="my-8 font-sans">Dive into a realm of unparalleled privileges with our Exclusive Membership section. Elevate your experience and gain access to a curated selection of premium content, personalized services, and extraordinary offers</p>
                        <Link to="/instructor-payment">
                            <button className="font-semibold mt-5 bg-white text-[#3c6e71] hover:bg-[#48cae4] hover:text-black px-3 py-2 rounded-sm duration-700">Show All</button>
                        </Link>

                    </div>

                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-5'>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        transition={{ duration: 0.9 }}>
                        <div
                            className={`relative border-[#3c6e71] border rounded-lg overflow-hidden transition-transform duration-500 transform hover:scale-105 drop-shadow-lg`}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}>

                            <div className="relative justify-end gap-10 items-center mb-5 md:w-[100%] rounded-lg drop-shadow-lg" >
                                <div className="z-10 absolute -top-1 ">
                                    <img className="w-15 h-10" src="https://i.ibb.co/3BjKH6B/free-gift.png"></img>
                                </div>
                                <div
                                    className="bg-white h-52 p-4 rounded-lg border-2 backdrop-blur-sm bg-white/30 ">
                                    <div className="relative group">
                                        <h2 className='mt-3 font-[Cinzel] text-center'>Free Membership</h2>
                                        <span className=" absolute -bottom-1 w-9/12 left-10 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 "></span>
                                    </div>
                                    <p className='mt-5 font-[Cinzel] text-center'>Dip your toes into our community with our no-cost Free Membership, offering you a taste of our content and a glimpse into the possibilities that await.</p>
                                </div>
                            </div>

                            {/* Card Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-white to-gray-300 text-gray-800 transition-transform duration-500 ">

                            </div>
                            {/* Additional Card Contents (Hidden by Default) */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r  bg-white transition-transform duration-1000 ${hovered
                                    ? 'translate-y-0 overflow-scroll  h-3/4'
                                    : 'translate-y-full  from-white to-gray-300 text-gray-800 h-3/4 '
                                    }`} >

                                <main>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Exclusive Content and Features</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Ad-Free Experience</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Early Access and Sneak Peeks</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Enhanced Support</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Increased Limits or Quotas</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Community and Networking</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Educational Resources</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Flexible Cancellation</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Personalization Options</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Feedback and Influence</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Special Events or Webinars</p>
                                    </div>

                                </main>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2nd membership start */}

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                        transition={{ duration: 0.9 }}>
                        <div
                            className={`relative border-[#3c6e71] border rounded-lg overflow-hidden transition-transform duration-500 transform hover:scale-105 drop-shadow-lg`}
                            onMouseEnter={handleHovers}
                            onMouseLeave={handleMouseLeaves}>

                            <div className="relative justify-end gap-10 items-center mb-5 md:w-[100%] rounded-lg drop-shadow-lg" >
                                <div className="z-10 absolute -top-1 ">
                                    <img className="w-15 h-10" src="https://i.ibb.co/tL42wj6/info.png"></img>
                                </div>
                                <div
                                    className="bg-white h-52 p-4 rounded-lg border-2 backdrop-blur-sm bg-white/30 ">
                                    <div className="relative group">
                                        <h2 className='mt-3 font-[Cinzel] text-center'>Gold Membership</h2>
                                        <span className=" absolute -bottom-1 w-9/12 left-10 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 "></span>
                                    </div>
                                    <p className='mt-5 font-[Cinzel] text-center'>Dip your toes into our community with our no-cost Free Membership, offering you a taste of our content and a glimpse into the possibilities that await.</p>
                                </div>
                            </div>

                            {/* Card Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-white to-gray-300 text-gray-800 transition-transform duration-500 ">

                            </div>
                            {/* Additional Card Contents (Hidden by Default) */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r  bg-white transition-transform duration-1000 ${hovereds
                                    ? 'translate-y-0 overflow-scroll  h-3/4'
                                    : 'translate-y-full  from-white to-gray-300 text-gray-800 h-3/4 '
                                    }`} >

                                <main>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Exclusive Content and Features</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Ad-Free Experience</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Early Access and Sneak Peeks</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Enhanced Support</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Increased Limits or Quotas</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Community and Networking</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Educational Resources</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Flexible Cancellation</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Personalization Options</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Feedback and Influence</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegWindowClose className='text-red-500' />
                                        <p>Special Events or Webinars</p>
                                    </div>

                                </main>
                            </div>
                        </div>
                    </motion.div>


                    {/* 3rd membership start */}
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 100 },
                        }}
                        transition={{ duration: 0.9 }}>
                        <div
                            className={`relative border-[#3c6e71] border rounded-lg overflow-hidden transition-transform duration-500 transform hover:scale-105 drop-shadow-lg`}
                            onMouseEnter={handleHoverss}
                            onMouseLeave={handleMouseLeavess}>

                            <div className="relative justify-end gap-10 items-center mb-5 md:w-[100%] rounded-lg drop-shadow-lg" >
                                <div className="z-10 absolute -top-1 ">
                                    <img className="w-15 h-10" src="https://i.ibb.co/x1SbyF5/vip.png"></img>
                                </div>
                                <div
                                    className="bg-white h-52 p-4 rounded-lg border-2 backdrop-blur-sm bg-white/30 ">
                                    <div className="relative group">
                                        <h2 className='mt-3 font-[Cinzel] text-center'>Pro Membership</h2>
                                        <span className=" absolute -bottom-1 w-9/12 left-10 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 "></span>
                                    </div>
                                    <p className='mt-5 font-[Cinzel] text-center'>Dip your toes into our community with our no-cost Free Membership, offering you a taste of our content and a glimpse into the possibilities that await.</p>
                                </div>
                            </div>

                            {/* Card Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-white to-gray-300 text-gray-800 transition-transform duration-500 ">

                            </div>
                            {/* Additional Card Contents (Hidden by Default) */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r  bg-white transition-transform duration-1000 ${hoveredss
                                    ? 'translate-y-0 overflow-scroll  h-3/4'
                                    : 'translate-y-full  from-white to-gray-300 text-gray-800 h-3/4  '
                                    }`} >

                                <main>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Exclusive Content and Features:</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Ad-Free Experience</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Early Access and Sneak Peeks</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Enhanced Support</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Increased Limits or Quotas</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Community and Networking</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Educational Resources</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Flexible Cancellation</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Personalization Options</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Feedback and Influence</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaCheck className='text-green-500' />
                                        <p>Special Events or Webinars</p>
                                    </div>

                                </main>
                            </div>
                        </div>
                    </motion.div>



                </div>
            </div>
        </div>

    );

};






export default MemberShips;