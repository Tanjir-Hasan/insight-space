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
        <div className={`${theme === 'dark' ? 'dark' : 'w-11/12 my-14 mx-auto'}`}>
            <div className=" items-center justify-center  md:w-10/12 w-full mx-auto drop-shadow-lg  ">

            {/* <div className=" gap-4 bg-[#689079] items-center justify-center  lg:w-full rounded-lg text-white px-16"> */}
        <div className="justify-between rounded-lg">
            <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto drop-shadow-lg">

            <div className="space-y-5 md:px-0 px-6">

                 
                  <h1 className='text-center md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#84a98c] w-1/2 mx-auto lg:pt-20 pt-10'>
                  Exclusive Membership
                        <br />
                        <span className='text-xl'>- Taking it to the Next Level -</span>
                    </h1>
                    <p className="mb-10 font-sans">Dive into a realm of unparalleled privileges with our Exclusive Membership section. Elevate your experience and gain access to a curated selection of premium content, personalized services, and extraordinary offers</p>
                    <Link to="/paid-members">
                    <button className="font-semibold  mt-5 bg-white text-[#84a98c] px-3 py-2 rounded-sm transition duration-700 ease-in-out ">Show All</button>
                    </Link>

    

            </div>

            </div>
               
                    

                   
        <div className=" relative w-10/12 md:mr-20 hidden sm:block md:block  py-10">
            <div className='grid grid-cols-1 lg:grid-cols-3'>
             
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}
                    className="relative  justify-end gap-10 items-center mb-5 md:w-[100%] rounded-lg" >
                        <div className=" z-10 absolute -top-5 ">
                        <img className="w-15 h-10" src={free}></img>
                        </div>
            
                        <div
                            className="bg-white h-52 p-4 rounded-lg  border-2 backdrop-blur-sm bg-white/30 "
                            >
                            <div className="relative group">    
                            <h2 className='mt-5 font-[Cinzel] text-black text-center'>Free Membership</h2>
                            <span className="absolute -bottom-1 w-9/12 left-10 h-0.5 bg-[#84a98c] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></span>
                            </div>
                            <p className='mt-5 font-[Cinzel] text-black text-center'>Dip your toes into our community with our no-cost Free Membership, offering you a taste of our content and a glimpse into the possibilities that await.</p>
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
                    className="relative left-20 justify-end gap-10 items-center mb-5 md:w-[100%]  rounded-lg" >
                        <div className=" z-10 absolute -top-5 ">
                        <img className="w-15 h-10" src={info}></img>
                        </div>
            
                        <div
                            className="bg-white h-52 p-4 rounded-lg  border-2 backdrop-blur-sm bg-white/30 "
                            >
                            <div className="relative group">    
                            <h2 className='mt-5 font-[Cinzel] text-black text-center'>Basic Membership</h2>
                            <span className="absolute -bottom-1 w-9/12 left-10 h-0.5 bg-[#84a98c] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></span>
                            </div>
                            <p className='mt-5 font-[Cinzel] text-black text-center'>Unlock the door to a range of essential features with our Basic Membership, designed to provide you with foundational benefits and a solid starting point for your journey with us.</p>
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
                    className="relative  justify-end -left-5 gap-10 items-center ml-48 md:w-[100%] h-[80%] rounded-lg" >
                        <div className=" z-10 absolute -top-5">
                        <img className="w-15 h-10" src={vip}></img>
                        </div>
            
                        <div
                            className="bg-white h-52 p-4 rounded-lg  border-2 backdrop-blur-sm bg-white/30 "
                            >
                            <div className="relative group">     
                            <h2 className='mt-5 font-[Cinzel] text-black text-center' >Pro Membership</h2>
                            <span className="absolute -bottom-1 w-9/12 left-10 h-0.5 bg-[#84a98c] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></span>
                            </div>
                            <p className='mt-5 font-[Cinzel] text-black text-center'>Step up your game and take full advantage of our Pro Membership, offering advanced perks, exclusive access, and a premium experience that caters to your aspirations and needs.</p>
                        </div>                
                </motion.div>
                </div>    

                </div>
                    


                    

                </div>

                <div className="lg:hidden sm:block w-11/12 mx-auto py-10 space-y-3">

                        <div
                            className="bg-white h-46 rounded-lg  border-2 backdrop-blur-sm bg-white/30 p-4 "
                            >
                            <h2 className=' text-black text-center '>Free Membership</h2>
                            <p className=' text-black text-center '>Dip your toes into our community with our no-cost Free Membership, offering you a taste of our content and a glimpse into the possibilities that await.</p>
                        </div> 

                        <div
                            className="bg-white h-46 rounded-lg  border-2 backdrop-blur-sm bg-white/30 p-4 "
                            >
                            <h2 className=' text-black text-center '>Basic Membership</h2>
                            <p className=' text-black text-center '>Unlock the door to a range of essential features with our Basic Membership, designed to provide you with foundational benefits and a solid starting point for your journey with us.</p>
                        </div> 

                        <div
                            className="bg-white h-46 rounded-lg border-2 backdrop-blur-sm bg-white/30 p-4 "
                            >
                            <h2 className=' text-black text-center ' >Pro Membership</h2>
                            <p className=' text-black  text-justify '>Step up your game and take full advantage of our Pro Membership, offering advanced perks, exclusive access, and a premium experience that caters to your aspirations and needs.</p>
                        </div> 

                    </div>

                {/* </div>        */}


            </div>
        </div>
    );
};

export default Membership;






