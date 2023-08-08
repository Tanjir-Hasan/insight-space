import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
    return (
<<<<<<< HEAD
       <div className=" bg-slate-900 text-white px-5 py-5 mt-96 ">
         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5  text-xs lg:justify-items-center list-none">
           
            <div className="text-slate-300">
                <h3 className="text-white font-bold text-sm">Service</h3>
                <hr />
               <div className="mt-2 leading-5">
               <Link><li className="footer-hover footer-effect">Terms & Conditions</li></Link>
                <Link><li className="footer-hover footer-effect">Privacy policy</li></Link>
                <Link><li className="footer-hover footer-effect">Cookie policy</li></Link>
                <li></li>
               </div>
            </div>

            <div className="text-slate-300">
                <h3 className="text-white font-bold text-sm">Service</h3>
                <hr />
                <div className="mt-2 leading-5">
                <Link><li className="footer-hover footer-effect">Terms & Conditions</li></Link>
                <Link><li className="footer-hover footer-effect">Privacy policy</li></Link>
                <Link><li className="footer-hover footer-effect">Cookie policy</li></Link>
                <li></li>
                </div>              
            </div>

            <div className="text-slate-300">
                <h3 className="text-white font-bold text-sm">Service</h3>
                <hr />
                <div className="mt-2 leading-5">
                <Link><li className="footer-hover footer-effect">About Us</li></Link>
                <Link><li className="footer-hover footer-effect">Contact Us</li></Link>
                <Link><li className="footer-hover footer-effect">Cookie policy</li></Link>
                <li></li>
                </div>               
            </div>

            <div className="text-slate-300">
                <h3 className="text-white font-bold text-sm">Service</h3>
                <hr />
                <div className="mt-2 leading-5">
                <Link><li className="footer-hover footer-effect">Terms & Conditions</li></Link>
                <Link><li className="footer-hover footer-effect">Privacy policy</li></Link>
                <Link><li className="footer-hover footer-effect">Cookie policy</li></Link>
                <li></li>
                </div>               
            </div>
=======
        <div className="mt-10">
            <h1 className="font-[Oswald]">this is footer</h1>
>>>>>>> 059f2345ff171c87b397d8f591c87e9fd2069b45
        </div>

        <hr className="mt-3 border-gray-600" />
        <div className="md:flex justify-center gap-10 items-center mt-2">
            <h3>Copyright © 2023 - All right reserved</h3>
            <div  className="flex gap-2">
                <img className="w-10 h-10 p-1 hover:p-0 cursor-pointer rounded-full" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="" />

                <img className="w-10 h-10 p-1 hover:p-0 cursor-pointer rounded-full" src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png" alt="" />

                <img className="w-10 h-10 p-1 hover:p-0 cursor-pointer  rounded-full" src="https://w7.pngwing.com/pngs/462/874/png-transparent-instagram-logo-icon-instagram-icon-text-logo-sticker-thumbnail.png" alt="" />
            </div>
        </div>
       </div>
    );
};

export default Footer;