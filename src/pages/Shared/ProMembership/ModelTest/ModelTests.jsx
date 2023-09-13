import React, { useState, useEffect } from 'react';


function ModelTests({ selectedSubject, onSubmit, setUserAnswerss }) {
    const [modelTestData, setModelTestData] = useState([])
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState(Array(modelTestData.length).fill(''));
    const [showQuestions, setShowQuestions] = useState(false);
    const [showResults, setShowResults] = useState(false);
   

    const url = "/mockTest.json";
    useEffect(() => {
        // Fetch quiz data from the API when the component mounts
        fetch(url)
            .then((response) => response.json())
            .then((data) => setModelTestData(data))
            .catch((error) => console.error("Error fetching quiz data:", error));
    }, [url]);
    const filteredQuestions = modelTestData.filter(
        (question) => question.subject === selectedSubject
    );



    const handleStartQuiz = () => {
        setQuestions(filteredQuestions);
        setUserAnswers(Array(filteredQuestions.length).fill(''));
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
        <div>
            <div>
                <button ><img className='h-10 w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXHzZOmexylo5sAAToZvwE9l7GRiz3sNatyJ52vztwOnPX1E45XDbRdV8sH0wrPwO9_B0&usqp=CAU" alt="" /></button>
                <h1 className="text-2xl font-semibold">Model Test - {selectedSubject}</h1>
                <h2>Total Questions {filteredQuestions.length}</h2>
                <h2 className='border-b-2 border-[#3c6e71]'>Per Question 1 Point</h2>
                {!showQuestions && (
                    <button
                        onClick={handleStartQuiz}
                        className="mt-4 px-10 text-white p-2 rounded bg-[#3c6e71] hover:bg-[#335c67] cursor-pointer">
                        Start Model test
                    </button>
                )}
            </div>
            {showQuestions && (
                <div className=''>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <h2 className="text-lg mt-8 font-semibold">{questionIndex + 1}. {question.question}</h2>
                            <ul className="mt-1 space-y-2">
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex} className="">
                                        <label className="flex gap-2 items-center space-x-2">
                                            <input
                                                type="radio"
                                                name={`question${questionIndex}`}
                                                value={option}
                                                checked={userAnswers[questionIndex] === option}
                                                onChange={() => handleOptionSelect(option, questionIndex)}
                                                className="text-blue-500 focus:ring-blue-300"
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
                        className="mt-4 p-2 rounded w-full bg-[#3c6e71] hover:bg-[#335c67] text-white cursor-pointer"
                    >
                        Submit Model Test
                    </button>
                </div>
            )}
            {/* {showResults && (
                <Results
                    userAnswers={userAnswers}
                    correctAnswers={modelTestData.map((q) => q.correctAnswer)}
                />
            )} */}
        </div>
    );
}

export default ModelTests;