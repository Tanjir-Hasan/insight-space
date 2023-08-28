import React, { useState } from 'react';

const TopVideos = ({ video }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div>
            <div onClick={openModal} className=' flex items-center gap-5 mb-7   bg-opacity-40 rounded-md shadow-md shadow-[#84a98c] m-5 hover:bg-[#84a98c]  duration-700'>
                <div>
                    <iframe className='rounded-md' width="120px" height="80px" src={video.videos} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscree="true"></iframe>
                </div>
                <div>
                    <h2 className='font-[Cinzel]'>{video.message.substring(0, 20)}... {"  "}
                        <span className='text-[#023e8a] hover:font-semibold cursor-pointer'>Read more</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default TopVideos;