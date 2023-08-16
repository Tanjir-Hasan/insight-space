import React from 'react';
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import '../../Home/PeerToPeer/PeerToPeer.css'

const PeerToPeer = () => {

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
            {/* <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -100 },
                }}
                transition={{ duration: 0.9 }}

                > */}
                <div className='featured-item bg-fixed pb-200 '>
                    <h2 className='text-center font-semibold text-4xl  pt-10 drop-shadow-2xl '>Peer To Peer learning</h2>
                    <div className='flex p-20 py-20 bg-opacity-40 w-50 h-50 justify-center'>

                    {/* <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -100 },
                            }}
                            transition={{ duration: 0.9 }}

                            className=""> */}
                                   <div className='md:ml-10 items-center bg-white/80 '>
                            <img className="w-96 h-80 drop-shadow-2xl " src="https://images.pexels.com/photos/6146997/pexels-photo-6146997.jpeg"></img>
                        </div>

                            {/* </motion.div> */}

                        {/* <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -100 },
                            }}
                            transition={{ duration: 0.9 }}

                            className="md:ml-24 w-full md:w-5/6 drop-shadow-lg"> */}
                           <div className='bg-slate-500 bg-opacity-60 w-50 h-50 p-20 md:ml-24 w-full md:w-5/6 '>
                            <p className='text-3xl font-semibold text-white pt-10'>Discuss with your peer</p>
                            <p className='text-xl pt-10 text-white text-justify'>Welcome to our Peer-to-Peer Learning Hub, where knowledge flows freely between like-minded individuals.In this dynamic corner of our platform.</p>
                            <div className="mt-10 md:w-8/12 md:mx-0 w-10/12 item-center text-center">
                                <Link to="/login">
                                    <Button className="text-center" heading="Send Message"></Button>
                                </Link>
                            </div>

                        </div>



                            {/* </motion.div> */}

                        {/* <div className='bg-slate-500 bg-opacity-40 w-50 h-50 p-20 md:ml-24 w-full md:w-5/6 '>
                            <p className='text-3xl font-semibold text-white pt-10'>Discuss with your peer</p>
                            <p className='text-xl pt-10 text-white'>Welcome to our Peer-to-Peer Learning Hub, where knowledge <br></br> flows freely between like-minded individuals. <br></br>In this dynamic corner of our platform.</p>
                            <div className="mt-10 md:w-8/12 md:mx-0 w-10/12 item-center text-center">
                                <Link to="/login">
                                    <Button className="text-center" heading="Send Message"></Button>
                                </Link>
                            </div>

                        </div> */}
                    </div>
                </div>
            {/* </motion.div> */}
        </div>
    );
};

export default PeerToPeer;
