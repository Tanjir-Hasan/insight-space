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
            
                <div className='featured-item bg-fixed'>
                <h2 className='text-center font-semibold text-4xl'>Peer To Peer learning</h2>
                    <div className='flex py-20 bg-opacity-40 w-50 h-50 justify-center'>
                
                        <div className='p-20 items-center bg-fixed bg-white/30'>
                            <img className="w-96 h-80" src="https://images.pexels.com/photos/6146997/pexels-photo-6146997.jpeg"></img>
                        </div>

                           
                        <div className='bg-slate-500 bg-opacity-60 w-50 h-50 p-20 md:ml-24 w-full md:w-5/6 '>
                            <p className='text-3xl font-semibold text-white pt-10'>Discuss with your peer</p>
                            <p className='text-xl pt-10 text-white text-justify'>Welcome to our Peer-to-Peer Learning Hub, where knowledge flows freely between like-minded individuals.In this dynamic corner of our platform.</p>
                            <div className="mt-10 md:w-8/12 md:mx-0 w-10/12 item-center text-center">
                                <Link to="/login">
                                    <Button className="text-center" heading="Send Message"></Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default PeerToPeer;
