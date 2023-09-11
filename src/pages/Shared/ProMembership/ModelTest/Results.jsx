// Results.js
import React from 'react';

function Results({ score, userAnswers, correctAnswers }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Model Test Results</h1>
      <p>Your Score: {score} / {correctAnswers.length}</p>
      <ul className="mt-4 space-y-2">
        {correctAnswers.map((answer, index) => (
          <li
            key={index}
            className={`p-2 ${
              userAnswers[index] === answer
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            <p>Question {index + 1}</p>
            <p>Your Answer: {userAnswers[index]}</p>
            <p>Correct Answer: {answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;