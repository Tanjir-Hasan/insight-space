import Lottie from "lottie-react";
import animation from '../../public/animation_lleu6qza.json'
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=''>
      <Lottie animationData={animation} loop={true} className="md:w-5/12 w-8/12 mx-auto" />
      <div className="md:w-3/12 w-1/2 mx-auto">
        <Link to="/">
          <Button heading="Back to Home"></Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;