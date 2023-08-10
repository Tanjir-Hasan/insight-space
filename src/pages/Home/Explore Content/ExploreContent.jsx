import React from 'react';
import { useContext } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const ExploreContent = () => {

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
        <div className={`${theme === 'dark' ? 'dark' : ''} md:pt-20 pt-10`}>

            <div className="md:w-10/12 w-11/12 mx-auto space-y-10 md:pb-20 pb-10">

                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className="md:text-5xl text-3xl font-[Poppins] border-b-2 border-[#84a98c] lg:w-1/2 w-11/12">
                    Explore Content
                </motion.h1>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 },
                    }}
                    transition={{ duration: 0.9 }} className="w-11/12 mx-auto overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">News & Updates</h2>
                                    <p className="font-[Cinzel] text-black">
                                        Stay informed about the latest happenings from around the world. Engage with news articles, insightful analyses, and thought-provoking discussions on current events.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Creative Arts </h2>
                                    <p className="font-[Cinzel] text-black">
                                        Immerse yourself in the world of creativity. Explore stunning artworks, photography, literature, and all things artistic that inspire the imagination.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Lifestyle & Hobbies </h2>
                                    <p className="font-[Cinzel] text-black">
                                        Uncover new hobbies or indulge in your existing interests. From travel diaries to culinary adventures, find content that adds excitement to your everyday life.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Wellness & Self-Care </h2>
                                    <p className="font-[Cinzel] text-black">
                                        Prioritize your well-being with content focused on mental and physical health. Discover tips for self-care, mindfulness, fitness routines, and more.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Technology & Innovation </h2>
                                    <p className="font-[Cinzel] text-black">
                                        Stay at the forefront of tech trends. Delve into discussions about the latest gadgets, innovations, coding, and the impact of technology on our lives.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Entertainment Buzz </h2>
                                    <p className="font-[Cinzel] text-black">
                                        Experience the glitz and glamour of the entertainment world. Engage with movie reviews, celebrity interviews, TV show discussions, and pop culture updates.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Science & Exploration </h2>
                                    <p className="font-[Cinzel] text-black">
                                        Feed your curiosity about the cosmos, the natural world, and scientific breakthroughs. Dive into fascinating discussions and discoveries.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Travel & Adventure </h2>
                                    <p className="font-[Cinzel] text-black">

                                        Embark on virtual journeys to far-off lands. Explore travel stories, breathtaking destinations, and tips for making the most of your adventures.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Food & Cuisine </h2>
                                    <p className="font-[Cinzel] text-black">

                                        Satisfy your taste buds with culinary delights. From recipes to food photography, join the gastronomic exploration of diverse cuisines.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Personal Stories </h2>
                                    <p className="font-[Cinzel] text-black">

                                        Connect on a personal level through real-life stories. Experience the triumphs and challenges of individuals who share their experiences and insights.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Fashion & Style </h2>
                                    <p className="font-[Cinzel] text-black">

                                        Discover the latest trends in fashion and style. Explore outfit inspiration, fashion tips, and discussions on personal expression through clothing.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Social Causes </h2>
                                    <p className="font-[Cinzel] text-black">
                                        Join discussions about important social and environmental issues. Learn about advocacy efforts, community initiatives, and ways to make a positive impact.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Sports & Fitness </h2>
                                    <p className="font-[Cinzel] text-black">
                                        Fuel your love for sports and physical activity. Engage in conversations about sports events, fitness routines, and training tips.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Parenting & Family </h2>
                                    <p className="font-[Cinzel] text-black">
                                        Connect with fellow parents and caregivers. Find valuable insights, parenting advice, and heartwarming family stories.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="p-8">
                            <div className="flex justify-between items-center rounded-lg shadow-md p-6 transition duration-300 bg-[#f0efeb] text-black hover:text-[#84a98c]">
                                <div>
                                    <h2 className="text-xl font-[Poppins] font-semibold mb-4">Education & Learning</h2>
                                    <p className="font-[Cinzel] text-black">
                                        Feed your thirst for knowledge with educational content. Engage in discussions about learning resources, academic pursuits, and skill development.
                                    </p>
                                </div>
                                <BiRightArrow className='text-5xl' />
                            </div>
                        </div>
                    </Link>

                </motion.div>

            </div>
        </div>
    );
};

export default ExploreContent;