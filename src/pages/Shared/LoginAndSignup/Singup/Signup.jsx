import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogIn/SocialLogin";
import useAuth from "../../../../Hooks/UseAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import Button from "../../../../components/Button";

const Signup = () => {
  const { theme } = useContext(ThemeContext);
  const { createUser, errorMsg, setErrorMsg } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // create user and user details set on database 
  const onSubmit = (data) => {
    const formData = new FormData();
    // image hosting function 
    setErrorMsg("")
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
              setErrorMsg("")
              const newUser = { displayName: name, email, photoURL: imgURL, date, role: "regular" }
              axios.post('https://insight-space-server.vercel.app/add-user', newUser)
                .then(data => {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your account Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                })
                .catch(err => setErrorMsg(err.message))
            })
            .catch(err => {
              setErrorMsg(err.message);
            })

        }
      })

  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} font-[Poppins] pb-8`}>

      <h2 className="text-center font-[Poppins] lg:text-4xl text-3xl font-semibold py-8">Create a new account</h2>

      <div className="flex flex-col md:flex-row justify-center items-center pt-5">
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
                <Button heading="Sign Up">
                  <input type="submit" value="Sign Up" />
                </Button>
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

        <div className="w-full md:w-1/2 mt-5 md:mt-0">
          <img src="./login.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
