import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import free from "../../../assets/images/icons/free-gift.png";
import info from "../../../assets/images/icons/info.png";
import vip from "../../../assets/images/icons/vip.png";
import { Link } from 'react-router-dom';



const Membership = () => {

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

            <div className="items-center justify-center md:w-10/12 w-11/12 mx-auto drop-shadow-lg">

                {/* TODO: border b is not working, paid member route button is not working*/}
                
                <h1 className={`${theme === 'light' ? 'border-[#3c6e71]' : theme === 'dark' ? 'border-[#48cae4]' : theme === 'night' ? 'border-[#b79ced]' : ''} border-b-2 text-center md:text-5xl text-4xl font-[Poppins] lg:w-1/2 mx-auto lg:pt-10`}>
                    Exclusive Membership
                    <br />
                    <span className='text-xl'>- Taking it to the Next Level -</span>
                </h1>

                <div className="justify-between rounded-lg">

                    <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto drop-shadow-lg">

                        <div className="md:px-0 px-6">

                            <p className="my-10 font-sans">Dive into a realm of unparalleled privileges with our Exclusive Membership section. Elevate your experience and gain access to a curated selection of premium content, personalized services, and extraordinary offers</p>

                            {/* TODO: THIS BUTTON IS NOT VISIBLE */}
                            <Link to="/paid-members">
                                <button className="font-semibold mt-5 bg-white text-[#3c6e71] hover:bg-[#48cae4] hover:text-black px-3 py-2 rounded-sm duration-700">Show All</button>
                            </Link>

                        </div>

                    </div>

                    {/* show large device only */}

                    <div className="relative w-10/12 md:mr-20 py-24 hidden sm:hidden md:hidden lg:block xl:block">

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: -100 },
                                }}
                                transition={{ duration: 0.9 }}
                                className="relative justify-end gap-10 items-center mb-5 md:w-[100%] rounded-lg" >
                                <div className="z-10 absolute -top-5 ">
                                    <img className="w-15 h-10" src={free}></img>
                                </div>

                                <div
                                    className="bg-white h-52 p-4 rounded-lg border-2 backdrop-blur-sm bg-white/30 "
                                >
                                    <div className="relative group">
                                        <h2 className='mt-5 font-[Cinzel] text-center'>Free Membership</h2>
                                        <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-10 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                                    </div>
                                    <p className='mt-5 font-[Cinzel] text-center'>Dip your toes into our community with our no-cost Free Membership, offering you a taste of our content and a glimpse into the possibilities that await.</p>
                                </div>

                            </motion.div>

                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: -100 },
                                }}
                                transition={{ duration: 0.9 }}
                                className="relative left-20 justify-end gap-10 items-center mb-5 md:w-[100%]  rounded-lg">
                                <div className="z-10 absolute -top-5">
                                    <img className="w-15 h-10" src={info}></img>
                                </div>

                                <div
                                    className="bg-white h-52 p-4 rounded-lg border-2 backdrop-blur-sm bg-white/30 "
                                >
                                    <div className="relative group">
                                        <h2 className='mt-5 font-[Cinzel] text-center'>Basic Membership</h2>
                                        <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-10 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                                    </div>
                                    <p className='mt-5 font-[Cinzel] text-center'>Unlock the door to a range of essential features with our Basic Membership, designed to provide you with foundational benefits and a solid starting point for your journey with us.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: -100 },
                                }}
                                transition={{ duration: 0.9 }}
                                className="relative justify-end -left-5 gap-10 items-center ml-48 md:w-[100%] h-[80%] rounded-lg" >
                                <div className=" z-10 absolute -top-5">
                                    <img className="w-15 h-10" src={vip}></img>
                                </div>

                                <div
                                    className="bg-white h-52 p-4 rounded-lg border-2 backdrop-blur-sm bg-white/30 "
                                >
                                    <div className="relative group">
                                        <h2 className='mt-5 font-[Cinzel] text-center' >Pro Membership</h2>
                                        <span className={`${theme === 'light' ? 'bg-[#3c6e71]' : 'bg-[#48cae4]'} absolute -bottom-1 w-9/12 left-10 h-0.5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}></span>
                                    </div>
                                    <p className='mt-5 font-[Cinzel] text-center'>Step up your game and take full advantage of our Pro Membership, offering advanced perks, exclusive access, and a premium experience that caters to your aspirations and needs.</p>
                                </div>
                            </motion.div>

                        </div>

                    </div>

                    {/* show large device only */}

                    {/* show small and medium device only */}

                    <div className="w-11/12 mx-auto py-10 space-y-3 lg:hidden md:block">

                        <div className="bg-white h-46 rounded-lg border-2 backdrop-blur-sm bg-white/30 p-4"
                        >
                            <h2 className='text-center'>Free Membership</h2>
                            <p className='text-center'>Dip your toes into our community with our no-cost Free Membership, offering you a taste of our content and a glimpse into the possibilities that await.</p>
                        </div>

                        <div className="bg-white h-46 rounded-lg  border-2 backdrop-blur-sm bg-white/30 p-4"
                        >
                            <h2 className='text-center'>Basic Membership</h2>
                            <p className='text-center'>Unlock the door to a range of essential features with our Basic Membership, designed to provide you with foundational benefits and a solid starting point for your journey with us.</p>
                        </div>

                        <div className="bg-white h-46 rounded-lg border-2 backdrop-blur-sm bg-white/30 p-4"
                        >
                            <h2 className='text-center' >Pro Membership</h2>
                            <p className='text-justify'>Step up your game and take full advantage of our Pro Membership, offering advanced perks, exclusive access, and a premium experience that caters to your aspirations and needs.</p>
                        </div>

                    </div>

                    {/* show small and medium device only */}

                </div>

            </div>

        </div>
    );
};

export default Membership;






