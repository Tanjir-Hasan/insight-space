import React, { useState, useEffect, useContext } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useTitle from '../../../../Hooks/useTitle';
import { ThemeContext } from '../../../../providers/ThemeProvider';


function ModelTests({ selectedSubject, onSubmit, setUserAnswerss }) {
    const [modelTestData, setModelTestData] = useState([])
    const [questions, setQuestions] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const [userAnswers, setUserAnswers] = useState(Array(modelTestData.length).fill(''));
    const [showQuestions, setShowQuestions] = useState(false);
    const [showResults, setShowResults] = useState(false);

    useTitle('Model Test');
    const { theme } = useContext(ThemeContext);
   

   

    useEffect(() => {
        // Fetch quiz data from the API when the component mounts
        axiosSecure.get("/quiz")
            .then(data => setModelTestData(data?.data))
            .catch((error) => console.error("Error fetching quiz data:", error));
    }, []);
    const filteredQuestions = modelTestData.filter(
        (question) => question?.subject === selectedSubject
    );



    const handleStartQuiz = () => {
        setQuestions(filteredQuestions);
        setUserAnswers(Array(filteredQuestions?.length).fill(''));
        setShowQuestions(true);
    };

    const handleOptionSelect = (option, questionIndex) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = option;
        setUserAnswers(updatedAnswers);
        setUserAnswerss(filteredQuestions)
    };

    const handleSubmit = () => {
        setShowResults(true);
        onSubmit(userAnswers);
        // Handle quiz submission, e.g., calculate score
    };

    return (
        <div className='p-3'>
            <div>
                
                <h1 className="md:text-2xl font-semibold">Model Test - {selectedSubject}</h1>
                <h2 className='text-xs md:text-base'>Total Questions {filteredQuestions?.length}</h2>
                <h2 className='border-b-2 border-[#3c6e71] text-xs md:text-base'>Per Question 1 Point</h2>
                {!showQuestions && (
                    <button
                        onClick={handleStartQuiz}
                        className="mt-4 md:px-10 text-xs md:text-base text-white p-2 rounded bg-[#3c6e71] hover:bg-[#335c67] cursor-pointer">
                        Start Model test
                    </button>
                )}
            </div>
            {showQuestions && (
                <div className=''>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <h2 className="md:text-lg text-sm mt-8 font-semibold">{questionIndex + 1}. {question?.question}</h2>
                            <ul className="mt-1 text-xs space-y-2">
                                {question?.options.map((option, optionIndex) => (
                                    <li key={optionIndex} className="text-xs">
                                        <label className="flex text-xs gap-2 items-center space-x-2">
                                            <input
                                                type="radio"
                                                name={`question${questionIndex}`}
                                                value={option}
                                                checked={userAnswers[questionIndex] === option}
                                                onChange={() => handleOptionSelect(option, questionIndex)}
                                                className="text-blue-500 focus:ring-blue-300 "
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button
                       onClick={() => handleSubmit()}
                        className="mt-4 p-2 text-xs md:text-base rounded w-full bg-[#3c6e71] hover:bg-[#335c67] text-white cursor-pointer"
                    >
                        Submit Model Test
                    </button>
                </div>
            )}
          
        </div>
    );
}

export default ModelTests;