import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../providers/ThemeProvider";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`${theme === 'dark' ? 'bg-[#011627]' :
                theme === 'night' ? 'bg-[#1b263b]' :
                    theme === 'light' ? 'bg-[#f0efeb]' : ''} py-5`}>

                <div className="md:flex justify-between px-10 items-center">

                    <Link to="/">
                        <img
                            src={theme === 'dark' ? "https://i.ibb.co/0Kz4d2x/inside-space-logo.png"
                                : theme === 'light' ? 'https://i.ibb.co/jrz53Ch/inside-space.png'
                                    : theme === 'night' ? 'https://i.ibb.co/0Kz4d2x/inside-space-logo.png'
                                        : ""}
                            alt="logo"
                            className='h-24 w-full'
                        />
                    </Link>

                    <div className="flex flex-col md:flex-row gap-5 items-center font-[Poppins] pl-4 pt-5 md:pl-0 md:pt-0 md:w-1/2 lg:w-1/3">
                        <Link className={`hover:underline underline-offset-2 duration-700 ${theme === 'dark' ? 'hover:text-[#48cae4] text-white' :
                                theme === 'night' ? 'hover:text-[#48cae4] text-white' :
                                    theme === 'light' ? 'hover:text-[#3c6e71] text-black' : ''}`}>Terms & Conditions</Link>
                        <Link className={`hover:underline underline-offset-2 duration-700 ${theme === 'dark' ? 'hover:text-[#48cae4] text-white' :
                                theme === 'night' ? 'hover:text-[#48cae4] text-white' :
                                    theme === 'light' ? 'hover:text-[#3c6e71] text-black' : ''}`}>Privacy Policy</Link>
                        <Link className={`hover:underline underline-offset-2 duration-700 ${theme === 'dark' ? 'hover:text-[#48cae4] text-white' :
                                theme === 'night' ? 'hover:text-[#48cae4] text-white' :
                                    theme === 'light' ? 'hover:text-[#3c6e71] text-black' : ''}`}>Cookie Policy</Link>
                        <Link className={`hover:underline underline-offset-2 duration-700 ${theme === 'dark' ? 'hover:text-[#48cae4] text-white' :
                                theme === 'night' ? 'hover:text-[#48cae4] text-white' :
                                    theme === 'light' ? 'hover:text-[#3c6e71] text-black' : ''}`} to="/about-us">About Us</Link>
                                    
                        <ScrollToTopButton></ScrollToTopButton>
                    </div>

                </div>

                <div className="flex-grow border-t border-gray-400 mx-16 my-4"></div>

                <div>
                    <p className={`text-center font-[Poppins] ${theme === 'light' ? 'text-black' : 'text-white'}`}>Copyright © 2023 - All right reserved.</p>
                </div>

            </div>
        </>
    );
};

export default Footer;