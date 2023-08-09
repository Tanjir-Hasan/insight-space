import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogIn/SocialLogin";
import useAuth from "../../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import Button from "../../../../components/Button";

const Login = () => {

    const { theme } = useContext(ThemeContext);

    const { signIn, errorMsg, setErrorMsg } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
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
        <div className={`${theme === 'dark' ? 'dark' : ''} pb-8`}>

            <h2 className="text-center font-[Poppins] lg:text-4xl text-3xl font-semibold py-8">Login</h2>

            <div className="flex flex-col md:flex-row justify-center items-center">

                <div className="lg:w-2/3 w-full lg:px-0 px-6">

                    <div className="w-full md:w-3/4 mx-auto shadow-lg shadow-[#344e41] rounded-md md:p-12 p-6">
                        {/* signup form  */}
                        {/* signup form  */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* name */}
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
                            {/* email */}
                            <div className="mb-1">
                                <label htmlFor="password" className="text-md block">
                                    Password
                                </label>
                                <input
                                    className="input-field"
                                    type="password"
                                    {...register("password")}
                                    placeholder="Enter Your Password"
                                />
                            </div>

                            {/* <input {...register("exampleRequired", { required: true })} /> */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            {/* submit button */}
                            {errorMsg && <p className="text-red-600 font-semibold">{errorMsg}</p>}
                            {/* submit button */}

                            <div className="mt-4 flex justify-center">
                                <Button heading="Login">
                                    <input type="submit" value="Log in" />
                                </Button>
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
