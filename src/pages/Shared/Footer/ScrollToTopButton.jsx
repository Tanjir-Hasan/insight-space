import React from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top-button">
      <BsArrowUpSquare className="text-2xl font-bold hover:text-[#48cae4] duration-700" />
    </button>
  );
};

export default ScrollToTopButton;
