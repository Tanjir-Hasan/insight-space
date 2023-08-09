import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogIn/SocialLogin";
import useAuth from "../../../../Hooks/UseAuth";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./Signup.css";
const Signup = () => {
  const { createUser, errorMsg, setErrorMsg } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // create user and user details set on database 
  const onSubmit = (data) => {
    const { name, email, photo, password } = data;
    createUser(email, password)
      .then(result => {
        setErrorMsg("")
        const date = new Date();
        const newUser = { displayName: name, email, photoURL: photo, date }
        axios.post('http://localhost:5000/add-user', newUser)
          .then(data => console.log(data.data))
          .catch(err => console.log(err))
      })
      .catch(err => {
        setErrorMsg(err.message);
      })

  };

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold underline">Registration Now</h2>
      <div className="flex flex-col md:flex-row justify-center items-center pt-5">
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-3/4 mx-auto shadow-lg shadow-cyan-500/50 rounded-md p-5 ">
            {/* signup form  */}
            {/* signup form  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              {/* name */}
              <div className="mb-1 box-border">
                <label htmlFor="name" className="text-sm block">
                  Name
                </label>
                <input
                  className="w-[90%] border-b-2 border-gray-300 rounded-md px-2 py-1 box-border ml-4 mt-2 focus:outline-none focus:border-green-400 focus:bg-gray-100"
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* email */}
              {/* email */}
              <div className="mb-1">
                <label htmlFor="email" className="text-sm block">
                  Email
                </label>
                <input
                  className="w-[90%] border-b-2 border-gray-300 rounded-md px-2 py-1 box-border ml-4 mt-2 focus:outline-none focus:border-green-400 focus:bg-gray-100"
                  type="text"
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* password  */}
              {/* password  */}
              <div className="mb-1">
                <label htmlFor="photo" className="text-sm block">
                  Photo Url
                </label>
                <input
                  className="w-[90%] border-b-2 border-gray-300 rounded-md px-2 py-1 box-border ml-4 mt-2 focus:outline-none focus:border-green-400 focus:bg-gray-100"
                  type="text"
                  {...register("photo")}
                  placeholder="your photo url"
                  required
                />
              </div>

              {/* confirm password  */}
              {/* confirm password  */}
              <div className="mb-1">
                <label htmlFor="password" className="text-sm block">
                  Password
                </label>
                <input
                  className="w-[90%] border-b-2 border-gray-300 rounded-md px-2 py-1 box-border ml-4 mt-2 focus:outline-none focus:border-green-400 focus:bg-gray-100"
                  type="password"
                  {...register("password")}
                  placeholder="password"
                  required
                />
              </div>
              {/* <input {...register("exampleRequired", { required: true })} /> */}
              {errors.exampleRequired && <span>This field is required</span>}
              {/* submit button */}
              {errorMsg && <p className="text-red-600 font-semibold">{errorMsg}</p>}
              {/* submit button */}
              <div className="mt-4">
                <input
                  type="submit"
                  className="btn bg-cyan-400 rounded-md mt-2 px-3 py-2 block mb-1 w-9/12 mx-auto cursor-pointer"
                  value="Sign Up"
                />
                <div>
                  <p className="text-center text-yellow-600">All ready registered? <Link to="/login"><span className="hover:font-semibold">Log in hare</span></Link></p>
                </div>
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
