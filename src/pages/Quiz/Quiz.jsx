import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';


const Quiz = () => {
  const [quizes, setQuizes] = useState([])
  const [quiz, setQuiz] = useState(quizes)
  const [userAnswers, setUserAnswers] = useState(Array(quiz.length).fill(''));
  const [showResult, setShowResult] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


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


  const handleEducation = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Educational')
    setQuiz(education)
    setShowResults(true);
  }
  const handleScience = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Science')
    setQuiz(education)
    setShowResults(true);
  }
  const handleHealth = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Health')
    setQuiz(education)
    setShowResults(true);
  }
  const handleTechnology = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Technology')
    setQuiz(education)
    setShowResults(true);
  }
  const handleFood = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Food')
    setQuiz(education)
    setShowResults(true);
  }
  const handleBooks = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Books')
    setQuiz(education)
    setShowResults(true);
  }
  const handleFashion = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Fashion')
    setQuiz(education)
    setShowResults(true);
  }
  const handleSports = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Sports')
    setQuiz(education)
    setShowResults(true);
  }







  return (
    <div className='w-10/12 mx-auto '>
      <div className="flex gap-5 mt-10">
        {showResult ?
          "" :
          (
            <div className='w-[20%] cursor-pointer font-semibold text-xl bg-slate-300 rounded-md'>
              <h2 className='bg-green-800 text-white p-2'>Select Your category</h2>
              <h3 onClick={() => handleEducation()} className='border p-2 hover:bg-[#344e41] duration-700 hover:text-white'>Educational</h3>
              <h3 onClick={() => handleScience()} className='border p-2 hover:bg-[#344e41] duration-700 hover:text-white'>Science</h3>
              <h3 onClick={() => handleHealth()} className='border p-2 hover:bg-[#344e41] duration-700 hover:text-white'>Health</h3>
              <h3 onClick={() => handleTechnology()} className='border p-2 hover:bg-[#344e41] duration-700 hover:text-white'>Technology</h3>
              <h3 onClick={() => handleFood()} className='border p-2 hover:bg-[#344e41] duration-700 hover:text-white'>Food</h3>
              <h3 onClick={() => handleBooks()} className='border p-2 hover:bg-[#344e41] duration-700 hover:text-white'>Books</h3>
              <h3 onClick={() => handleFashion()} className='border p-2 hover:bg-[#344e41] duration-700 hover:text-white'>Fashion</h3>
              <h3 onClick={() => handleSports()} className='border p-2 hover:bg-[#344e41] duration-700 hover:text-white'>Sports</h3>
            </div>
          )
        }

        <div className='w-[80%] mx-auto border rounded-md p-5'>
          {showResult ? (
            <div className='border-2 p-5'>
              <div className='text-lg'>
                <div className='flex items-center gap-2'>
                  <img className='rounded-full h- w-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQFHC3qMWuWauMJEfdnAKd8j1c1-hLkDQQqP_KaPErUD4VKiL8DkpjCB53EL9QC6_ppU&usqp=CAU" alt="" />
                  <p>Correct Answers: <span className='text-sky-500 font-bold text-2xl'>{calculateScore()}</span> </p>
                </div>

                <div className='flex items-center gap-2'>
                  <img className='rounded-full w-4 h-4' src="https://w7.pngwing.com/pngs/833/287/png-transparent-check-mark-international-red-cross-and-red-crescent-movement-american-red-cross-red-cross-mark-round-red-x-logo-miscellaneous-text-logo.png" alt="" />
                  <p>Wrong Answers: <span className='text-2xl font-bold text-red-600'>{quiz.length - calculateScore()} </span></p>
                </div>


                <p className='bg-slate-200 p-2 rounded-md text-xl font-semibold'>Your score: <span className='text-sky-600 text-2xl'>{calculateScore()}</span> out of <span className='text-2xl text-red-600'>{quiz.length}</span> points</p>
              </div>
              <div className='grid grid-cols-3 gap-5 justify-items-center my-10 '>
                <button onClick={() => setShowResult(false)} type="submit" className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-16 md:px-24 py-2 rounded-lg'>Back to Quiz</button>
                <button onClick={openModal} type="submit" className='text-xl text-white font-[Poppins] bg-[#497bf9] hover:bg-[#344e41] w-full duration-700 px-16 md:px-24 py-2 rounded-lg'>Correct Answesr</button>
                <button onClick={() => setShowResult(false)} type="submit" className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-16 md:px-24 py-2 rounded-lg'>Continue</button>
              </div>
              <div className="">
                <Modal userAnswers={userAnswers} quiz={quiz} isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>

          ) : (

            <div>
              <div className='text-center text-lg border-b-2 border-[#84a98c] font-bold'>
                <h2>"Test Your General Knowledge: Take on Our Ultimate Quiz Challenge!"</h2>
              </div>
             


              {
                showResults ?
                  (
                    <div className='grid grid-cols-2 gap-10 mt-10'>

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

                        </div>
                      ))}
                      <div className="px-6 mt-5 ">
                        <button onClick={handleSubmitQuiz} type="submit" className='text-xl  text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-16 md:px-24 py-2 rounded-lg'>Submit Quiz</button>
                      </div>
                    </div>
                  )

                  :

                  (
                    <div>
                      <h2 className='font-bold text-xl mt-4'>Here are some rules and regulations to keep in mind when attending a quiz:</h2>
                      <h2 className='text-xl font-semibold mt-2'> Preparation:</h2>
                      <div className='list-disc'>
                        <li> Review relevant topics and concepts before the quiz. </li>
                        <li> Ensure you have necessary materials and resources.</li>
                      </div>

                      <h2 className='text-xl font-semibold mt-3'> Focus and Read Instructions:</h2>
                      <div className='list-disc'>
                        <li> Pay close attention to each question and read instructions carefully. </li>
                        <li> Understand the question before attempting an answer.</li>
                      </div>                    

                      <h2 className='text-xl font-semibold mt-3'> Time Management:</h2>
                      <div className='list-disc'>
                        <li>  Keep track of time to allocate it effectively among questions. </li>
                        <li> Prioritize questions you are confident about.</li>
                      </div>                     

                      <h2 className='text-xl font-semibold mt-3'> Honesty and Integrity:</h2>
                      <div className='list-disc'>
                        <li> Answer questions honestly and independently.  </li>
                        <li>  Avoid cheating, unauthorized resources, or seeking help from others.</li>
                      </div>                    

                      <h2 className='text-xl font-semibold mt-3'>  Review and Learn:</h2>
                      <div className='list-disc'>
                        <li> Review and double-check your answers if time allows. </li>
                        <li>  Learn from the quiz experience for future improvement.</li>
                      </div> 

                      <h2 className='mt-5 font-bold '>Remember, attending a quiz is not only about getting a good grade but also about assessing your understanding of the material. Approach quizzes with a positive attitude, a focus on learning, and a commitment to academic integrity.</h2>                 
                    </div>
                  )
              }

            </div>


          )}
        </div>
      </div>
    </div >
  );
}

export default Quiz;