import React, { useContext, useEffect } from 'react';
import useTitle from '../../../../Hooks/useTitle';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const QuizRules = () => {
    useTitle('Quiz Rules');
    const { theme } = useContext(ThemeContext);
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className={` min-h-[85vh] p-1 md:p-5`}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -100 },
                }}
                transition={{ duration: 1.5 }}>
                <h2 className='font-bold  text-sm md::text-2xl mt-1 border-b-2'>Here are some rules and regulations to keep in mind when attending a quiz:</h2>
                <h2 className='md:text-xl  font-[Cinzel] font-semibold mt-2'> Preparation:</h2>
                <div className='list-disc'>
                    <li className='text-xs md:text-sm lg:text-base'> Review relevant topics and concepts before the quiz. </li>
                    <li className='text-xs md:text-sm lg:text-base'> Ensure you have necessary materials and resources.</li>
                </div>

                <h2 className='text-sm md:text-lg lg:text-xl  mt-4'> Focus and Read Instructions:</h2>
                <div className='list-disc'>
                    <li className='text-xs md:text-sm lg:text-base'> Pay close attention to each question and read instructions carefully. </li>
                    <li className='text-xs md:text-sm lg:text-base'> Understand the question before attempting an answer.</li>
                </div>

                <h2 className='text-sm md:text-lg lg:text-xl  mt-4'> Time Management:</h2>
                <div className='list-disc'>
                    <li className='text-xs md:text-sm lg:text-base'>  Keep track of time to allocate it effectively among questions. </li>
                    <li className='text-xs md:text-sm lg:text-base'> Prioritize questions you are confident about.</li>
                </div>

                <h2 className='text-sm md:text-lg lg:text-xl  mt-4'> Honesty and Integrity:</h2>
                <div className='list-disc'>
                    <li className='text-xs md:text-sm lg:text-base'> Answer questions honestly and independently.  </li>
                    <li className='text-xs md:text-sm lg:text-base'>  Avoid cheating, unauthorized resources, or seeking help from others.</li>
                </div>

                <h2 className=' text-sm md:text-lg lg:text-xl  mt-4'>  Review and Learn:</h2>
                <div className='list-disc'>
                    <li className='text-xs md:text-sm lg:text-base'> Review and double-check your answers if time allows. </li>
                    <li className='text-xs md:text-sm lg:text-base'>  Learn from the quiz experience for future improvement.</li>
                </div>

                <h2 className='mt-5 text-xs md:text-sm lg:text-base '>Remember, attending a quiz is not only about getting a good grade but also about assessing your understanding of the material. Approach quizzes with a positive attitude, a focus on learning, and a commitment to academic integrity.</h2>
            </motion.div>
        </div>
    );
};

export default QuizRules;