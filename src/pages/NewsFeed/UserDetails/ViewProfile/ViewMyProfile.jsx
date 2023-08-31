import moment from "moment";
import useUser from "../../../../Hooks/useUser";
import Button from "../../../../components/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonWithLoading from "../../../../components/ButtonWithLoading";
import { BsSend } from "react-icons/bs";
import useAuth from "../../../../Hooks/UseAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaRegWindowClose } from "react-icons/fa";



const ViewMyProfile = () => {
    const [userDetails] = useUser();
    const { errorMsg, setErrorMsg, updateUserProfile, btnLoading, setBtnLoading } = useAuth();
    const [isEdit, setIsEdit] = useState(false);
    const { displayName, photoURL, email, _id, date } = userDetails;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = (data) => {
        setErrorMsg("")
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
                        lastUpdate: date
                    };
                    console.log(update_profile_data);
                    axiosSecure.patch('/update_profile', update_profile_data)
                        .then(data => {
                            setBtnLoading(false);
                            reset();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your Profile Update Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                        .catch(err => {
                            setErrorMsg(err.message)
                            setBtnLoading(false);
                        })
                })
                .catch(err => {
                    setErrorMsg(err.message)
                    setBtnLoading(false);
                })
        } else {
            setErrorMsg("")
            setBtnLoading(true);
            const formData = new FormData();

            // image hosting function 
            formData.append('image', data.photo[0]);
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
                        updatedImgUrl = imageResponse.data.display_url;
                        console.log(updatedImgUrl);
                        //  update function
                        const { name } = data;
                        const date = new Date();
                        updateUserProfile(name, updatedImgUrl)
                            .then(() => {
                                const update_profile_data = {
                                    displayName: name || displayName, photoURL: updatedImgUrl,
                                    email: email,
                                    lastUpdate: date
                                };
                                console.log(update_profile_data);
                                axiosSecure.patch('/update_profile', update_profile_data)
                                    .then(data => {
                                        setBtnLoading(false);
                                        reset();
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Your Profile Update Successfully',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    })
                                    .catch(err => {
                                        setErrorMsg(err.message)
                                        setBtnLoading(false);
                                    })
                            })
                            .catch(err => {
                                setErrorMsg(err.message)
                                setBtnLoading(false);
                            })
                    }
                });
        }

    }

    return (
        <div className="relative border md:p-10 p-4 rounded-xl shadow-xl">
            {
                isEdit &&
                <button
                    onClick={() => setIsEdit(!isEdit)}
                    className="absolute right-4 top-4">
                    <FaRegWindowClose
                        className="md:text-2xl text-xl font-bold hover:text-[#84a98c] duration-700"
                    />
                </button>
            }
            <h1 className="text-3xl font-semibold">My Profile</h1>
            {
                isEdit ? <>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="md:flex gap-14 items-center mt-14 mx-10">
                        <div className="grid items-center gap-5">
                            <img className="w-48 h-48 rounded-full mx-auto" src={photoURL} alt="Photo" />
                            {/* photoUrl  */}
                            <div className="mb-1 flex justify-center">
                                <label htmlFor="photo" className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#84a98c] to-[#344e41] rounded-md font-semibold text-white hover:opacity-90 hover:cursor-pointer">
                                    <span className="hover:cursor-pointer">Upload Photo</span>
                                    <input type="file"
                                        id="image"
                                        name="fileInput"
                                        {...register("photo")}
                                        className="absolute inset-0 opacity-0 hover:cursor-pointer" />
                                </label>
                            </div>
                        </div>
                        <div className="md:text-2xl text-base mt-5 w-full md:w-1/2">
                            {/* name */}
                            {/* name */}
                            <div className="mb-1 box-border">
                                <label htmlFor="name" className="text-md block">
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
                                <label htmlFor="email" className="text-md block">
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
                            <ButtonWithLoading icon={<BsSend />} loading={btnLoading} width={"lg:w-1/2 md:w-3/4 sm:w-3/4 w-full"}>Update Now!</ButtonWithLoading>
                        </div>
                    </form>
                </>
                    : <div className="md:flex gap-14 items-center mt-14 mx-10">
                        <div className="grid items-center gap-5">
                            <img className="w-48 h-48 rounded-full mx-auto" src={photoURL} alt="" />
                            {/* Add Outline button component */}
                            <div className="mx-auto w-1/2 md:w-full" onClick={() => setIsEdit(!isEdit)}><Button heading={'Edit Profile'}></Button></div>
                        </div>
                        <div className="md:text-2xl text-base mt-5">

                            <h4 className="grid">
                                <span className="text-xl" >User ID:</span>
                                <span className="font-semibold">{_id}</span>
                            </h4>


                            <h2 className="grid mt-4">
                                <span className="text-xl">Name:</span>
                                <span className="font-semibold">{displayName}</span>
                            </h2>

                            <h3 className="grid mt-4">
                                <span className="text-xl">Email Address:</span>
                                <span className="font-semibold">{email}</span>
                            </h3>
                            <p className="grid mt-4">
                                <span className="text-xl">Join Date:</span>
                                <span className="font-semibold">{moment(date).format('lll')}</span>
                            </p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ViewMyProfile;