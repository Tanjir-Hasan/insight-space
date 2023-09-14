import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn, githubSignIn, setErrorMsg } = useAuth();
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setErrorMsg("")
                const loggedUser = result.user;
                const { displayName, email, photoURL } = loggedUser;
                const date = new Date();
                const newUser = { displayName, email, photoURL, date, role: "regular" }
                axios.post('https://insight-space-server.onrender.com/add-user', newUser)
                    .then(data => { })
                    .catch(err => { })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your account Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(err => setErrorMsg(err.message))
    }

    // github sign in 
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                setErrorMsg("")
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your account Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(err => setErrorMsg(err.message))
    }
    return (
        <div className="w-[90%] mx-auto">

            <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">Or</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="flex justify-center gap-5 pb-5">
                <button
                    onClick={handleGoogleSignIn}
                    className="btn"
                >
                    <FaGoogle className="text-2xl"></FaGoogle> <span className="text-2xl"> </span>
                </button>

                <button
                    onClick={handleGithubSignIn}
                    className="btn"
                >
                    <FaGithub className="text-2xl"></FaGithub> <span className="text-2xl"> </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;