import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useUser from "../../../../../Hooks/useUser";
import { FaEdit } from "react-icons/fa";

const CoverPhoto = () => {
  const [userDetails, refetch] = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const [hidden, setHidden] = useState(false);

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("image", data.coverPhoto[0]);
    const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          // image url
          const coverPhotoURL = imageResponse?.data?.display_url;
          const data = { coverPhotoURL, email: userDetails?.email };
          // console.log(data);
          axiosSecure
            .patch("/user/coverPhoto", data)
            .then((data) => {
              // console.log(data);
              setHidden(!hidden);
              refetch();
            })
            .catch((err) => console.log(err.message));
        }
      });
  };

  return (
    <div className="relative">
      {userDetails?.coverPhotoURL ? (
        <img
          src={userDetails?.coverPhotoURL}
          alt="Cover"
          className="w-full h-40 lg:h-72 md:h-52  object-cover"
        />
      )
      :
      (
        <div>
          <img src="https://i.stack.imgur.com/SvWWN.png" alt=""
          className="w-full h-40 lg:h-72 md:h-52  object-cover"
          />
        </div>
      )
    }
      <div className="flex justify-end">
        <label
          htmlFor="photo"
          className="relative inline-flex items-center px-4 py-2 text-[#3c6e71] rounded-md font-semibold hover:opacity-90 hover:cursor-pointer"
        >
          <span className="hover:cursor-pointer">
            {!hidden && (
              <FaEdit className="text-3xl" title="change cover photo"></FaEdit>
            )}
          </span>
          <input
            type="file"
            name="fileInput"
            {...register("coverPhoto")}
            onChange={() => setHidden(!hidden)}
            className="absolute inset-0 opacity-0 hover:cursor-pointer"
          />
        </label>
        {hidden && (
          <button
            className="my-4 mx-8 bg-white border border-gray-300 text-[#3c6e71] hover:bg-[#3c6e71] 
        hover:text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={handleSubmit(onSubmit)}
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default CoverPhoto;
