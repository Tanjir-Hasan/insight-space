import React, { useContext, useEffect, useRef, useState } from 'react';
import usePosts from '../../Hooks/usePosts';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import useMyPost from '../../Hooks/useMyPost';
import useUser from '../../Hooks/useUser';
import { ThemeContext } from '../../providers/ThemeProvider';

import { FaArrowRight, FaBookmark, FaComment, FaHeart, FaHistory, FaThList } from 'react-icons/fa';
import moment from "moment";

import useNewsFeedFunctionality from '../../Hooks/useNewsfeedFunctionality';




const BlogFeedss = () => {
    const [posts] = usePosts();
    const [singleData, setSingleData] = useState("");
    const controls = useAnimation();
    const [ref, inView] = useInView();


    const { theme } = useContext(ThemeContext);
    const [userDetails] = useUser();
    const refs = useRef();
    const [hide, setHide] = useState(false);
    const [myPost] = useMyPost()


    const [handleReact, handleBookMark, handleAddComment] = useNewsFeedFunctionality();
    const [isAction, setIsAction] = useState(null)










    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    console.log(posts)

    const haldleClick = (_id) => {
        const findData = posts.find(post => post._id === _id)
        setSingleData(findData)
        console.log(findData)
    }
    return (
        <div
            className={`${theme === 'dark' ? 'dark' : ''} w-10/12 mx-auto flex gap-20`}>




            <div className='w-8/12 rounded-lg border bg-[#f0efeb] border-[#84a98c]'>

                <div className="p-4">
                    <div className="flex space-x-2 mb-4">
                        <img src={singleData.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                        <div>
                            <p className="text-lg font-semibold pt-1">{singleData.userName}</p>
                            <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(singleData.date).startOf('hour').fromNow()}</h6>
                        </div>
                    </div>
                    <p>{singleData.text}</p>
                    {/* {<span onClick={() =>(p.text)} className="underline underline-offset-4 ms-2 text-sm text-green-600">{p.text} See More</span>} */}
                </div>
                <div>
                    {
                        singleData.imgURL && <img src={singleData.imgURL} className="w-full max-h-[600px]" alt="image" />
                    }
                </div>
                <div className="w-full flex items-center py-6 px-8">
                    <div className="w-full flex space-x-8">
                        <button onClick={() => handleReact(singleData?._id, userDetails.email)} className="flex items-center"><FaHeart className={singleData?.react?.includes(userDetails.email) ? "text-3xl text-red-600 me-2" : "text-3xl me-2"}></FaHeart> {singleData?.react?.length}</button>
                        <button onClick={() => setHide(singleData?._id)} className="flex items-center"><FaComment className="text-2xl me-2"></FaComment> {singleData?.comment?.length}</button>
                    </div>
                    <div>
                        <button><FaBookmark onClick={() => handleBookMark(singleData._id, userDetails?.email)} className="text-2xl me-2"></FaBookmark></button>
                    </div>
                </div>
                {/* comment body  */}
                {
                    hide === singleData._id && <div>
                        <div className="flex items-center space-x-2 px-4 py-6 border border-spacing-2">
                            <img src={userDetails.photoURL} alt="user photo" className="w-12 h-12 rounded-full" />
                            <textarea ref={ref} name="" id="" cols="2" rows="1" className="w-full px-4 py-2 border border-spacing-4 rounded-3xl" placeholder="add your answer"></textarea>
                            <button onClick={() => handleAddComment(p, userDetails, ref)} className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 flex items-center">Add<FaArrowRight className="text-2xl ms-2"></FaArrowRight> </button>
                        </div>
                        <div>
                            {
                                singleData?.comment?.map((c, i) => <div className="pt-2 pb-8 px-4" key={i}>
                                    <div className="flex space-x-3 items-center">
                                        <img src={c.photoURL} alt="" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <p className="text-lg font-semibold">{c.displayName}</p>
                                            <p>{c.comment}</p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                }

            </div>

























            {/* 
            <div className="w-6/12   rounded-lg border border-[#84a98c]">

               
                <div className="p-4">
                    <div className="flex space-x-2 mb-4">
                        <img src={singleData?.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                        <div>
                            <p className="text-lg font-semibold pt-1">{singleData?.userName}</p>
                            <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(singleData?.date).startOf('hour').fromNow()}</h6>
                        </div>
                    </div>
                    <p>{singleData?.text}</p>

                </div>
                <div>
                    {
                        singleData?.imgURL && <img src={singleData?.imgURL} className="w-full h-96" alt="image" />
                    }
                </div>



            </div> */}









            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 100 },
                }}
                transition={{ duration: 0.9 }} className=" mx-auto overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>

                {
                    posts && posts.map(p => <div key={p._id} >

                        <div onClick={() => haldleClick(p._id)} className=' flex items-center gap-5 mb-7 px-5 py-8 bg-opacity-40 rounded-md shadow-md shadow-[#84a98c] m-5 hover:bg-[#84a98c] duration-700'>
                            <div>
                                <img className='w-14 h-14 rounded-md' src={p?.imgURL} alt="" />
                            </div>
                            <div>
                                <h2 className='font-[Cinzel]'>{p.text.substring(0, 70)}... {"  "}
                                    <span className='text-[#023e8a] hover:font-semibold cursor-pointer'>Read more</span>
                                </h2>
                                <h2 className='font-[Cinzel]'> written by: {p.userName}</h2>
                            </div>
                        </div>


                    </div>)
                }


            </motion.div>


        </div>
    );
};

export default BlogFeedss;