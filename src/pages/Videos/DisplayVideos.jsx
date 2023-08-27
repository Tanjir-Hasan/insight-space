import React, { useState } from 'react';
import { FaArrowRight, FaBookmark, FaComment, FaEllipsisV, FaHeart, FaHistory } from 'react-icons/fa';
import moment from "moment";


const DisplayVideos = ({ video, videos }) => {
    const [activeId, setActiveId] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const haldleClick = (id) => {
        // const findData = videos.find(post => post.id === id)
        // setShowVideo(findData)
        setActiveId(activeId === id ? null : id);

    }


    return (
        <div className=' bg-[#f0efeb] my-6 rounded-lg border border-[#84a98c]'>
            <div className="flex space-x-2 mb-4">
                <img src={video.img ? video.img : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} alt="user photo" className="w-12 h-12 rounded-full" />
                <div>
                    <p className="text-lg font-semibold pt-1">{video.name}</p>
                    <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(video.date).startOf('hour').fromNow()}</h6>
                </div>
            </div>

            <div>
                <h2 className='my-2'>{video.Description}</h2>

                <div onClick={() => haldleClick(video.id)} className='relative' >
                    {
                        activeId === video.id ?
                            (<iframe className='rounded-md w-full h-96 ' src={video.videos} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscree="true"></iframe>)
                            :
                            (<img className="rounded-md w-full h-96" src={video?.Thumble} alt="" />)
                    }

                    {/* <img className=' absolute top-40 right-72 rounded-3xl h-20 w-28' src="https://e7.pngegg.com/pngimages/12/32/png-clipart-youtube-html5-video-youtube-blue-logo.png" alt="" /> */}
                </div>
                <div className="w-full flex items-center py-6 px-8">
                    <div className="w-full flex space-x-8">
                        <button className="flex items-center"><FaHeart ></FaHeart></button>
                        <button className="flex items-center"><FaComment className="text-2xl me-2"></FaComment> </button>
                    </div>
                    <div>
                        <button><FaBookmark onClick={() => handleBookMark(p._id, userDetails?.email)} className="text-2xl me-2" title="book mark"></FaBookmark></button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default DisplayVideos;