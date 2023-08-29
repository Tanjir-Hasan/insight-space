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

                <div className=" gap-4 bg-[#759a85] backdrop-blur-sm bg-white/30 lg:w-full rounded-lg text-white px-16">
                <div className='flex items-center justify-center  backdrop-blur-sm bg-white/30 p-20'>
                        <div className='w-5/6'>
                            <h1 className="text-3xl mb-5 mt-10">Exclusive Membership: Unlock a World of Benefits</h1>
                            <p className="mb-5 font-sans">Dive into a realm of unparalleled privileges with our Exclusive Membership section. Elevate your experience and gain access to a curated selection of premium content, personalized services, and extraordinary offers</p>
                            <Link to="/paid-members">
                            <button className="font-semibold bg-white text-[#84a98c] px-3 py-2 rounded-sm transition duration-700 ease-in-out ">Show All</button>
                            </Link>

                        </div>
                    </div>
                    

                    {/* <!-- 3 reviewers --> */}
        <div className=" relative w-10/12 md:mr-20 hidden sm:block  py-10">
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
                        <div class=" z-10 absolute -top-5 ">
                        <img className="w-15 h-10" src={free}></img>
                        </div>
            
                        <div
                            className="bg-white h-48 rounded-lg  border-2 backdrop-blur-sm bg-white/30 "
                            >
                            <h2 className='mt-5 font-[Cinzel] text-black text-center'>Free Membership</h2>
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
                        <div class=" z-10 absolute -top-5 ">
                        <img className="w-15 h-10" src={info}></img>
                        </div>
            
                        <div
                            className="bg-white h-48 rounded-lg  border-2 backdrop-blur-sm bg-white/30 "
                            >
                            <h2 className='mt-5 font-[Cinzel] text-black text-center'>Basic Membership</h2>
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
                        <div class=" z-10 absolute -top-5">
                        <img className="w-15 h-10" src={vip}></img>
                        </div>
            
                        <div
                            className="bg-white h-48 rounded-lg  border-2 backdrop-blur-sm bg-white/30 "
                            >
                            <h2 className='mt-5 font-[Cinzel] text-black text-center' >Pro Membership</h2>
                            <p className='mt-5 font-[Cinzel] text-black text-center'>Step up your game and take full advantage of our Pro Membership, offering advanced perks, exclusive access, and a premium experience that caters to your aspirations and needs.</p>
                        </div>                
                </motion.div>
                </div>    

                </div>
                    


                    

                </div>

                <div
                        className="lg:hidden sm:block w-11/12 mx-auto py-10 space-y-3">

                        <div
                            className="bg-white h-36 rounded-lg  border-2 backdrop-blur-sm bg-white/30 "
                            >
                            <h2 className=' text-black text-center '>Free Membership</h2>
                            <p className=' text-black text-center '>Dip your toes into our community with our no-cost Free Membership, offering you a taste of our content and a glimpse into the possibilities that await.</p>
                        </div> 

                        <div
                            className="bg-white h-36 rounded-lg  border-2 backdrop-blur-sm bg-white/30 "
                            >
                            <h2 className=' text-black text-center '>Basic Membership</h2>
                            <p className=' text-black text-center '>Unlock the door to a range of essential features with our Basic Membership, designed to provide you with foundational benefits and a solid starting point for your journey with us.</p>
                        </div> 

                        <div
                            className="bg-white h-36 rounded-lg border-2 backdrop-blur-sm bg-white/30 "
                            >
                            <h2 className=' text-black text-center ' >Pro Membership</h2>
                            <p className=' text-black  text-justify '>Step up your game and take full advantage of our Pro Membership, offering advanced perks, exclusive access, and a premium experience that caters to your aspirations and needs.</p>
                        </div> 

                    </div>


            </div>
        </div>
    );
};

export default Membership;






//  {/* <!-- top reviewer --> */}

//  <div className=" left-20 md:left-32 opacity-40 w-3/4">
//  <div className=" relative bg-white h-56 rounded-full text-black flex px-5 item-center">
//      <div className="absolute -top-5 -left-5">
//          <img></img>
//      </div>
//      <div>
//          <p className="mb-5 font-sans">We are providing the best and suitable home insurance services for the people who are interested to treatment</p>
//          <h4 className="mb-3">Ilham Yuda</h4>
//          <small className="font-semibold">Businessman</small>
//      </div>
//  </div>
// </div>






// {/* <!-- bottom reviewer --> */}
// <div className=" left-20 mt-10 md:left-32 opacity-40 w-3/4">
// <div className=" relative bg-white h-56 rounded-full text-black flex px-5 item-center">
//     <div className="absolute -top-5 -left-5">
//         <img></img>
//     </div>
//     <div>
//         <p className="mb-5 font-sans">We are providing the best and suitable home insurance services for the people who are interested to treatment</p>
//         <h4 className="mb-3">Ilham Yuda</h4>
//         <small className="font-semibold">Businessman</small>
//     </div>
// </div>
// </div>

{/* <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}
                    className="   justify-end gap-10 items-center  md:w-[80%] " >
            
                        <div
                            className="bg-white h-46 rounded-lg border-2  "
                            >
                            {/* <img className=' h-36 w-36' src={} alt="" /> */}
                //         </div>                
                // </motion.div> */}