import React, { useEffect, useState } from 'react';

const CorrectAns = () => {
    const [quizes, setQuizes] = useState([])
    const [quiz, setQuiz] = useState(quizes)

    const [userAnswers, setUserAnswers] = useState(Array(quiz.length).fill(''));
    const [showResult, setShowResult] = useState(false);


    const handleAnswerChange = (questionIndex, selectedOption) => {
        const newAnswers = [...userAnswers];
        newAnswers[questionIndex] = selectedOption;
        setUserAnswers(newAnswers);
    };

    const handleSubmitQuiz = () => {
        setShowResult(true);
    };

    const calculateScore = () => {
        return userAnswers.reduce((score, userAnswer, index) => {
            if (userAnswer === quiz[index].correctAnswer) {
                return score + 1;
            }
            return score;
        }, 0);
    };



    const url = '/quiz.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setQuizes(data))
    }, [url])
    return (
        <div>
            <div className='grid grid-cols-2 gap-10 mt-10'>
                {quizes.map((question, index) => (
                    <div key={index} className="question mt-5">

                        <p className='text-xl font-semibold'>{index + 1}. {question.question}</p>
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="option flex gap-5  ">
                                <input
                                    type="radio"
                                    id={`q${index}o${optionIndex}`}
                                    name={`q${index}`}
                                    value={option}
                                    onChange={() => handleAnswerChange(index, option)}
                                    checked={userAnswers[index] === option}

                                />
                                <label htmlFor={`q${index}o${optionIndex}`}>{option}</label>
                            </div>
                        ))}
                        <p><span className=''> Correct Ans:</span> {question.correctAnswer}</p>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default CorrectAns;