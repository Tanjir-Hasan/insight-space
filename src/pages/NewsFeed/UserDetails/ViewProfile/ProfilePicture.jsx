// ProfilePicture.js
import React from 'react';
import useUser from '../../../../Hooks/useUser';

const ProfilePicture = () => {
  // Replace 'profile-picture-url' with the URL of the profile picture
  // const profilePictureUrl = {userDetails.photoURL};
  const [userDetails] = useUser();
  console.log(userDetails);
  return (
    <div className="mb-4">
      <img src={userDetails.photoURL} alt="Profile" className="w-24 h-24 rounded-full border-[#ddd] border" />
    </div>
  );
};

export default ProfilePicture;