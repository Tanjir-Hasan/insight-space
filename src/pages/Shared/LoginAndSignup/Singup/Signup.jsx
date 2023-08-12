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
    const { name, email, photo, password } = data;
    createUser(email, password)
      .then(result => {
        setErrorMsg("")
        const date = new Date();
        const newUser = { displayName: name, email, photoURL: photo, date, role: "regular" }
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
          .catch(err => console.log(err))
      })
      .catch(err => {
        setErrorMsg(err.message);
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

              {/* password  */}
              {/* password  */}
              <div className="mb-1">
                <label htmlFor="photo" className="text-md block">
                  Photo Url
                </label>
                <input
                  className="input-field"
                  type="text"
                  {...register("photo")}
                  placeholder="Your Photo Url"
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
