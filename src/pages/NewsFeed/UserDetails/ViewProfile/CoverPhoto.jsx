import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const CoverPhoto = () => {
  // Replace 'cover-photo-url' with the URL of the cover photo
  const coverPhotoUrl = "https://i.ibb.co/rt3cTCG/pexels-ni-san-135033.jpg";

  const inputRef = useRef(null);
  const [ image, setImage] = useState("")

  const [axiosSecure] = useAxiosSecure();

  const handleImageClick = () =>{
    inputRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setImage(event.target.files[0])
    axiosSecure.post("/coverphoto")
            .then(data => {
                if (data.data) {
                    alert('Picture is uploaded')
                }
            })
  }

  return (
    <div className="" onClick={handleImageClick}>
      {/* <img
        src={coverPhotoUrl}
        alt="Cover"
        className="w-full h-48 object-cover rounded-t-2xl"
      /> */}
      {image ? (
        <img
        src={URL.createObjectURL(image)}
        alt="Cover"
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      ) : (
        <img
        src={image}
        alt="Cover"
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      ) }
      <input type="file" ref={inputRef} onChange={handleImageChange}></input>
    </div>
  );
};

export default CoverPhoto;

{/* <img
        src={coverPhotoUrl}
        alt="Cover"
        className="w-full h-48 object-cover rounded-t-2xl"
      /> */}
