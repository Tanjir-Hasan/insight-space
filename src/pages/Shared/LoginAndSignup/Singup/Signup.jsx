import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogIn/SocialLogin";
// import "./Signup.css";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
                />
              </div>

              {/* password  */}
              {/* password  */}
              <div className="mb-1">
                <label htmlFor="password" className="text-sm block">
                  Password
                </label>
                <input
                  className="w-[90%] border-b-2 border-gray-300 rounded-md px-2 py-1 box-border ml-4 mt-2 focus:outline-none focus:border-green-400 focus:bg-gray-100"
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="password"
                />
              </div>

              {/* confirm password  */}
              {/* confirm password  */}
              <div className="mb-1">
                <label htmlFor="confirm_password" className="text-sm block">
                  Confirm Password
                </label>
                <input
                  className="w-[90%] border-b-2 border-gray-300 rounded-md px-2 py-1 box-border ml-4 mt-2 focus:outline-none focus:border-green-400 focus:bg-gray-100"
                  type="password"
                  id="confirm_password"
                  {...register("confirm_password")}
                  placeholder="confirm password"
                />
              </div>
              {/* <input {...register("exampleRequired", { required: true })} /> */}
              {errors.exampleRequired && <span>This field is required</span>}
              {/* submit button */}
              {/* submit button */}
              <div className="mt-4">
                <input
                  type="submit"
                  className="btn bg-cyan-400 rounded-md mt-2 px-3 py-2 block mb-1 w-9/12 mx-auto cursor-pointer"
                  value="Sign Up"
                />
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
