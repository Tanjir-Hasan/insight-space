
import Lottie from "lottie-react-web";
import animation from '../../public/animation_lleu6qza.json'

const ErrorPage = () => {
  return (
    <div className='h-screen'>
      <Lottie
        options={{
          animationData: animation
        }}
      />
     
            
         
      {/* <section className='items-center md:pt-32 bg-[#FFFDFF] pt-40'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
          <div className=''>
            <img className=' w-12/12 mx-auto md:h-48 h-24' src={errorPIC} alt="" />
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
      </section> */}
    </div>
  );
};

export default ErrorPage;