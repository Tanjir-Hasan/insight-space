import React from 'react';
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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

            <div className='md:w-10/12 w-11/12 mx-auto'>
                <h2 className='md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#84a98c] lg:w-1/2 w-11/12 mb-8'>Peer To Peer learning</h2>
            </div>

            <div className='bg-fixed bg-[url("https://i.ibb.co/WpR71T2/connection.jpg")] bg-no-repeat bg-cover'>

                <div className='lg:flex py-20 px-10'>

                    <div className='p-6 items-center bg-fixed bg-[#e5e5e5]/30 rounded-md'>
                        <img className="rounded-md" src="https://i.ibb.co/235F36k/hands-1.jpg" />
                    </div>

                    <div className='bg-[#000814] bg-opacity-60 lg:p-20 p-6 lg:mt-0 mt-8 md:ml-24 w-full rounded-md'>

                        <p className='text-3xl font-[Poppins] font-semibold text-white pt-10'>Discuss with your peer</p>

                        <p className='text-xl font-[Cinzel] pt-10 text-white text-justify'>Welcome to our Peer-to-Peer Learning Hub, where knowledge flows freely between like-minded individuals.In this dynamic corner of our platform.</p>

                        <Link to="/login">
                            <button className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] duration-700 lg:px-24 px-12 py-2 rounded-lg mt-10 lg:w-8/12 w-10/12'>Send Message</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PeerToPeer;
