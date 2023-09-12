import React, { useEffect, useState } from 'react';
import useUser from '../../../../Hooks/useUser';
import useQuizResult from '../../../../Hooks/useQuizResult';
import ReChart from './ReChart';









const QuizDashboard = () => {
    const [userDetails] = useUser();
    const [quizResult] = useQuizResult();
    // console.log(quizResult)



    return (
        <div className='min-h-[65vh]'>
            <div className='grid grid-cols-3 gap-5 text-white'>
                <div className='h-40 bg-slate-600 rounded-md'>
                    <div className=' text-center p-2'>
                        <img className='mx-auto rounded-full h-20 w-20' src={userDetails?.photoURL} alt="" />
                        <h2>{userDetails?.displayName}</h2>
                    </div>
                </div>
                <div className='h-40 bg-slate-600 rounded-md'>
                    <h2 className='text-2xl p-2'>Total Exam attend</h2>
                    <div className='p-2'>
                        <p>Mock test: {quizResult.length}</p>
                        <p>Live exam: {quizResult.length}</p>
                        <p>Model test: {quizResult.length}</p>
                    </div>
                </div>
                <div className='h-40 bg-slate-600 rounded-md'>
                    <h2 className='text-2xl p-2'>Exam</h2>
                </div>
            </div>

            <ReChart></ReChart>
        </div>
    );
};

export default QuizDashboard;