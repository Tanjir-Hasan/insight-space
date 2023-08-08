import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    
  // google sign in
  const handleGoogleSignIn = () => {
    console.log("click on sign in with Google");
  }

  // github sign in
  const handleGithubSignIn = () => {
    console.log("click on sign in with Github");
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