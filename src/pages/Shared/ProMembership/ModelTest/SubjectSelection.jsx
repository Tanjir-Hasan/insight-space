import React, { useContext, useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '../../../../providers/ThemeProvider';

function SubjectSelection({ subjects, onSelectSubject }) {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const { theme } = useContext(ThemeContext);


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className='p-5'>
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        transition={{ duration: 0.9 }}

        className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#48cae4]'} border-b-2 md:text-5xl  font-[Poppins] lg:w-1/2 w-11/12`}>
        Select Your subject:
      </motion.h1>



      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.9 }}>
        <ul className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-5 rounded-md">
        {subjects.map((subject, index) => (
          <li
            key={index}
            className="cursor-pointer text-white nd:text-4xl text-xs text-center items-center font-bold hover:underline border-2 md:py-20 py-8 bg-[#2d3e3f]  rounded-md "
            onClick={() => onSelectSubject(subject)}
          >
            {subject}
          </li>
        ))}
      </ul>
    </motion.div>




     
    </div >
  );
}

export default SubjectSelection;