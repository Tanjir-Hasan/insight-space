import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSignIn, githubSignIn, setErrorMsg } = useAuth();
    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setErrorMsg("")
                const loggedUser = result.user;
                const { displayName, email, photoURL } = loggedUser;
                const date = new Date();
                const newUser = { displayName, email, photoURL, date }
                axios.post('https://insight-space-server.vercel.app/add-user', newUser)
                    .then(data => console.log(data.data))
                    .catch(err => console.log(err))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your account Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => setErrorMsg(err.message))
    }

    // github sign in
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                setErrorMsg("")
                const loggedUser = result.user;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your account Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => setErrorMsg(err.message))
    }
    return (
        <div>
            <div className="w-[90%] mx-auto">
                <h1 className="signup_line">or signup with</h1>
            </div>
            <div className="flex justify-center gap-5 py-5">
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