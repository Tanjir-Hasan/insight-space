import React, { useContext } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';
import { ThemeContext } from "../../../providers/ThemeProvider";

const ScrollToTopButton = () => {

  const { theme } = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top-button">
      <BsArrowUpSquare className={`text-2xl font-bold duration-700 ${theme === 'dark' ? 'hover:text-[#48cae4] text-white' : theme === 'night' ? 'hover:text-[#b79ced] text-white' :
          theme === 'light' ? 'hover:text-[#3c6e71] text-black' : ''}`} />
    </button>
  );
};

export default ScrollToTopButton;
