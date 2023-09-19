import moment from 'moment';
import React, { useContext, useState } from 'react';
import { FaComment, FaHeart, FaHistory } from 'react-icons/fa';
import { SlClose } from 'react-icons/sl';
import { ThemeContext } from '../../providers/ThemeProvider';

const BlogCard = ({ blogs, latest }) => {

    const { theme } = useContext(ThemeContext);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [hovered, setHovered] = useState(false);

    const [singleData, setSingleData] = useState([]);

    // console.log(singleData)

    const handleHover = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleDateils = (_id) => {
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
        <div>

            <div onClick={openModal}>

                <div onClick={() => handleDateils(latest?._id)}
                    className={`relative  overflow-hidden rounded-md transition-transform duration-500 transform hover:scale-105`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Card Image */}
                    <div className="w-full md:h-3/5">
                        <img
                            src={latest?.imgURL}
                            alt="Card Image"
                            className="md:h-96 h-56 w-full rounded-md object-cover transition-transform duration-500 transform hover:scale-105"
                        />
                    </div>


                    {/* Card Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-white to-gray-300 text-gray-800 transition-transform duration-500 ">

                        <h2 className='font-[Cinzel] text-xl md:text-3xl'>{latest?.text.substring(0, 70)}... {"  "}
                            <span className={`cursor-pointer ${theme === 'dark' ? 'text-[#48cae4]' :
                                                theme === 'night' ? 'text-[#b79ced]' :
                                                    theme === 'light' ? 'text-[#3c6e71]' : ''}`}>Read more</span>
                        </h2>
                        
                    </div>

                    {/* Additional Card Contents (Hidden by Default) */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r  transition-transform duration-1000 ${hovered
                        ? 'translate-y-0 bg-black text-white h-3/4'
                        : 'translate-y-full  from-white to-gray-300text-gray-800 '
                        }`} >

                        <main>

                            <div className="flex space-x-2 mb-6">
                                <img src={singleData?.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                                <div>
                                    <p className="text-lg font-semibold pt-1">{singleData?.userName}</p>
                                    <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(singleData?.date).startOf('hour').fromNow()}</h6>
                                </div>
                            </div>

                            <h2 className='font-[Cinzel] md:text-2xl text-xl'>{latest?.text.substring(0, 70)}... {"  "}
                                <span className='text-[#bbd2ef] hover:font-semibold cursor-pointer'>Read more</span>
                            </h2>

                            <div className="w-full flex mt-5 space-x-8">

                                <button className="flex items-center gap-1"><FaHeart className='text-red-500'></FaHeart> {singleData?.react?.length}</button>

                                <button className="flex items-center gap-1"><FaComment ></FaComment> {singleData?.comment?.length}</button>

                            </div>

                        </main>

                    </div>

                </div>

            </div>

            {/* modal start */}

            {isModalOpen && (
                <div className="fixed animate-zoom-in inset-0 flex md:w-8/12 w-10/12 mx-auto items-center justify-center z-50">

                    <div className="fixed inset-0  bg-black opacity-50"></div>
                    <div className="bg-white relative p-4 shadow-lg rounded-lg z-50 zoom-in-out-modal">

                        <button onClick={closeModal}>

                            <SlClose className="text-4xl text-[#3c6e71] absolute top-3 right-7 rounded-full hover:text-white hover:bg-[#3c6e71]" />
                        </button>

                        {/* Modal content with zoom-in/out animation */}

                        <div className="max-h-[95vh] overflow-y-auto text-black animate-zoom-in">

                            <div className=' mx-auto'>
                                <div className="flex space-x-2 mb-4">
                                    <img src={singleData?.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="text-lg font-semibold pt-1">{singleData?.userName}</p>
                                        <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(singleData?.date).startOf('hour').fromNow()}</h6>
                                   </div>
                                </div>

                                <p>
                                    {singleData?.text}
                                </p>
                                <img className='w-full' src={singleData?.imgURL} alt="" />

                            </div>
                        </div>

                    </div>

                </div>
            )}

        </div>

    );

};

export default BlogCard;