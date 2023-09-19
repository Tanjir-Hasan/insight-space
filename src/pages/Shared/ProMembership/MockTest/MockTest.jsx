import React, { useState, useEffect, useContext, } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useQuizResult from '../../../../Hooks/useQuizResult';
import { AuthContext } from '../../../../providers/AuthProvider';
import useTitle from '../../../../Hooks/useTitle';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const MockTest = () => {
    const [quizDatas, setQuizDatas] = useState([]); // State to store quiz data
    const [quizData, setQuizData] = useState([]);
    const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
    const [showResults, setShowResults] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const [subject, setSubject] = useState([])
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const [ref, inView] = useInView();
    const controls = useAnimation();
    const { theme } = useContext(ThemeContext);

    useTitle('Mock Test');

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);


    const handleOptionSelect = (option, questionIndex) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = option;
        setUserAnswers(updatedAnswers);
    };

    useEffect(() => {
        // Fetch quiz data from the API when the component mounts
        axiosSecure.get("/quiz")
            .then(data => setQuizDatas(data.data))
            .catch((error) => console.error("Error fetching quiz data:", error));
    }, []);


    const calculateScore = () => {
        let score = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === quizData[index].correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const handleSubmit = () => {
        setShowResults(true);
        const date = new Date();
        const mockTest = {
            userName: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            date,
            score: calculateScore(),
            subject: subject,
            examName: 'Mock Test'
        }

        axiosSecure.post("/mock-test", mockTest)
            .then(data => console.log(data.data))
    };



    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else {
            // Start the quiz after the countdown
            timer && clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [countdown]);

    const handleBangla = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'বাংলা')
        setQuizData(bangla)
        setSubject('বাংলা')
        setShowResult(true)
    }
    const handleEnglish = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'English')
        setQuizData(bangla)
        setSubject('English')
        setShowResult(true)
    }
    const handleHigherMathematics = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Higher Mathematics')
        setQuizData(bangla)
        setSubject('Higher Mathematics')
        setShowResult(true)
    }
    const handleChemistry = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Chemistry')
        setQuizData(bangla)
        setSubject('Chemistry')
        setShowResult(true)
    }
    const handleBiology = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Biology')
        setQuizData(bangla)
        setSubject('Biology')
        setShowResult(true)
    }
    const handlePhysics = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Physics')
        setQuizData(bangla)
        setSubject('Physics')
        setShowResult(true)
    }
    const handleICT = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'ICT')
        setQuizData(bangla)
        setSubject('ICT')
        setShowResult(true)
    }
    const handleGeneralKnowledge = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'General Knowledge')
        setQuizData(bangla)
        setSubject('General Knowledge')
        setShowResult(true)
        setShowResults(true)

    }




    return (

        <div className={`min-h-[70vh] `}>

            {!showResults ? (
                <div>
                    <motion.h1
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        transition={{ duration: 0.9 }}
                        className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#48cae4]'} border-b-2 md:text-5xl text-md font-[Poppins] lg:w-1/2 w-11/12`}>
                        Select Your subject:
                    </motion.h1>


                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        transition={{ duration: 0.9 }}>

                        <div className="flex flex-wrap gap-2  md:justify-center mt-5 ">
                            <h3 className="font-[Poppins] border border-[#3c6e71] hover:bg-[#335c67] hover:text-white  md:py-2 md:px-3 px-2 py-1 text-sm md:text-base rounded-md cursor-pointer" onClick={() => handleBangla()}>Bangla</h3>
                            <h3 className="font-[Poppins] border border-[#3c6e71] hover:bg-[#335c67] hover:text-white  md:py-2 md:px-3 px-2 py-1 text-sm md:text-base rounded-md cursor-pointer" onClick={() => handleEnglish()}>English</h3>
                            <h3 className="font-[Poppins] border border-[#3c6e71] hover:bg-[#335c67] hover:text-white  md:py-2 md:px-3 px-2 py-1 text-xs md:text-base rounded-md cursor-pointer" onClick={() => handleHigherMathematics()}>Higher Mathematics</h3>
                            <h3 className="font-[Poppins] border border-[#3c6e71] hover:bg-[#335c67] hover:text-white  md:py-2 md:px-3 px-2 py-1 text-xs md:text-base rounded-md cursor-pointer" onClick={() => handleChemistry()}>Chemistry</h3>
                            <h3 className="font-[Poppins] border border-[#3c6e71] hover:bg-[#335c67] hover:text-white  md:py-2 md:px-3 px-2 py-1 text-xs md:text-base rounded-md cursor-pointer" onClick={() => handleBiology()}>Biology</h3>
                            <h3 className="font-[Poppins] border border-[#3c6e71] hover:bg-[#335c67] hover:text-white  md:py-2 md:px-3 px-2 py-1 text-xs md:text-base rounded-md cursor-pointer" onClick={() => handlePhysics()}>Physics</h3>
                            <h3 className="font-[Poppins] border border-[#3c6e71] hover:bg-[#335c67] hover:text-white  md:py-2 md:px-3 px-2 py-1 text-xs md:text-base rounded-md cursor-pointer" onClick={() => handleICT()}>ICT</h3>
                            <h3 className="font-[Poppins] border border-[#3c6e71] hover:bg-[#335c67] hover:text-white  md:py-2 md:px-3 px-2 py-1 text-xs md:text-base rounded-md cursor-pointer" onClick={() => handleGeneralKnowledge()}>General Knowledge</h3>
                        </div>
                    </motion.div>

                </div>
            )
                : ""
            }



            <div className=" mx-auto p-2 md:p-10">
                {countdown > 0 && (
                    <div className=''>
                        <h1 className="md:text-4xl text-base font-bold text-center text-red-800">Quiz Starting in {countdown} seconds...</h1>
                    </div>
                )}

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -100 },
                    }}
                    transition={{ duration: 0.9 }}>


                    <div className=''>
                        {
                            showResult ?
                                (
                                    <div>
                                        {countdown === 0 && !showResults && (
                                            <div className='animate-zoom-in mt-8'>
                                                <h1 className="md:text-2xl font-semibold">Mock Test- {subject}</h1>
                                                <h2 className='text-sm md:text-base'>Total Questions {quizData?.length}</h2>
                                                <h2 className='border-b-2 text-sm md:text-base border-[#3c6e71]'>Per Question 1 Point</h2>

                                                <div className='grid lg:grid-cols-2 gap-10'>
                                                    {quizData.map((question, questionIndex) => (
                                                        <div className='' key={questionIndex}>
                                                            <h2 className="md:text-lg text-sm font-bold mt-4">{questionIndex + 1}. {question?.question}</h2>
                                                            <ul className="mt-2 text-xs md:text-md space-y-2">
                                                                {question?.options?.map((option, optionIndex) => (
                                                                    <li key={optionIndex} className=" ">
                                                                        <label className=" items-center space-x-2">
                                                                            <input
                                                                                type="radio"
                                                                                name={`question${questionIndex}`}
                                                                                value={option}
                                                                                checked={userAnswers[questionIndex] === option}
                                                                                onChange={() => handleOptionSelect(option, questionIndex)}
                                                                                className="text-blue-500 focus:ring-blue-300 mx-2 "
                                                                            />
                                                                            {option}
                                                                        </label>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div onClick={() => handleSubmit()} className='mt-4 w-full text-white text-sm md:text-base p-2 rounded bg-[#3c6e71] hover:bg-[#335c67] text-center cursor-pointer'>
                                                    <button  > Submit Mock Test </button>
                                                </div>

                                            </div>
                                        )}
                                    </div>)
                                :
                                (
                                    <div>
                                        {countdown === 0 && !showResults && (
                                            <div className='mt-10'>
                                                {/* <button ><img className='mdh-10 w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXHzZOmexylo5sAAToZvwE9l7GRiz3sNatyJ52vztwOnPX1E45XDbRdV8sH0wrPwO9_B0&usqp=CAU" alt="" /></button> */}
                                                <h1 className="md:text-2xl font-semibold">Mock Test </h1>
                                                <h2 className='md:text-base text-sm'>Total Questions {quizDatas?.length}</h2>
                                                <h2 className='border-b-2 md:text-base text-sm border-[#3c6e71]'>Per Question 1 Point</h2>
                                                <button
                                                    onClick={() => handleBangla()}
                                                    className="mt-4 md:px-10 text-white px-2 py-1 md:p-2 rounded bg-[#3c6e71] hover:bg-[#335c67] cursor-pointer">
                                                    Start mock test
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                )
                        }
                    </div>

                </motion.div>



                {showResults && (
                    <div>
                        <h1 className="md:text-2xl font-semibold">Quiz Results</h1>
                        <h2 className="md:text-2xl text-sm font-semibold">Subject : {subject}</h2>
                        <p className='border-b-2 text-sm md:text-base border-[#3c6e71]'>Your Score: {calculateScore()} / {quizData?.length}</p>
                        <ul className="mt-4 space-y-2 grid ld:grid-cols-2 gap-10 ">
                            {quizData?.map((question, index) => (
                                <li
                                    key={index}
                                    className={`p-2 ${userAnswers[index] === question?.correctAnswer
                                        ? 'text-green-500'
                                        : 'text-red-500'
                                        }`}
                                >
                                    <p className='lg:text-xl text-sm font-semibold'>{index + 1}. {question?.question}</p>
                                    <p className='text-xs md:text-sm'>Your Answer: {userAnswers[index]}</p>
                                    <p className='text-xs md:text-sm'>Correct Answer: {question?.correctAnswer}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MockTest;