import moment from "moment";

import Button from "../../../../../components/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonWithLoading from "../../../../../components/ButtonWithLoading";
import { BsSend } from "react-icons/bs";
import useAuth from "../../../../../Hooks/useAuth";

import Swal from "sweetalert2";
import { FaRegWindowClose } from "react-icons/fa";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useUser from "../../../../../Hooks/useUser";

const ViewMyProfile = () => {
  const [userDetails, refetch] = useUser();
  const {
    errorMsg,
    setErrorMsg,
    updateUserProfile,
    btnLoading,
    setBtnLoading,
  } = useAuth();
  const [isEdit, setIsEdit] = useState(false);
  const { displayName, photoURL, email, _id, date } = userDetails;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [axiosSecure] = useAxiosSecure();

  // update function
  const updateProfile = (updateData) => {
    axiosSecure
      .patch("/update_profile", updateData)
      .then((data) => {
        setBtnLoading(false);
        reset();
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Profile Update Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setBtnLoading(false);
      });
  };

  const onSubmit = (data) => {
    setErrorMsg("");
    setBtnLoading(true);
    let updatedImgUrl = "";
    if (!data.photo[0]) {
      updatedImgUrl = photoURL;
      console.log(updatedImgUrl);
      //  update function
      const { name } = data;
      const date = new Date();
      updateUserProfile(name, updatedImgUrl)
        .then(() => {
          const update_profile_data = {
            displayName: name || displayName,
            photoURL: updatedImgUrl,
            email: email,
            lastUpdate: date,
          };
          updateProfile(update_profile_data);
        })
        .catch((err) => {
          setErrorMsg(err.message);
          setBtnLoading(false);
        });
    } else {
      setErrorMsg("");
      setBtnLoading(true);
      const formData = new FormData();

      // image hosting function
      formData.append("image", data.photo[0]);
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
            updatedImgUrl = imageResponse.data.display_url;
            console.log(updatedImgUrl);
            //  update function
            const { name } = data;
            const date = new Date();
            updateUserProfile(name, updatedImgUrl)
              .then(() => {
                const update_profile_data = {
                  displayName: name || displayName,
                  photoURL: updatedImgUrl,
                  email: email,
                  lastUpdate: date,
                };
                updateProfile(update_profile_data);
              })
              .catch((err) => {
                setErrorMsg(err.message);
                setBtnLoading(false);
              });
          }
        });
    }
  };

  return (
    <div className="relative rounded-xl shadow-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:flex gap-5 items-center"
      >
        <div className="grid items-center gap-5">
          <img
            className="w-80 h-80 rounded-full mx-auto"
            src={photoURL}
            alt="Photo"
          />
          {/* photoUrl  */}
          <div className="mb-1 flex justify-center">
            <label
              htmlFor="photo"
              className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3c6e71] to-[#335c67] rounded-md font-semibold text-white hover:opacity-90 hover:cursor-pointer">
              <span className="hover:cursor-pointer">Upload Photo</span>
              <input
                type="file"
                id="image"
                name="fileInput"
                {...register("photo")}
                className="absolute inset-0 opacity-0 hover:cursor-pointer"
              />
            </label>
          </div>
        </div>
        <div className="md:text-xl text-base mt-5 w-full md:w-1/2">
          {/* name */}
          {/* name */}
          <div className="mb-1 box-border">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              className="input-field"
              type="text"
              id="name"
              {...register("name")}
              placeholder="Your Name"
              defaultValue={displayName}
            />
          </div>

          {/* email */}
          {/* email */}
          <div className="mb-1">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              className="input-field"
              type="text"
              id="email"
              {...register("email")}
              placeholder="Enter Your Email"
              defaultValue={email}
              disabled
            />
          </div>
          <ButtonWithLoading
            icon={<BsSend />}
            loading={btnLoading}
            width={"w-full"}
          >
            Update Now!
          </ButtonWithLoading>
        </div>
      </form>
    </div>
  );
};

export default ViewMyProfile;
