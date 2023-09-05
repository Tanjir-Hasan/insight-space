import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { BsArrowUpSquare } from 'react-icons/bs';
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'bg-[#051923] text-white' : 'bg-[#f0efeb]'} py-4`}>

            <div className="md:flex justify-between px-10 items-center">
                <div>
                    <img src="https://i.ibb.co/Kj8scz6/logo2.png" alt="" className='h-20' />
                </div>

                <div className="flex flex-col md:flex-row gap-5 items-center font-[Poppins] pl-4 pt-5 md:pl-0 md:pt-0">
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Cookie Policy</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/addquiz">Add Quiz</Link>
                    <ScrollToTopButton></ScrollToTopButton>
                </div>

                {/* <div className="font-[Poppins] flex flex-col lg:mr-4 md:ml-0 ml-4">
                        <Link>Terms & Conditions</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Cookie Policy</Link>
                        <Link to="/about-us">About Us</Link>
                        <h3 className="text-2xl font-[Poppins] mt-3">InSight Space</h3>
                </div> */}
            </div>

            <div className="flex-grow border-t border-gray-400 mx-16 my-4"></div>

            <div>
                <p className="text-center font-[Poppins]">Copyright © 2023 - All right reserved.</p>
            </div>

        </div>
    );
};

export default Footer;