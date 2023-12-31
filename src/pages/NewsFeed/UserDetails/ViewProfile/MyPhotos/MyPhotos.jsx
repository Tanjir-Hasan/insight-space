import React, { useState } from 'react';
import { SlClose } from 'react-icons/sl';
import useMyPost from '../../../../../Hooks/useMyPost';


const MyPhotos = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [myPost] = useMyPost();

    const [photos, setPhotos] = useState([]);
    // console.log(myPost)

    const handlePhoto = (_id) => {
        const findData = myPost?.find(photo => photo?._id === _id)
        setPhotos(findData)
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDownloadClick = () => {
        // Trigger the download using downloadjs
        download(photos?.imgURL, 'image.jpg');
    };

    return (
        <div className='px-4 h-screen'>
            <p className="text-xl border-b pb-2 border-[#3c6e71] font-bold">
                My Photos
                {/* <span className='bg-[#344e41] text-white rounded-full p-1 px-3'>{myPost?.length}</span> */}
            </p>

            {
                myPost?.length > 0 ?
                    <div className="lg:flex lg:flex-wrap md:grid md:grid-cols-2 mt-5 gap-5">
                        {myPost?.map((image, index) => (
                            <div key={image?._id}>
                                <div onClick={openModal}>
                                    {
                                        image?.imgURL && <img onClick={() => handlePhoto(image?._id)} className='lg:h-40 lg:w-60 w-full h-52  md:mb-0 mb-5' src={image?.imgURL} alt="" />
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    (
                        <h2 className='lg:text-3xl text-xl  font-semibold text-center mt-20'>You haven't uploaded any photo yet!</h2>
                    )
            }


            {/* modal start */}
            {isModalOpen && (
                <div className="fixed animate-zoom-in  inset-0 flex  mx-auto items-center justify-center z-50">
                    <div className="fixed inset-0   bg-black opacity-50"></div>
                    <div className="bg-white relative w-full p-4 shadow-lg rounded-lg z-50 zoom-in-out-modal">
                        <button onClick={closeModal}>

                            <SlClose className="text-4xl text-[#3c6e71] absolute top-0 right-0 rounded-full hover:text-white hover:bg-[#3c6e71]" />
                        </button>

                        {/* Modal content with zoom-in/out animation */}
                        <div className="max-h-[95vh] overflow-y-auto text-black animate-zoom-in">

                            <div className=' mx-auto'>
                                <button onClick={handleDownloadClick} href={photos?.imgURL} download='image.jpg' className="block mt-2 text-blue-500">
                                    Download
                                </button>
                                <img className='download w-full ' src={photos?.imgURL} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default MyPhotos;