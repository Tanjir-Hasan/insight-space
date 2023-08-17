import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogIn/SocialLogin";
import useAuth from "../../../../Hooks/UseAuth";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import Button from "../../../../components/Button";
import ButtonWithLoading from "../../../../components/ButtonWithLoading";
import { useState } from "react";

const Signup = () => {
  const { theme } = useContext(ThemeContext);
  const { createUser, errorMsg, setErrorMsg, updateUserProfile, btnLoading, setBtnLoading } = useAuth();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const location = useLocation()
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  // create user and user details set on database 
  const onSubmit = (data) => {
    setErrorMsg("")
    setBtnLoading(true);
    const formData = new FormData();
    // image hosting function 
    formData.append('image', data.photo[0]);
    const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    fetch(image_hosting_url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imageResponse => {
        if (imageResponse.success) {
          // image url 
          const imgURL = imageResponse.data.display_url;

          //  signUp functions 
          const { name, email, password } = data;
          const date = new Date();
          createUser(email, password)
            .then(result => {
              console.log(result.user);

              if (result.user) {
                updateUserProfile(name, imgURL)
                  .then(() => {
                    const newUser = { displayName: name, email, photoURL: imgURL, date, role: "regular" }
                    axios.post('https://insight-space-server.vercel.app/add-user', newUser)
                      .then(data => {
                        setBtnLoading(false);
                        reset();
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Your account Created Successfully',
                          showConfirmButton: false,
                          timer: 1500
                        })
                        navigate(from, { replace: true });
                      })
                      .catch(err => {
                        setErrorMsg(err.message)
                        setBtnLoading(false);
                      })
                  })
              }
            })
            .catch(err => {
              setErrorMsg(err.message)
              setBtnLoading(false);
            })

        }
      })

  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} font-[Cinzel] pb-8`}>

      <h2 className="text-center font-[Poppins] lg:text-4xl text-3xl font-semibold py-8">Create a new account</h2>

      <div className="flex flex-col md:flex-row justify-center items-center pt-5">

        <div className="w-full md:w-1/2 mt-5 md:mt-0">

          <img src="./login.jpg" alt="" />

        </div>

        <div className="lg:w-2/3 w-full lg:px-0 px-6">

          <div className="w-full md:w-3/4 mx-auto shadow-lg shadow-[#344e41] rounded-md md:p-12 p-6">
            {/* signup form  */}
            {/* signup form  */}
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  required
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
                  required
                />
              </div>
              {/* confirm password  */}
              {/* confirm password  */}
              <div className="mb-1">
                <label htmlFor="password" className="text-md block">
                  Password
                </label>
                <input
                  className="input-field"
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  required
                />
              </div>
              {/* photoUrl  */}
              {/* photoUrl  */}
              <div className="mb-1">
                <label htmlFor="photo" className="text-md block">
                  Photo
                </label>
                <input type="file"
                  id="image"
                  name="fileInput"
                  {...register("photo")}
                  className="text-sm text-grey-500 file:mr-5 file:py-3 file:px-10 file:rounded-lg file:border-0 file:text-md file:font-semibold file:text-white file:bg-gradient-to-r file:from-[#84a98c] file:to-[#344e41] hover:file:cursor-pointer hover:file:opacity-90 duration-500 py-5 w-full" required />
              </div>

              {/* <input {...register("exampleRequired", { required: true })} /> */}
              {errors.exampleRequired && <span>This field is required</span>}
              {/* submit button */}
              {errorMsg && <p className="text-red-600 font-semibold">{errorMsg}</p>}
              {/* submit button */}

              <div className="mt-4 flex justify-center">
                <ButtonWithLoading loading={btnLoading}>Sign Up</ButtonWithLoading>
              </div>

              <div className="text-center mt-4">
                <span>Already have an account? <Link to="/login"><span className="text-[#84a98c] hover:text-[#344e41] duration-1000">Login</span></Link></span>
              </div>

            </form>
            {/* social login  */}
            <SocialLogin />
            {/* social login  */}
          </div>

        </div>

      </div>

    </div>
  );
};

export default Signup;
