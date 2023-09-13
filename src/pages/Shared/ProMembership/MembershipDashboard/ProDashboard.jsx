import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight, FaHome, FaThList, FaUsers } from 'react-icons/fa';
import ActiveLink from '../../../../components/ActiveLink';
import QuizDashboard from '../QuizDashboard/QuizDashboard';

const ProDashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const location = useLocation();

    return (
        <div className="flex ">
            {/* Navigation Bar */}
            <div className={`${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out fixed top-0 left-0 w-80 bg-[#F0EFEB] px-6 py-4  min-h-screen`}>
                {/* Navigation Content */}
                <nav>
                    <ul className="space-y-4 border-b-4 border-[#3c6e71] py-10 mt-20">
                        <li className='flex items-center space-x-2'><FaThList></FaThList><ActiveLink to="/pro-memberShip/quiz-dashboard">DashBoard</ActiveLink></li>
                        <li className='flex items-center space-x-2'><FaThList></FaThList><ActiveLink to="/pro-memberShip/leader-board">Leaderboard</ActiveLink></li>
                        <li className='flex items-center space-x-2'><FaHome></FaHome><ActiveLink to="/pro-memberShip/mock-test">Mock Test</ActiveLink></li>
                        <li className='flex items-center space-x-2'><FaUsers></FaUsers><ActiveLink to="/pro-memberShip/live-exam">Live Exam</ActiveLink></li>
                        <li className='flex items-center space-x-2'><FaThList></FaThList><ActiveLink to="/pro-memberShip/model-test">Model Test</ActiveLink></li>
                        <li className='flex items-center space-x-2'><FaThList></FaThList><ActiveLink to="/pro-memberShip/quiz-rules">Rules & Regulations</ActiveLink></li>

                        <li className='flex items-center space-x-2'><FaThList></FaThList><ActiveLink to="/all-Instructor">Instructors</ActiveLink></li>
                    </ul>

                </nav>
                <div>
                    <button className="w-full border-b-4 border-[#3c6e71] text-black font-bold rounded-lg px-4 py-2 hover:bg-[#3c6e71] hover:text-white transition duration-300 ease-in-out flex items-center justify-center" onClick={() => setIsDrawerOpen(!isDrawerOpen)}><FaArrowCircleLeft className='me-2 text-lg'></FaArrowCircleLeft> Close Drawer</button>
                </div>
            </div>
            {/* Content Outlet */}
            <div
                className={`${isDrawerOpen ? 'ml-80 pl-8' : 'ml-0'
                    } transition-all duration-300 ease-in-out flex-grow p-4`}
            >
                <Outlet></Outlet>

                <div hidden={location.pathname !== "/pro-memberShip"}>
                    <QuizDashboard></QuizDashboard>
                </div>
            </div>

            {/* Button to open/close drawer */}
            {!isDrawerOpen && <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="fixed top-6 left-2  flex items-center border-b-4 border-[#3c6e71] text-black font-bold rounded-lg px-4 py-2 hover:bg-[#3c6e71] hover:text-white transition duration-300 ease-in-out">
                Open Drawer <FaArrowCircleRight className='ms-2 text-lg'></FaArrowCircleRight>
            </button>}
        </div>
    );
};







export default ProDashboard;