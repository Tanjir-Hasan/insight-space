import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogIn/SocialLogin";
import useAuth from "../../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import ButtonWithLoading from "../../../../components/ButtonWithLoading";

const Login = () => {
    const { theme } = useContext(ThemeContext);
    const { signIn, errorMsg, setErrorMsg, btnLoading, setBtnLoading } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const location = useLocation()
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        setErrorMsg("");
        setBtnLoading(true);
        signIn(data?.email, data?.password)
            .then(res => {
                reset();
                setBtnLoading(false);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
                // console.log(res.user);
            }).catch(err => {
                setBtnLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                })
                console.log(err);
            })

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} pb-8`}>

            <h2 className="text-center font-[Poppins] lg:text-4xl text-3xl font-semibold py-8">Login</h2>

            <div className="flex flex-col md:flex-row justify-center items-center">

                <div className="lg:w-2/3 w-full lg:px-0 px-6">

                    <div className="w-full md:w-3/4 mx-auto shadow-lg shadow-[#344e41] rounded-md md:p-12 p-6">
                        {/* signup form  */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* name */}

                            <div className="mb-1 box-border">
                                <label htmlFor="email" className="text-md block">
                                    Email
                                </label>
                                <input
                                    className="input-field"
                                    type="email"
                                    {...register("email")}
                                    placeholder="Enter Your Email"
                                />
                            </div>

                            {/* email */}
                            <div className="mb-1 relative">
                                <label htmlFor="password" className="text-md block">
                                    Password
                                </label>
                                <input
                                    className="input-field"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("password")}
                                    placeholder="Enter Your Password"
                                />
                                <div
                                    className="absolute bottom-4 right-2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible size={20} />
                                    ) : (
                                        <AiOutlineEye size={20} />
                                    )}
                                </div>
                            </div>

                            {/* <input {...register("exampleRequired", { required: true })} /> */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            {errorMsg && <p className="text-red-600 font-semibold">{errorMsg}</p>}

                            {/* Password reset button */}
                            <Link to={"/resetPassword"} className="underline text-[#84a98c]">Reset Password</Link>





                            {/* submit button */}
                            <div className="mt-4 flex justify-center">
                                <ButtonWithLoading loading={btnLoading}>Login Now!</ButtonWithLoading>
                            </div>

                            <div className="text-center mt-4">
                                <span>New to InSight Space! <Link to="/sign-up"><span className="text-[#84a98c] hover:text-[#344e41] duration-1000">Register Now!</span></Link></span>
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

export default Login;
