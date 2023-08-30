import React, { useEffect, useState } from 'react';

const Modal = ({ quiz, isOpen, onClose }) => {

    // TODO: DO SOME MODAL DESIGN ALSO APPLY DARK LIGHT THEME
    const [userAnswers, setUserAnswers] = useState(Array(quiz.length).fill(''));

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    if (!isOpen) return null;

    const handleAnswerChange = (questionIndex, selectedOption) => {
        const newAnswers = [...userAnswers];
        newAnswers[questionIndex] = selectedOption;
        setUserAnswers(newAnswers);
    };


    return (

        <div>
            <div className="fixed inset-0 flex text-black   items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className=" bg-white rounded-lg p-6 z-10 md:w-[70%] w-[90%] max-h-[80vh] overflow-y-auto relative">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold border-b-2">Correct Answer</h2>
                    </div>

                    <div className='grid md:grid-cols-2 p-5 gap-10 mt-10'>
                        {quiz.map((question, index) => (
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
                                            checked={userAnswers[index] === option} />

                                        <label htmlFor={`q${index}o${optionIndex}`}>{option}</label>
                                    </div>
                                ))}

                                <p className='text-sky-500 font-bold'>Ans: {question.correctAnswer}</p>
                            </div>
                        ))}
                    </div>








                </div>
            </div>
        </div>
    );
};

export default Modal;