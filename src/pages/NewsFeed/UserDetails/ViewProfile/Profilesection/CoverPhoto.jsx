import React from "react";
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
          console.log(data);
          axiosSecure
            .patch("/user/coverPhoto", data)
            .then((data) => {
              console.log(data);
              refetch();
            })
            .catch((err) => console.log(err.message));
        }
      });
  };

  return (
    <div className="relative">
      {userDetails?.coverPhotoURL && (
        <img
          src={userDetails?.coverPhotoURL}
          alt="Cover"
          className="w-full md:h-48  object-cover"
        />
      )}
      <div className="flex justify-end">
        {/* <FaEdit className="text-3xl" title="change cover photo"></FaEdit> */}
      </div>

      <input
        className="absolute  top-1 text-2xl"
        type="file"
        {...register("coverPhoto")}
        onChange={handleSubmit(onSubmit)}
      ></input>
    </div>
  );
};

export default CoverPhoto;
