import React, { useEffect, useState } from 'react';


// const questions = [
//   {
//     categoryName: 'General Knowledge',
//     question: 'What is the capital of France?',
//     options: ['Paris', 'London', 'Berlin', 'Rome'],
//     correctAnswer: 'Paris',
//   },
//   {
//     question: 'What is the largest mammal?',
//     options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
//     correctAnswer: 'Blue Whale',
//   },
//   // Add more questions...


//   {

//     categoryName: 'Science',
//     question: 'What is the chemical symbol for gold?',
//     options: ['Go', 'Au', 'Ag', 'G'],
//     correctAnswer: 'Au',
//   },
//   {
//     id: 1,
//     categoryName: 'Science',
//     question: 'Which gas do plants use to photosynthesize?',
//     options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
//     correctAnswer: 'Carbon Dioxide',
//   },
//   // Add more questions...


//   {
//     categoryName: 'History',
//     question: 'Who was the first President of the United States?',
//     options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'],
//     correctAnswer: 'George Washington',
//   },
//   {
//     question: 'In which year did World War II end?',
//     options: ['1945', '1918', '1939', '1941'],
//     correctAnswer: '1945',
//   },
//   // Add more questions...



//   {
//     categoryName: 'Sports',


//     question: 'Which sport is known as the "gentleman\'s game"?',
//     options: ['Soccer', 'Tennis', 'Cricket', 'Rugby'],
//     correctAnswer: 'Cricket',
//   },
//   {
//     question: 'In which country were the first modern Olympic Games held?',
//     options: ['France', 'Greece', 'United Kingdom', 'USA'],
//     correctAnswer: 'Greece',
//   },
//   // Add more questions...


//   // Add more questions here...
// ];

const Quiz = () => {
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


  const handleEducation = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Educational')
    setQuiz(education)
  }
  const handleScience = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Science')
    setQuiz(education)
  }
  const handleHealth = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Health')
    setQuiz(education)
  }
  const handleTechnology = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Technology')
    setQuiz(education)
  }
  const handleFood = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Food')
    setQuiz(education)
  }
  const handleBooks = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Books')
    setQuiz(education)
  }
  const handleFashion = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Fashion')
    setQuiz(education)
  }
  const handleSports = () => {
    const education = quizes.filter(qui => qui.categoryName === 'Sports')
    setQuiz(education)
  }


  return (
    <div className='w-10/12 mx-auto '>


     



      <div className="flex gap-5 mt-10">
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




        <div className='w-[80%] border rounded-md p-5'>
          {showResult ? (
            <div className='border-2 p-5'>
              <div className='text-lg'>
                <p></p>
                <p>Your time:</p>

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
                <button type="submit" className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-16 md:px-24 py-2 rounded-lg'>View Question</button>
                <button type="submit" className='text-xl text-white font-[Poppins] bg-[#497bf9] hover:bg-[#344e41] w-full duration-700 px-16 md:px-24 py-2 rounded-lg'>Correct Answesr</button>
                <button type="submit" className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-16 md:px-24 py-2 rounded-lg'>Continue</button>
              </div>
            </div>
          ) : (


            <div>
              <div className='text-center text-lg border-b-2 border-[#84a98c] font-bold'>
                <h2>"Test Your General Knowledge: Take on Our Ultimate Quiz Challenge!"</h2>
              </div>

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
                          checked={userAnswers[index] === option}

                        />
                        <label htmlFor={`q${index}o${optionIndex}`}>{option}</label>
                      </div>
                    ))}

                  </div>
                ))}


                <div className="px-6 ">
                  <button onClick={handleSubmitQuiz} type="submit" className='text-xl  text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-16 md:px-24 py-2 rounded-lg'>Submit Quiz</button>
                </div>
              </div>
            </div>
            
            
          )}         
        </div>
      </div>
    </div>


  );
}

export default Quiz;