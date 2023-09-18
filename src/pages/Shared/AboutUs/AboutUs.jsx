import React, { useEffect } from 'react';
import { useContext } from 'react';
import tick from '../../../assets/images/icons/checked.png'
import OurTeam from './OurTeam';
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '../../../providers/ThemeProvider';
import FAQ from './FAQ';


const AboutUs = () => {

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
        <div>
            <div className={`${theme}`}>

                <div className="Insight-space justify-center items-center text-white">

                    <div className='bg-fixed bg-[url("https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-no-repeat bg-cover'>

                        <div className="lg:flex justify-between rounded-lg">

                            <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto drop-shadow-lg">

                                <div className="space-y-5 md:px-0 px-6 ">

                                    <div className={`${theme === 'dark' ? ' text-black  p-5 rounded-lg' : 'text-black'}`}>

                                        <h1 className="text-4xl mb-5 mt-10 font-bold font-[Poppins]">About Us</h1>

                                        <ul className="font-[Cinzel] ">
                                            <li className="list-[upper-roman] list-inside mb-2">Open Exchange of Ideas: Insight Space facilitate the open sharing of information.</li>
                                            <li className="list-[upper-roman] list-inside mb-2">Continuous Learning: We provide accessible resources for ongoing learning.</li>
                                            <li className="list-[upper-roman] list-inside mb-2">Community Engagement: Insight Space platforms foster communities <br></br> where users can connect, discuss, and network with peers.</li>
                                        </ul>

                                    </div>

                                    <div className="md:w-8/12 md:mx-0 w-11/12 mx-auto">
                                        <Link to="/feedback">
                                            <Button heading="Feedback"></Button>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                            {/* right side card for large device*/}

                            <div className="relative w-10/12 hidden sm:hidden md:hidden lg:block xl:block py-24">

                                {/* <!-- banner top card --> */}

                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={controls}
                                    variants={{
                                        visible: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -100 },
                                    }}
                                    transition={{ duration: 0.9 }}

                                    className={`w-full md:w-5/6 bg-slate-700  duration-500 rounded-3xl mb-5 ${theme === 'light' ? 'hover:bg-[#3c6e71]' : theme === 'dark' ? 'hover:bg-[#051923]' : theme === 'night' ? 'hover:bg-[#0d1b2a]' : ''}`}>
                                    <div className="relative h-40 rounded-lg flex px-5 items-center">

                                        <div className='flex gap-3'>

                                            <div>
                                                <img className="w-52" src={tick}></img>
                                            </div>

                                            <div>
                                                <p className=" font-[Cinzel] text-justify">News feed for Timely Updates: news feed delivers a continuous stream of relevant posts. Users can stay informed about the latest trends,ensuring they remain up-to-date with relevant information within their field of interest.</p>
                                            </div>

                                        </div>

                                    </div>

                                </motion.div>

                                {/* <!-- banner middle card --> */}

                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={controls}
                                    variants={{
                                        visible: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -100 },
                                    }}
                                    transition={{ duration: 0.9 }}

                                    className={`w-full md:w-5/6 bg-slate-700  duration-500 rounded-3xl mb-5 ${theme === 'light' ? 'hover:bg-[#3c6e71]' : theme === 'dark' ? 'hover:bg-[#051923]' : theme === 'night' ? 'hover:bg-[#0d1b2a]' : ''}`}>

                                    <div className="relative h-40 rounded-lg flex px-5 items-center">

                                        <div className='flex gap-3'>

                                            <div>
                                                <img className="w-52" src={tick}></img>
                                            </div>

                                            <div>

                                                <p className=" font-[Cinzel] text-justify">Blog Writing and Sharing: This feature encourages individuals to share their expertise, experiences, and unique perspectives, contributing valuable insights to the platform's community. Blogs can cover a wide range of topics.</p>

                                            </div>

                                        </div>

                                    </div>

                                </motion.div>

                                {/* <!-- banner bottom card --> */}

                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={controls}
                                    variants={{
                                        visible: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -100 },
                                    }}
                                    transition={{ duration: 0.9 }}

                                    className={`w-full md:w-5/6 bg-slate-700  duration-500 rounded-3xl mb-5 ${theme === 'light' ? 'hover:bg-[#3c6e71]' : theme === 'dark' ? 'hover:bg-[#051923]' : theme === 'night' ? 'hover:bg-[#0d1b2a]' : ''}`}>

                                    <div className="relative h-40 rounded-lg flex px-5 items-center">

                                        <div className='flex gap-3'>

                                            <div>
                                                <img className="w-52" src={tick}></img>
                                            </div>

                                            <div>

                                                <p className=" font-[Cinzel] text-justify">Group Study and Q&A Interaction:It allows users to form study groups and collaborative learning environments. Additionally, the question and answer functionality enables users to ask queries, seek advice, and engage in discussions.</p>

                                            </div>

                                        </div>

                                    </div>

                                </motion.div>

                            </div>

                            {/* right side card for small device */}

                            <div className="lg:hidden sm:block w-11/12 mx-auto py-10 space-y-3">

                                <div className={`rounded-xl p-5 ${theme === 'light' ? 'bg-[#3c6e71] opacity-70' : theme === 'dark' ? 'bg-[#051923]  opacity-70' : theme === 'night' ? 'bg-[#0d1b2a]  opacity-70' : ''}`}>

                                    <div className="flex justify-center">
                                        {/* <img className=" h-20" src={icon2} alt="" /> */}
                                    </div>
                                    <p className="mt-5 font-[Cinzel] text-justify">Feedback and Continuous Improvement: Users can seek feedback on their work, ideas, or projects, leading to refinement and improvement. Constructive criticism and suggestions can be shared in a supportive environment.</p>

                                </div>

                                <div className={`rounded-xl p-5 ${theme === 'light' ? 'bg-[#3c6e71] opacity-70' : theme === 'dark' ? 'bg-[#051923] opacity-70' : theme === 'night' ? 'bg-[#0d1b2a]  opacity-70' : ''}`}>
                                    <div className="flex justify-center">
                                        {/* <img className=" h-20" src={icon3} alt="" /> */}
                                    </div>
                                    <p className="mt-5 font-[Cinzel] text-justify">Preservation of Institutional Knowledge: As employees come and go, organizations risk losing valuable institutional knowledge. Knowledge sharing platforms help preserve this knowledge by capturing it in a format that can be passed on to new employees.</p>
                                </div>

                                <div className={`rounded-xl p-5 ${theme === 'light' ? 'bg-[#3c6e71] opacity-70' : theme === 'dark' ? 'bg-[#051923] opacity-70' : theme === 'night' ? 'bg-[#0d1b2a]  opacity-70' : ''}`}>

                                    <div className="flex justify-center">
                                        {/* <img className=" h-20" src={icon1} alt="" /> */}
                                    </div>

                                    <p className="mt-5 font-[Cinzel] text-justify">Accessibility and Convenience: Knowledge sharing platforms provide a central repository where information, expertise, and resources are accessible at any time and from anywhere. This convenience is especially valuable for remote teams, global collaborations, or individuals seeking information on the go.</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <FAQ></FAQ>

                <OurTeam></OurTeam>

            </div>

        </div>

    );
};

export default AboutUs;