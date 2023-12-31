import React, { useContext, useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { ThemeContext } from '../../../providers/ThemeProvider';


const FAQ = () => {

    const { theme } = useContext(ThemeContext);

    const [question, setQuestion] = useState([]);

    const controls = useAnimation();

    const [refs, inView] = useInView();

    const [show, setShow] = useState(false);

    const [singleQus, setSingleQus] = useState([]);

    const [activeId, setActiveId] = useState(null);

    const url = 'fiqQuestion.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }, [url])

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);


    const haldleClick = (id) => {
        const filterData = question.find(data => data.id === id)
        setSingleQus(filterData)
        setShow(true)
        setActiveId(activeId === id ? null : id);
    }

    return (
        <div className={`w-10/12 mx-auto lg:my-28 my-16 rounded-lg  ${theme === 'dark' ? 'dark' : ''}`}>

            <div className=' pt-5 mx-auto'>
                <h2 className={`md:text-5xl text-4xl font-[Poppins] border-b-2 lg:w-1/5 w-11/12 mb-8 ${theme === 'dark' ? 'border-[#48cae4]' :
                            theme === 'night' ? 'border-[#b79ced]' :
                                theme === 'light' ? 'border-[#3c6e71]' : ''}`}>FAQ:</h2>
            </div>

            <div className='md:flex items-center gap-20'>

                <div className='md:w-6/12'>

                    <motion.div
                        ref={refs}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        transition={{ duration: 0.9 }} className=" mx-auto overflow-y-auto" style={{ maxHeight: 'calc(60vh - 100px)' }}>

                        {
                            question.map(p => <div key={p.id}>
                                <div onClick={() => haldleClick(p.id)} className={` flex gap-2 mt-2 items-center justify-between mb-3 px-2 py-3  bg-opacity-40 rounded-md shadow-sm duration-700  ${activeId === p.id ? 'bg-[#5c9568]' : 'bg-gray-200'} ${theme === 'light' ? 'hover:bg-[#3c6e71] hover:text-white' : theme === 'dark' ? 'hover:bg-[#051923]' : theme === 'night' ? 'hover:bg-[#0d1b2a]' : ''}`}>
                                    <h2 className=' md:text-xl'>{p?.question}</h2>

                                    <div className='px-5'>

                                        {
                                            activeId === p.id ? (<FaMinus ></FaMinus>) : (<FaPlus ></FaPlus>)
                                        }

                                    </div>

                                </div>

                            </div>

                            )
                        }
                        
                    </motion.div>

                </div>

                <div className='md:w-6/12 lg:pt-0 pt-10'>

                    <motion.div
                        ref={refs}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 100 },
                        }}
                        transition={{ duration: 0.9 }}

                        className="animate-zoom-in">

                        <div className='animate-zoom-in'>
                            <h2 className=' text-2xl mb-2'>{singleQus?.question ? singleQus?.question : "What is porpuse your website?"} </h2>
                            <p className='text-sm md:text-base'> {singleQus?.answer ? singleQus?.answer : "The purpose of our website is to provide a dynamic and engaging platform for knowledge sharing and learning. We aim to foster a vibrant community of individuals who are passionate about exchanging insights, expertise, and experiences across a wide range of topics. Our website offers a diverse array of content, including videos, quizzes, blogs, group messaging, and news feeds, all designed to facilitate meaningful interactions and enhance the learning journey. Whether you're seeking to expand your understanding of a subject, connect with like-minded individuals, or contribute your own expertise, our website is a hub where knowledge is both shared and celebrated."} </p>
                        </div>

                    </motion.div>

                </div>

            </div>

        </div>
    );
};

export default FAQ;