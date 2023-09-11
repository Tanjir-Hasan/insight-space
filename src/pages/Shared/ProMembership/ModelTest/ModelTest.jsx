
import React, { useState } from 'react';

import SubjectSelection from './SubjectSelection';
import ModelTests from './ModelTests';
import Results from './Results';
import { subjects, modelTestQuestions } from './data';

const ModelTest = () => {

    const [selectedSubject, setSelectedSubject] = useState(null);
  const [userAnswers, setUserAnswers] = useState(Array(modelTestQuestions.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setUserAnswers(Array(modelTestQuestions.length).fill(''));
    setShowResults(false);
  };

  const handleSubmitModelTest = (answers) => {
    setUserAnswers(answers);
    setShowResults(true);
  };
    
    return (
        <div className="App">
      <header className="App-header">
        <h1>Model Test App</h1>
      </header>
      <main className="App-main">
        {!selectedSubject && (
          <SubjectSelection subjects={subjects} onSelectSubject={handleSubjectSelect}  />
        )}
        {selectedSubject && !showResults && (
          

          <ModelTests
          selectedSubject={selectedSubject}
            questions={modelTestQuestions}
            onSubmit={handleSubmitModelTest}
           
           
          />
        )}
        {/* {showResults && (
          <Results
            userAnswers={userAnswers}
            correctAnswers={modelTestQuestions.map((q) => q.correctAnswer)}
          />
        )} */}
      </main>
    </div>
  );
}



export default ModelTest;