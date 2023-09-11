import React, { useState, useEffect, useRef } from 'react';


const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
        correctAnswer: 'Blue Whale',
    },
];

const MockTest = () => {
    const [quizDatas, setQuizDatas] = useState([]); // State to store quiz data
    const [quizData, setQuizData] = useState([]);

    const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
    const [showResults, setShowResults] = useState(false);
    const [countdown, setCountdown] = useState(3);

    const handleOptionSelect = (option, questionIndex) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = option;
        setUserAnswers(updatedAnswers);
    };
    const url = "/mockTest.json" ;
    useEffect(() => {
        // Fetch quiz data from the API when the component mounts
        fetch(url)
            .then((response) => response.json())
            .then((data) => setQuizDatas(data))
            .catch((error) => console.error("Error fetching quiz data:", error));
    }, [url]);

    const handleSubmit = () => {
        setShowResults(true);
    };

    const calculateScore = () => {
        let score = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === quizData[index].correctAnswer) {
                score++;
            }
        });
        return score;
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
    }
    const handleEnglish = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'English')
        setQuizData(bangla)
    }
    const handleHigherMathematics = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Higher Mathematics')
        setQuizData(bangla)
    }
    const handleChemistry = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Chemistry')
        setQuizData(bangla)
    }
    const handleBiology = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Biology')
        setQuizData(bangla)
    }
    const handlePhysics = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Physics')
        setQuizData(bangla)
    }
    const handleICT = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'ICT')
        setQuizData(bangla)
    }
    const handleGeneralKnowledge = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'General Knowledge')
        setQuizData(bangla)
    }

    return (

        <div>
            <div className="flex flex-wrap gap-3 justify-center  mb-10">
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-1 px-3 rounded-md cursor-pointer" onClick={() => handleBangla()}>Bangla</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-1 px-3 rounded-md cursor-pointer" onClick={() => handleEnglish()}>English</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-1 px-3 rounded-md cursor-pointer" onClick={() => handleHigherMathematics()}>Higher Mathematics</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-1 px-3 rounded-md cursor-pointer" onClick={() => handleChemistry()}>Chemistry</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-1 px-3 rounded-md cursor-pointer" onClick={() => handleBiology()}>Biology</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-1 px-3 rounded-md cursor-pointer" onClick={() => handlePhysics()}>Physics</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-1 px-3 rounded-md cursor-pointer" onClick={() => handleICT()}>ICT</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-1 px-3 rounded-md cursor-pointer" onClick={() => handleGeneralKnowledge()}>General Knowledge</h3>
            </div>
            <div className=" mx-auto p-10">
                {countdown > 0 && (
                    <div>
                        <h1 className="text-2xl font-semibold">Quiz Starting in {countdown} seconds...</h1>
                    </div>
                )}

                {countdown === 0 && !showResults && (
                    <div>
                        <h1 className="text-2xl font-semibold">Quiz</h1>

                      <div className='grid lg:grid-cols-2 gap-10'>
                      {quizData.map((question, questionIndex) => (
                            <div className=''  key={questionIndex}>                              
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
                        <button
                            onClick={handleSubmit}
                            className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                )}

                {showResults && (
                    <div>
                        <h1 className="text-2xl font-semibold">Quiz Results</h1>
                        <p>Your Score: {calculateScore()} / {quizData.length}</p>
                        <ul className="mt-4 space-y-2 grid grid-cols-2 gap-10 ">
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