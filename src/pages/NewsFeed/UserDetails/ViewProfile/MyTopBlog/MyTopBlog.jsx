import moment from 'moment';
import React, { useState } from 'react';
import { FaHistory } from 'react-icons/fa';
import { SlClose } from 'react-icons/sl';
import useBlog from '../../../../../Hooks/useBlog';

const MyTopBlog = () => {
    const [blogs, refetch] = useBlog();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [singleData, setSingleData] = useState([])

    
    const handleDetails = (_id) => {
        const findData = blogs?.find(signleDatas => signleDatas?._id === _id)
        setSingleData(findData)
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='animate-zoom-in'>
            <p className="lg:text-xl pb-2 font-bold">
                Top Blogs <span className='bg-[#344e41]  text-white rounded-full lg:p-1 px-2 lg:px-3'>{blogs?.length}</span>

            </p>
            <div>
                {
                    blogs && blogs?.slice(0, 8)?.map(blog => <div onClick={openModal} key={blog?._id}>

                        <div onClick={() => handleDetails(blog?._id)} className='lg:flex  gap-5 mt-2 items-center   p-1 rounded-lg shadow-lg '>
                            <div className='lg:w-3/12'>
                                <img className='w-full h-14 lg:h-full' src={blog?.imgURL} alt="" />
                            </div>
                            <div className='lg:w-9/12 p-2 font-[Poppins]'>
                                <h2 className='font-[Cinzel] text-xs '>{blog?.text.substring(0, 70)}... {"  "}
                                    <span className='text-[#023e8a] hover:font-semibold cursor-pointer lg:text-sm text-xs'>Read more</span>
                                </h2>
                                <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(blog?.date).startOf('hour').fromNow()}</h6>
                            </div>
                        </div>


                    </div>
                    )
                }
            </div>

            {isModalOpen && (
                <div className="fixed animate-zoom-in inset-0 flex lg:w-8/12 mx-auto items-center justify-center z-50">
                    <div className="fixed inset-0  bg-black opacity-50"></div>
                    <div className="bg-white relative p-4 shadow-lg rounded-lg z-50 zoom-in-out-modal">
                        <button onClick={closeModal}>

                            <SlClose className="text-4xl text-[#3c6e71] absolute top-3 right-7 rounded-full hover:text-white hover:bg-[#3c6e71]" />
                        </button>

                        {/* Modal content with zoom-in/out animation */}
                        <div className="max-h-[100vh] overflow-y-auto text-black animate-zoom-in">

                            <div className=' mx-auto'>
                                <div className="flex space-x-2 mb-4">
                                    <img src={singleData?.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="text-lg font-semibold pt-1">{singleData?.userName}</p>
                                        <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(singleData?.date).startOf('hour').fromNow()}</h6>
                                    </div>
                                </div>
                                <p className='text-sm'>
                                    {singleData?.text}
                                </p>

                                <img className='w-full lg:h-[500px] h-[400px]' src={singleData?.imgURL} alt="" />

                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MyTopBlog;