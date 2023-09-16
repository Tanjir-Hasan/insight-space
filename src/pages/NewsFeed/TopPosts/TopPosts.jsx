import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import usePopularPost from '../../../Hooks/usePopularPost';
import { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import TopPostShow from './TopPostShow';

const TopPosts = () => {

    const { theme } = useContext(ThemeContext);

    const controls = useAnimation();
    const [refs, inView] = useInView();
    const [popularPost] = usePopularPost();
    const [activeId, setActiveId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [topPost, setTopPost] = useState([])

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = '';
    };
    // console.log(popularPost)

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const handleTopPost = (_id) => {
        setActiveId(activeId === _id ? null : _id);
        const findData = popularPost.find(singleData => singleData._id === _id)
        setTopPost(findData)
        console.log(_id)
    }

    return (
        <div className="">

            {/* top post section start */}
            <div className="lg:w-3/12 md:w-5/12 mb-5 md:mt-20 md:mb-20 p-3 md:fixed top-0 right-0 hidden md:block lg:block xl">

                <h2 className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#48cae4]'} border-b-2 text-center text-3xl uppercase mb-5 font-bold font-[Poppins] md:py-0 py-8`}>Top Post</h2>

                <motion.div
                    ref={refs}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 },
                    }}
                    transition={{ duration: 0.9 }} className="mx-auto overflow-y-auto" style={{ maxHeight: 'calc(82vh - 100px)' }}>

                    <div className=''>
                        {
                            popularPost && popularPost.map(top => <div onClick={openModal} key={top._id}>

                                <div onClick={() => handleTopPost(top._id)} 
                                className={`flex gap-2 items-center bg-opacity-40 rounded-md shadow-md mb-5 p-2 hover:bg-[#3c6e71] duration-700 ${activeId === top._id ? "bg-[#3c6e71]" : ""} ${theme === 'light' ? "hover:text-white" : ""}`}>

                                    {
                                        top?.imgURL &&
                                        <div className='w-[20%]'>
                                            <img className='h-full w-full' src={top?.imgURL} alt="" />
                                        </div>
                                    }
                                    <div className='w-[80%] p-1'>
                                        <h2 className=''>{top.text.substring(0, 50)}... {"  "}
                                            <span className='text-[#023e8a] hover:font-semibold cursor-pointer'>Read more</span>
                                        </h2>
                                        <h2 className=' font-semibold'>Author: {top.userName}</h2>
                                    </div>

                                </div>
                            </div>)}
                    </div>
                </motion.div>
            </div>



            <div className="min-h-screen flex items-center justify-center">
                <TopPostShow topPost={topPost} isOpen={isModalOpen} onClose={closeModal}>             
                </TopPostShow>
            </div>










        </div>
    );
};

export default TopPosts;