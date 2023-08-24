import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../providers/ThemeProvider";

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'bg-[#001427] text-white' : 'bg-[#f0efeb]'} py-8`}>

            <div className="md:flex justify-between px-10">
                <div>
                    <img src="https://i.ibb.co/Kj8scz6/logo2.png" alt="" className='h-24' />
                </div>
                <div className="font-[Poppins] flex flex-col lg:mr-4 md:ml-0 ml-4">
                        <Link>Terms & Conditions</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Cookie Policy</Link>
                        <Link to="/aboutus">About Us</Link>
                        <h3 className="text-2xl font-[Poppins] mt-3">InSight Space</h3>
                </div>
            </div>

            <div className="flex-grow border-t border-gray-400 mx-16 my-6"></div>

            <div>
                <p className="text-center font-[Poppins]">Copyright © 2023 - All right reserved.</p>
            </div>

        </div>
    );
};

export default Footer;