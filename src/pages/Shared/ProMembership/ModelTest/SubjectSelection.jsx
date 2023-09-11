import React, { useState } from 'react';

function SubjectSelection({ subjects, onSelectSubject }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Select a Subject</h1>
      <ul className="mt-4 grid grid-cols-3 gap-5 rounded-md">
        {subjects.map((subject, index) => (
          <li
            key={index}
            className="cursor-pointer text-white text-4xl text-center items-center font-bold hover:underline border-2 py-20 bg-[#2d3e3f]  rounded-md "
            onClick={() => onSelectSubject(subject)}
          >
            {subject}
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default SubjectSelection;