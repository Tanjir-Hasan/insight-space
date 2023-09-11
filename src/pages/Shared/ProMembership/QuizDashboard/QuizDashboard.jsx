import React from 'react';
import useUser from '../../../../Hooks/useUser';

const QuizDashboard = () => {
    const [userDetails] = useUser();
    // console.log(userDetails)
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
                    <h2 className='text-2xl p-2'>Rank</h2>
                </div>
                <div className='h-40 bg-slate-600 rounded-md'>
                    <h2 className='text-2xl p-2'>Exam</h2>
                </div>
            </div>
        </div>
    );
};

export default QuizDashboard;