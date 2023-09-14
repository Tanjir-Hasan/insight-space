import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useUser from "../../../../Hooks/useUser";

const CoverPhoto = () => {
  const [userDetails, refetch] = useUser();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [axiosSecure] = useAxiosSecure();


  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('image', data.coverPhoto[0]);
    const image_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    fetch(image_hosting_url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imageResponse => {
        if (imageResponse.success) {
          // image url 
          const coverPhotoURL = imageResponse.data.display_url;
          console.log(coverPhotoURL);
          const data = { coverPhotoURL, email: userDetails?.email }
          axiosSecure.patch("/user/coverPhoto", data)
            .then(data => {
              refetch();
            })
            .catch(err => console.log(err.message))

        }
      })
  }



  return (
    <div>
      {userDetails?.coverPhotoURL &&
        <img
          src={userDetails?.coverPhotoURL}
          alt="Cover"
          className="w-full h-48 object-cover rounded-t-2xl"
        />}
      {!userDetails?.coverPhotoURL && <input type="file" {...register("coverPhoto")} onChange={handleSubmit(onSubmit)}></input>}
    </div>
  );
};

export default CoverPhoto;
