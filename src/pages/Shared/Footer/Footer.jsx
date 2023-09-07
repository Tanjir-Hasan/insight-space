import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../providers/ThemeProvider";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`${theme}`}>

                <div className="md:flex justify-between px-10 items-center">
                    
                    <div>
                        <img src="https://i.ibb.co/Kj8scz6/logo2.png" alt="" className='h-20' />
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 items-center font-[Poppins] pl-4 pt-5 md:pl-0 md:pt-0 md:w-1/2 lg:w-1/3">
                        <Link className="hover:text-[#48cae4] hover:underline underline-offset-2 duration-700">Terms & Conditions</Link>
                        <Link className="hover:text-[#48cae4] hover:underline underline-offset-2 duration-700">Privacy Policy</Link>
                        <Link className="hover:text-[#48cae4] hover:underline underline-offset-2 duration-700">Cookie Policy</Link>
                        <Link className="hover:text-[#48cae4] hover:underline underline-offset-2 duration-700" to="/about-us">About Us</Link>
                        <ScrollToTopButton></ScrollToTopButton>
                    </div>

                </div>

                <div className="flex-grow border-t border-gray-400 mx-16 my-4"></div>

                <div>
                    <p className="text-center font-[Poppins]">Copyright © 2023 - All right reserved.</p>
                </div>

            </div>
        </>
    );
};

export default Footer;