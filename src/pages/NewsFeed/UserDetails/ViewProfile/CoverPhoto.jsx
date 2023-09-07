import React from "react";

const CoverPhoto = () => {
  // Replace 'cover-photo-url' with the URL of the cover photo
  const coverPhotoUrl = "https://i.ibb.co/rt3cTCG/pexels-ni-san-135033.jpg";

  return (
    <div className="">
      <img
        src={coverPhotoUrl}
        alt="Cover"
        className="w-full h-48 object-cover rounded-t-2xl"
      />
    </div>
  );
};

export default CoverPhoto;
