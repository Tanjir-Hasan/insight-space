import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogIn/SocialLogin";
import useAuth from "../../../../Hooks/useAuth";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import Lottie from "lottie-react";
import animation from '../../../../../public/spining.json';
import ButtonWithLoading from "../../../../components/ButtonWithLoading";
import useTitle from "../../../../Hooks/useTitle";

const Signup = () => {

  useTitle('Registration');

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
          const imgURL = imageResponse.data.display_url;

          //  signUp functions 
          const { name, email, password } = data;
          const date = new Date();
          createUser(email, password)
            .then(result => {
              if (result.user) {
                updateUserProfile(name, imgURL)
                  .then(() => {
                    const newUser = { displayName: name, email, photoURL: imgURL, date, role: "regular" }
                    axios.post(`${import.meta.env.VITE_base_URL}/add-user`, newUser)
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
    <div className={`${theme} font-[Cinzel] py-16`}>

      <h2 className="text-center font-[Poppins] lg:text-4xl text-3xl font-semibold py-8">Create a new account</h2>

      <div className="flex lg:flex-row flex-col justify-between items-center pt-5">

        <div className="w-5/12 rounded-full">
          {/* <img src="https://i.ibb.co/64r4kyH/login-removebg-preview.png" alt="" /> */}
          <Lottie animationData={animation} loop={true} className="w-10/12 mx-auto" />
        </div>

        <div className="lg:w-7/12 w-11/12 mx-auto">

          <div className={`w-full md:w-3/4 mx-auto shadow-lg rounded-md md:p-12 p-6 ${theme === 'dark' ? 'shadow-[#48cae4]' :
            theme === 'night' ? 'shadow-[#b79ced]' :
              theme === 'light' ? 'shadow-[#3c6e71]' : ''}`}>
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
                  className={`text-sm text-grey-500 file:mr-5 file:py-3 file:px-10 file:rounded-lg file:border-0 file:text-md file:font-semibold hover:file:cursor-pointer hover:file:opacity-90 duration-500 py-5 w-full
                  ${theme === 'light' ? 'file:text-white file:bg-gradient-to-l file:from-[#006466] file:to-[#212f45]' : theme === 'dark' ? 'file:text-white file:bg-gradient-to-tr file:from-[#48cae4] file:to-[#051923]' :
                      theme === 'night' ? 'file:text-white file:bg-gradient-to-tr file:from-[#0d1b2a] file:to-[#b79ced]'
                        : ''}
                  `} required />
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
                <span>Already have an account? <Link to="/login"><span className={`hover:underline duration-1000 font-[Cinzel] font-extrabold ${theme === 'light' ? "text-[#335c67]" : theme === "dark" ? "text-[#48cae4]" : theme === "night" ? "text-[#b79ced]" : ""}`}>Login</span></Link></span>
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
