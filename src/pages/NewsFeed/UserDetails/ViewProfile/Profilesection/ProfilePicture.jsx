// ProfilePicture.js
import React, { useState } from 'react';
import { SlClose } from 'react-icons/sl';
import useMyPayments from '../../../../../Hooks/useMyPayments';
import useUser from '../../../../../Hooks/useUser';
import ViewMyProfile from './ViewMyProfile';


const ProfilePicture = () => {
  const [myPayments, bages] = useMyPayments();
  const [userDetails] = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mb-2 relative ">
      <div className='flex gap-5'>
        <div>
          <img src={userDetails?.photoURL} alt="Profile" className="w-28 h-28 lg:w-52 lg:h-52 -mt-14 lg:-mt-24 rounded-full border-[#ddd] border" />

          <button onClick={openModal} className="bg-[#3c6e71] mt-3 lg:ml-10 px-6 py-2 font-semibold rounded-md">Edit Profile</button>
          <div className="absolute -bottom-1 -right-2">
            {
              bages?.memberShip === 'Basic' ?
                (
                  <img className='w-10 h-10 rounded-full' src="https://i.ibb.co/r0BMFDp/verified-green-512.webp" alt="" />
                )
                :
                bages?.memberShip === 'Pro' ?
                  (
                    <img className='w-12 h-10 rounded-full' src="https://i.ibb.co/3dzNwLw/download-1-removebg-preview.png" alt="" />
                  )
                  : " "
            }
          </div>
        </div>

        <div>
          <h2 className="lg:text-3xl font-bold capitalize">{userDetails?.displayName}</h2>
          <p className="capitalize text-md">{userDetails?.title}</p>
          <p className="capitalize text-md">{userDetails.address}</p>
        </div>
      </div>

      {/* modal start */}
      {isModalOpen && (
        <div className="fixed animate-zoom-in inset-0 flex  mx-auto items-center justify-center z-50">
          <div className="fixed inset-0  bg-black opacity-50"></div>
          <div className="bg-white md:w-8/12 lg:w-5/12 w-10/12 relative p-4 shadow-lg rounded-lg z-50 zoom-in-out-modal">
            <button onClick={closeModal}>

              <SlClose className="text-4xl text-[#3c6e71] absolute top-3 right-7 rounded-full hover:text-white hover:bg-[#3c6e71]" />
            </button>

            {/* Modal content with zoom-in/out animation */}
            <div className="max-h-[100vh] overflow-y-auto text-black animate-zoom-in">

              <ViewMyProfile></ViewMyProfile>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;