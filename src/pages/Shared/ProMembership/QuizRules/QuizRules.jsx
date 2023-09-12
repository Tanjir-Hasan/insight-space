import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';





const QuizRules = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    const certificatBg = {
        backgroundImage: 'url(https://i.ibb.co/Ldw09g8/depositphotos-14295555-stock-illustration-certificate-background.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return (
        <div className='p-10'>




            <div>
                <button onClick={handlePrint} className='text-xl text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] px-12 duration-700 py-3 rounded-lg my-5' >Download Certificate</button>

                <div ref={componentRef} className='h-[500px] border-4' style={certificatBg} >
                    <div>
                        <h2 className='md:text-4xl text-2xl font-bold uppercase text-center p-5 font-[Monospace]'>Certificate of Online Examinition</h2>
                    </div>
                    <div className='text-center font-[Poppins] text-lg'>
                        <h2 className='py-2 px-8 bg-[#3c6e71] box-content rounded-3xl text-white'>The Certificate is granted to</h2>
                        <h2 className='font-[Cursive] text-2xl'>Md Shamim Miah</h2>
                        <p>For completeing the online live examinition of 2023. </p>
                    </div>
                    <div>
                        <img className='h-40 w-40 mx-auto' src="https://i.ibb.co/ph1tkF7/pngtree-seal-gold-certificate-png-image-4744681-removebg-preview.png" alt="" />
                    </div>
                </div>

            </div>



























            <h2 className='font-bold font-[Poppins] text-2xl mt-1 border-b-2'>Here are some rules and regulations to keep in mind when attending a quiz:</h2>
            <h2 className='text-xl font-[Cinzel] font-semibold mt-2'> Preparation:</h2>
            <div className='list-disc'>
                <li> Review relevant topics and concepts before the quiz. </li>
                <li> Ensure you have necessary materials and resources.</li>
            </div>

            <h2 className='text-xl font-[Cinzel] font-semibold mt-3'> Focus and Read Instructions:</h2>
            <div className='list-disc'>
                <li> Pay close attention to each question and read instructions carefully. </li>
                <li> Understand the question before attempting an answer.</li>
            </div>

            <h2 className='text-xl font-[Cinzel] font-semibold mt-3'> Time Management:</h2>
            <div className='list-disc'>
                <li>  Keep track of time to allocate it effectively among questions. </li>
                <li> Prioritize questions you are confident about.</li>
            </div>

            <h2 className='text-xl font-[Cinzel] font-semibold mt-3'> Honesty and Integrity:</h2>
            <div className='list-disc'>
                <li> Answer questions honestly and independently.  </li>
                <li>  Avoid cheating, unauthorized resources, or seeking help from others.</li>
            </div>

            <h2 className='text-xl font-[Cinzel] font-semibold mt-3'>  Review and Learn:</h2>
            <div className='list-disc'>
                <li> Review and double-check your answers if time allows. </li>
                <li>  Learn from the quiz experience for future improvement.</li>
            </div>

            <h2 className='mt-5 font-bold font-[Poppins]'>Remember, attending a quiz is not only about getting a good grade but also about assessing your understanding of the material. Approach quizzes with a positive attitude, a focus on learning, and a commitment to academic integrity.</h2>
        </div>
    );
};

export default QuizRules;