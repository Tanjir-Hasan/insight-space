import { Link } from "react-router-dom";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <div className=''>
      <section className='items-center md:pt-32 bg-[#FFFDFF] pt-40'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
          <div className=''>
            <img className=' w-12/12 mx-auto md:h-48 h-24' src='https://www.lavoz.com.ar/resizer/9DvCUG7gefuQi8BuK1Vk2X0oAsA=/1023x323/smart/storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif' alt="" />
          </div>
          <div className='max-w-md text-center'>
            <h2 className="my-5 text-4xl">Page Not found</h2>
          </div>

          <div className="mt-4 flex justify-center">
            <Link to="/">
              <Button heading="Back to Home">
                <input type="submit" value="Home" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;