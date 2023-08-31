import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import usePopularPost from '../../../Hooks/usePopularPost';

const TopPosts = () => {
    const controls = useAnimation();
    const [refs, inView] = useInView();
    const [popularPost] = usePopularPost();
    const [activeId, setActiveId] = useState(null);
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
    }

    return (
        <div className="">

            {/* top videos section start */}
            <div className="lg:w-3/12 md:w-5/12 mb-5 md:mt-20 md:mb-20 p-3 block md:fixed top-3 right-0">
                <h2 className="text-center text-3xl uppercase mb-5 font-bold  font-[Poppins] border-b-2 border-[#84a98c] md:py-0 py-8">Top Post</h2>
                <motion.div
                    ref={refs}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 },
                    }}
                    transition={{ duration: 0.9 }} className=" mx-auto overflow-y-auto" style={{ maxHeight: 'calc(72vh - 100px)' }}>

                    <div className=''>

                        {
                            popularPost && popularPost.map(top => <div key={top._id}>

                                <div onClick={() => handleTopPost(top._id)} className={`flex gap-2 items-center bg-opacity-40 rounded-md shadow-md mb-5 p-2 hover:bg-[#84a98c] duration-700 ${activeId === top._id ? "bg-[#84a98c]" : ""}`}>

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















                    {/* {
                            videos && videos.map(p => <div key={p.id} onClick={openModal}  >
                                <div onClick={() => haldleClick(p.id)} className={` flex items-center gap-5 mb-7   bg-opacity-40 rounded-md shadow-md shadow-[#84a98c] m-5 hover:bg-[#84a98c]  duration-700 ${activeId === p.id ? 'bg-[#5c9568]' : ''}`}>
                                    <div>


                                        {
                                            activeId === p.id ?
                                                (<iframe className='rounded-md w-32 h-24' src={p?.videos} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscree="true"></iframe>)
                                                :
                                                (<img className='rounded-md w-32 h-24' src={p?.Thumble} alt="" />)
                                        }
                                    </div>
                                    <div>
                                        <h2 className='font-[Cinzel]'>{p.title.substring(0, 20)}... {"  "}
                                            <span className='text-[#023e8a] hover:font-semibold cursor-pointer'>Read more</span>
                                        </h2>
                                        <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(p.date).startOf('hour').fromNow()}</h6>
                                    </div>
                                </div>
                            </div>)
                        } */}
                </motion.div>
            </div>

        </div>
    );
};

export default TopPosts;