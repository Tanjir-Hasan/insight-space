import React, { useContext, useState } from 'react';
import SubjectSelection from './SubjectSelection';
import ModelTests from './ModelTests';
import { subjects, } from './data';
import { AuthContext } from '../../../../providers/AuthProvider';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useTitle from '../../../../Hooks/useTitle';
import { ThemeContext } from '../../../../providers/ThemeProvider';

const ModelTest = () => {

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userAnswerss, setUserAnswerss] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  useTitle('Model Test');
    const { theme } = useContext(ThemeContext);


  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === userAnswerss[index]?.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setShowResults(false);
  };


  const handleSubmitModelTest = (answers) => {
    setUserAnswers(answers);

    const date = new Date();
    const mockTest = {
      userName: user?.displayName,
      photo: user?.photoURL,
      email: user?.email,
      date,
      score: calculateScore(),
      subject: selectedSubject,
      examName: 'Model Test'
    }
    axiosSecure.post("/mock-test", mockTest)
      .then(data => console.log(data.data))
    setShowResults(true);
  };


  return (
    <div className={`min-h-[70vh] `}>
      <header className="">

      </header>
      <main className="">
        {!selectedSubject && (
          <SubjectSelection subjects={subjects} onSelectSubject={handleSubjectSelect} />

        )}
        {selectedSubject && !showResults && (
          <ModelTests
            selectedSubject={selectedSubject}
            // questions={modelTestQuestions}
            onSubmit={handleSubmitModelTest}
            setUserAnswerss={setUserAnswerss}



          />
        )}

        {showResults && (
          <div className='p-3'>
            <h1 className="text-2xl font-semibold">Quiz Results</h1>
            <p className='border-b-2 border-[#3c6e71]'>Your Score: {calculateScore()} / {userAnswerss.length}</p>
            <ul className="mt-4 space-y-2 grid lg:grid-cols-2 gap-10 ">
              {userAnswerss.map((question, index) => (
                <li
                  key={index}
                  className={`p-2 ${userAnswers[index] === question.correctAnswer
                    ? 'text-green-500'
                    : 'text-red-500'
                    }`}
                >
                  <p className='text-xl  font-semibold'>{index + 1}. {question.question}</p>
                  <p>Your Answer: {userAnswers[index]}</p>
                  <p>Correct Answer: {question.correctAnswer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}



export default ModelTest;