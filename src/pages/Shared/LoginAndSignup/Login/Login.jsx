import { useForm } from "react-hook-form";
import "./Login.css";
import SocialLogin from "../SocialLogIn/SocialLogin";
import useAuth from "../../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Login = () => {
    const { signIn, errorMsg, setErrorMsg } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const {email , password} = data ;
         signIn(email , password)
         .then(result => {
            setErrorMsg("")
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your account Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })
         .catch(err => setErrorMsg(err.message))
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center pt-5 box-border">
                <div className="w-full md:w-1/2">
                    <h2 className="text-center text-3xl font-semibold ">Login</h2>
                    <div className="w-full md:w-3/4 mx-auto shadow-lg shadow-cyan-500/50 rounded-md p-5">
                        {/* signup form  */}
                        {/* signup form  */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* name */}
                            {/* name */}
                            <div className="mb-1 box-border">
                                <label htmlFor="email" className="text-sm block">
                                    Email
                                </label>
                                <input
                                    className="w-[90%] border-b-2 border-gray-300 rounded-md px-2 py-1 box-border ml-4 mt-2 focus:outline-none focus:border-green-400 focus:bg-gray-100"
                                    type="email"
                                    {...register("email")}
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* email */}
                            {/* email */}
                            <div className="mb-1">
                                <label htmlFor="password" className="text-sm block">
                                   Password
                                </label>
                                <input
                                    className="w-[90%] border-b-2 border-gray-300 rounded-md px-2 py-1 box-border ml-4 mt-2 focus:outline-none focus:border-green-400 focus:bg-gray-100"
                                    type="password"
                                    {...register("password")}
                                    placeholder="Enter your password"
                                />
                            </div>
                            <p>Are you new at here ?<Link className="text-blue-600 underline underline-offset-2" to="/sign-up"> sign up</Link></p>
                            {/* <input {...register("exampleRequired", { required: true })} /> */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            {/* submit button */}
                            {errorMsg && <p className="text-red-600 font-semibold">{errorMsg}</p>}
                            {/* submit button */}
                            <div className="mt-4">
                                <input
                                    type="submit"
                                    className="btn bg-cyan-400 rounded-md mt-2 px-3 py-2 block mb-1 w-9/12 mx-auto cursor-pointer"
                                    value="Log in"
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
        </>
    );
};

export default Login;
