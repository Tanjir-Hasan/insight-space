import React, { useState, useEffect, useContext } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../providers/AuthProvider';


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
  
console.log(subject)
    const handleOptionSelect = (option, questionIndex) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = option;
        setUserAnswers(updatedAnswers);
    };
    const url = "/mockTest.json";
    useEffect(() => {
        // Fetch quiz data from the API when the component mounts
        fetch(url)
            .then((response) => response.json())
            .then((data) => setQuizDatas(data))
            .catch((error) => console.error("Error fetching quiz data:", error));
    }, [url]);


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
        const date = new Date();
        const mockTest = {
            userName: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            date,
            score: calculateScore (),
            subject : subject,
        }
        console.log(mockTest)
        axiosSecure.post("/mock-test", mockTest)
            .then(data => console.log(data.data))
        setShowResults(true);
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
    }


    // const onSubmit = data => {
    //     const { message, rating } = data;
    //     const date = new Date();
    //     const feedback = {
    //         userName: user?.displayName,
    //         photo: user?.photoURL,
    //         email: user?.email,
    //         rating,
    //         date,
    //         message
    //     }
    //     axiosSecure.post("/feedback", feedback)
    //         .then(data => {
    //             if (data.data) {
    //                 alert('Your response has been recorded')
    //             }
    //         })
    // };
    // const handleMocktest = () =>{
    //     const date = new Date();
    //     const mockTest = {
    //         userName: userDetails?.displayName,
    //         photo: userDetails?.photoURL,
    //         email: userDetails?.email,        
    //         date,
    //         score : 0,

    //     }
    //     console.log(mockTest)
    //     axiosSecure.post("/mock-test", mockTest)
    //     .then(data => console.log(data.data))
    // }

    return (

        <div className='min-h-[70vh]'>
            <div className="flex flex-wrap gap-3 justify-center  ">
                <h3 className="font-[Poppins]  bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-3 rounded-md cursor-pointer" onClick={() => handleBangla()}>Bangla</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-3 rounded-md cursor-pointer" onClick={() => handleEnglish()}>English</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-3 rounded-md cursor-pointer" onClick={() => handleHigherMathematics()}>Higher Mathematics</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-3 rounded-md cursor-pointer" onClick={() => handleChemistry()}>Chemistry</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-3 rounded-md cursor-pointer" onClick={() => handleBiology()}>Biology</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-3 rounded-md cursor-pointer" onClick={() => handlePhysics()}>Physics</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-3 rounded-md cursor-pointer" onClick={() => handleICT()}>ICT</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-3 rounded-md cursor-pointer" onClick={() => handleGeneralKnowledge()}>General Knowledge</h3>
            </div>
            <h2 className='text-center  text-2xl font-bold mt-2 border-b-2 '>Select Your Subject for Mock test</h2>
            <div className=" mx-auto p-10">
                {countdown > 0 && (
                    <div className=''>
                        <h1 className="text-4xl font-bold text-center text-red-800">Quiz Starting in {countdown} seconds...</h1>
                    </div>
                )}
                <div>
                    {
                        showResult ?
                            (
                                <div>

                                    {countdown === 0 && !showResults && (
                                        <div>
                                            <h1 className="text-2xl font-semibold">Mock Test- {subject}</h1>
                                            <h2>Total Questions {quizData.length}</h2>
                                            <h2 className='border-b-2 border-[#3c6e71]'>Per Question 1 Point</h2>

                                            <div className='grid lg:grid-cols-2 gap-10'>
                                                {quizData.map((question, questionIndex) => (
                                                    <div className='' key={questionIndex}>
                                                        <h2 className="text-lg font-bold mt-4">{questionIndex + 1}. {question.question}</h2>
                                                        <ul className="mt-2  space-y-2">
                                                            {question.options.map((option, optionIndex) => (
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
                                            <div onClick={() => handleSubmit()} className='mt-4 w-full text-white p-2 rounded bg-[#3c6e71] hover:bg-[#335c67] text-center cursor-pointer'>
                                                <button  > Submit Mock Test </button>
                                            </div>

                                        </div>
                                    )}
                                </div>)
                            :
                            (
                                <div>
                                    {countdown === 0 && !showResults && (
                                        <div>
                                            <button ><img className='h-10 w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXHzZOmexylo5sAAToZvwE9l7GRiz3sNatyJ52vztwOnPX1E45XDbRdV8sH0wrPwO9_B0&usqp=CAU" alt="" /></button>
                                            <h1 className="text-2xl font-semibold">Mock Test </h1>
                                            <h2>Total Questions {quizDatas?.length}</h2>
                                            <h2 className='border-b-2 border-[#3c6e71]'>Per Question 1 Point</h2>
                                            <button
                                                onClick={() => handleBangla()}
                                                className="mt-4 px-10 text-white p-2 rounded bg-[#3c6e71] hover:bg-[#335c67] cursor-pointer">
                                                Start mock test
                                            </button>
                                        </div>
                                    )}
                                </div>

                            )
                    }
                </div>


                {showResults && (
                    <div>
                        <h1 className="text-2xl font-semibold">Quiz Results</h1>
                        <p className='border-b-2 border-[#3c6e71]'>Your Score: {calculateScore()} / {quizData.length}</p>
                        <ul className="mt-4 space-y-2 grid ld:grid-cols-2 gap-10 ">
                            {quizData.map((question, index) => (
                                <li
                                    key={index}
                                    className={`p-2 ${userAnswers[index] === question.correctAnswer
                                        ? 'text-green-500'
                                        : 'text-red-500'
                                        }`}
                                >
                                    <p className='text-xl text-black font-semibold'>{index + 1}. {question.question}</p>
                                    <p>Your Answer: {userAnswers[index]}</p>
                                    <p>Correct Answer: {question.correctAnswer}</p>
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