import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=''>
          <section className='items-center md:pt-32 bg-[#FFFDFF] pt-40'>
       <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
         <div className=''>         
           <img className=' w-12/12 mx-auto md:h-48 h-24' src='https://www.lavoz.com.ar/resizer/9DvCUG7gefuQi8BuK1Vk2X0oAsA=/1023x323/smart/storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif' alt="" />
         </div>
         <div className='max-w-md text-center'>
         <h2 className="mb-5">Page Not found</h2>
           <Link to='/' className='px-6 py-2 font-semibold rounded bg-neutral-950 text-white mb-4'>
             Back to Home
           </Link>
         </div>
       </div>
     </section>
      </div>
    );
};

export default ErrorPage;