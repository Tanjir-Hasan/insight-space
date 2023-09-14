import React, { useContext, useEffect, useState } from 'react';
import useUser from '../../../../Hooks/useUser';
import useQuizResult from '../../../../Hooks/useQuizResult';
import ReChart from './ReChart';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import useTitle from '../../../../Hooks/useTitle';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';



const QuizDashboard = () => {
    const [userDetails] = useUser();
    const [quizResult, mockTest, modelTest] = useQuizResult();
    const { theme } = useContext(ThemeContext);
    const controls = useAnimation();
    const [ref, inView] = useInView();


    useTitle('Quiz Dashboard');


    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className={`${theme}`}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -100 },
                }}
                transition={{ duration: 1.5 }}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-white'>
                    <div className='h-40 bg-slate-600 rounded-md'>
                        <div className=' text-center p-2'>
                            <img className='mx-auto rounded-full h-20 w-20' src={userDetails?.photoURL} alt="" />
                            <h2>{userDetails?.displayName}</h2>
                        </div>
                    </div>
                    <div className='h-40 bg-slate-600 rounded-md'>
                        <h2 className='text-2xl p-2'>Total Exam attend</h2>
                        <div className='p-2'>
                            <p>Mock test: {mockTest.length}</p>
                            <p>Live exam: {quizResult.length}</p>
                            <p>Model test: {modelTest.length}</p>
                        </div>
                    </div>
                    <div className='h-40 bg-slate-600 rounded-md'>
                        <h2 className='text-2xl p-2'>Exam</h2>
                    </div>
                </div>

            </motion.div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y : 100 },
                }}
                transition={{ duration: 2.0 }}>

                <ReChart></ReChart>
            </motion.div>
        </div>
    );
};

export default QuizDashboard;