import React, { useState, useEffect, useRef } from "react";
import Timer from './Timer';


const LiveExam = () => {
    const [quizDatas, setQuizDatas] = useState([]); // State to store quiz data
    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [timerStarted, setTimerStarted] = useState(false);
    const [subject, setSubject] = useState([])
    const timerRef = useRef(null);
    const startTimeRef = useRef(0);


    const url = "/mockTest.json"
    useEffect(() => {
        // Fetch quiz data from the API when the component mounts
        fetch(url)
            .then((response) => response.json())
            .then((data) => setQuizDatas(data))
            .catch((error) => console.error("Error fetching quiz data:", error));
    }, [url]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);

        if (!timerStarted) {
            setTimerStarted(true);
            startTimeRef.current = Date.now(); // Record the start time
            timerRef.current = setInterval(() => {
                const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
                setTimeElapsed(elapsed);
            }, 1000);
        }
    };

    const handleSubmit = () => {
        clearInterval(timerRef.current); // Stop the timer
        const correctAnswer = quizData[currentQuestion].correctAnswer;
        const isCorrect = selectedOption === correctAnswer;

        setUserAnswers([
            ...userAnswers,
            {
                question: quizData[currentQuestion].question,
                selected: selectedOption,
                correct: isCorrect,
            },
        ]);

        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption("");
        } else {
            setShowResults(true);
        }
    };

    const handleTimerComplete = () => {
        clearInterval(timerRef.current); // Stop the timer
        handleSubmit(); // Automatically submit the quiz when the timer completes
    };
    const [timeElapsed, setTimeElapsed] = useState(0); // Initialize timeElapsed state


    const handleBangla = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'বাংলা')
        setQuizData(bangla)
        setShowResult(true)
        setSubject('বাংলা')
    }
    const handleEnglish = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'English')
        setQuizData(bangla)
        setShowResult(true)
        setSubject('English')
    }
    const handleHigherMathematics = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Higher Mathematics')
        setQuizData(bangla)
        setShowResult(true)
        setSubject('Higher Mathematics')
    }
    const handleChemistry = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Chemistry')
        setQuizData(bangla)
        setShowResult(true)
        setSubject('Chemistry')
    }
    const handleBiology = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Biology')
        setQuizData(bangla)
        setShowResult(true)
        setSubject('Biology')
    }
    const handlePhysics = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'Physics')
        setQuizData(bangla)
        setShowResult(true)
        setSubject('Physics')
    }
    const handleICT = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'ICT')
        setQuizData(bangla)
        setShowResult(true)
        setSubject('ICT')
    }
    const handleGeneralKnowledge = () => {
        const bangla = quizDatas.filter(qui => qui.subject === 'General Knowledge')
        setQuizData(bangla)
        setShowResult(true)
        setSubject('General Knowledge')
    }

    return (

        <div className='min-h-[70vh]'>

            <div className="flex flex-wrap gap-3 justify-center  ">
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => handleBangla()}>Bangla</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => handleEnglish()}>English</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => handleHigherMathematics()}>Higher Mathematics</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => handleChemistry()}>Chemistry</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => handleBiology()}>Biology</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => handlePhysics()}>Physics</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => handleICT()}>ICT</h3>
                <h3 className="font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => handleGeneralKnowledge()}>General Knowledge</h3>
            </div>
            <h2 className='text-center mb-10 text-2xl font-bold mt-2 border-b-2  '>Select your subject for live Exam</h2>

            <div className="max-w-4xl mx-auto p-4">
                {showResults ? (
                    <div>
                        <h1 className="text-2xl font-semibold">Quiz Results</h1>
                        <p>Your Score: {score}/{quizData.length}</p>
                        <p className='border-b-2 border-[#3c6e71]'>Time Taken: {timeElapsed} seconds</p>
                        <ul className="mt-4 space-y-2">
                            {userAnswers.map((answer, index) => (
                                <li
                                    key={index}
                                    className={`p-2 ${answer.correct ? "text-green-500" : "text-red-500"
                                        }`}>
                                    <p>{answer.question}</p>
                                    <p>Your Answer: {answer.selected}</p>
                                    <p>Correct Answer: {quizData[index].correctAnswer}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>
                        {
                            showResult ?
                                (<div>
                                    <h1 className="text-2xl font-semibold">
                                        Live Exam - {subject}
                                    </h1>
                                    <p>Total Question {quizData.length}</p>
                                    {quizData.length > 0 && (
                                        <Timer
                                            startTime={60}
                                            onComplete={handleTimerComplete}
                                            setTimeElapsed={setTimeElapsed}
                                        />
                                    )}
                                    {quizData.length > 0 && (
                                        <p className="mt-2 font-bold text-2xl"> {currentQuestion + 1}. {quizData[currentQuestion].question}</p>
                                    )}
                                    {quizData.length > 0 && (
                                        <ul className="mt-4 space-y-2">
                                            {quizData[currentQuestion].options.map((option, index) => (
                                                <li
                                                    key={index}
                                                    className={`p-2 cursor-pointer ${selectedOption === option
                                                        ? "bg-violet-800 text-white"
                                                        : "bg-gray-200 hover:bg-gray-300"
                                                        }`}
                                                    onClick={() => handleOptionSelect(option)}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <button
                                        onClick={handleSubmit}
                                        className="mt-4  text-white p-2 rounded w-full bg-[#3c6e71] hover:bg-[#335c67] cursor-pointer"
                                    >
                                        Next Question
                                    </button>
                                </div>)
                                :
                                (
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
                                )
                        }

                    </div>
                )}
            </div>
        </div>
    );
};

export default LiveExam;