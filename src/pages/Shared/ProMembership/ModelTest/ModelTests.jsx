import React, { useState, useEffect } from 'react';

function ModelTests({ selectedSubject, onSubmit }) {
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
    };

    const handleSubmit = () => {
        setShowResults(true);
        onSubmit(userAnswers);
        // Handle quiz submission, e.g., calculate score
    };



    return (
        <div>
            <h1 className="text-2xl font-semibold">Model Test - {selectedSubject}</h1>
            {!showQuestions && (
                <button
                    onClick={handleStartQuiz}
                    className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer">
                    Start Model test
                </button>
            )}
            {showQuestions && (
                <div>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <h2 className="text-lg mt-4">{question.question}</h2>
                            <ul className="mt-2 space-y-2">
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex} className="p-2">
                                        <label className="flex items-center space-x-2">
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
                        onClick={handleSubmit}
                        className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            )}
            {showResults && (
                <Results
                    userAnswers={userAnswers}
                    correctAnswers={modelTestData.map((q) => q.correctAnswer)}
                />
            )}
        </div>
    );
}

export default ModelTests;