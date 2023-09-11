// ProfilePicture.js
import React from 'react';
import useMyPayments from '../../../../Hooks/useMyPayments';
import useUser from '../../../../Hooks/useUser';

const ProfilePicture = () => {
  const [myPayments, bages] = useMyPayments();
  // Replace 'profile-picture-url' with the URL of the profile picture
  // const profilePictureUrl = {userDetails.photoURL};
  const [userDetails] = useUser();
  // console.log(userDetails);
  return (
    <div className="mb-4 relative">
      <img src={userDetails.photoURL} alt="Profile" className="w-24 h-24 rounded-full border-[#ddd] border" />
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
  );
};

export default ProfilePicture;