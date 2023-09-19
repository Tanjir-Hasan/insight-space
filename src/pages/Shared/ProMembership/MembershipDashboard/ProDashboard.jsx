import React, { useContext, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight, FaDashcube, FaDatabase, FaEnvelopeOpenText, FaFileVideo, FaHireAHelper, FaHome, FaPencilRuler, FaRandom, FaStickyNote, FaThList, FaUserCheck, FaUsers } from 'react-icons/fa';
import ActiveLink from '../../../../components/ActiveLink';
import QuizDashboard from '../QuizDashboard/QuizDashboard';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import useTitle from '../../../../Hooks/useTitle';
import usePremiumUser from '../../../../Hooks/usePremiumUser';

const ProDashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const location = useLocation();
    const [isPremiumUser] = usePremiumUser();
    console.log(isPremiumUser);

    useTitle('Quiz Dashboard');
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`flex pt-10 md:px-5 px-2 ${theme}`}>
            {/* Navigation Bar */}
            <div className={`${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} ${theme} transition-transform duration-300 ease-in-out fixed top-0 left-0 w-52 lg:w-80 / bg-[#F0EFEB] px-6 py-4  min-h-screen`}>
                {/* Navigation Content */}
                <nav>
                    <ul className="space-y-4 border-[#3c6e71] py-10 mt-12">
                        <li className='flex text-xs lg:text-base items-center space-x-2'><FaHome></FaHome><ActiveLink to="/pro-memberShip/quiz-dashboard">Quiz DashBoard</ActiveLink></li>

                        <li className='flex text-xs lg:text-base items-center space-x-2'><FaPencilRuler></FaPencilRuler><ActiveLink to="/pro-memberShip/quiz-rules ">Rules & Regulations</ActiveLink></li>

                        <li className='flex text-xs lg:text-base items-center space-x-2'><FaUserCheck></FaUserCheck><ActiveLink to="/pro-memberShip/all-Instructors">Our Instructors</ActiveLink></li>

                        <li className='flex text-xs lg:text-base items-center space-x-2'><FaStickyNote></FaStickyNote><ActiveLink to="/pro-memberShip/mock-test">Mock Test</ActiveLink></li>

                        <li className='flex text-xs lg:text-base items-center space-x-2'><FaFileVideo></FaFileVideo><ActiveLink to="/pro-memberShip/live-exam">Live Exam </ActiveLink></li>

                        <li className='flex text-xs lg:text-base items-center space-x-2'><FaHireAHelper></FaHireAHelper><ActiveLink to="/pro-memberShip/model-test">Model Test</ActiveLink></li>

                        <li className='flex text-xs lg:text-base items-center space-x-2'><FaRandom></FaRandom><ActiveLink to="/pro-memberShip/leader-board">Leaderboard</ActiveLink></li>

                        <li className='flex text-xs lg:text-base items-center space-x-2'><FaEnvelopeOpenText></FaEnvelopeOpenText><ActiveLink to="/pro-memberShip/download-certificate">DownLoad Certificate</ActiveLink></li>
                    </ul>

                </nav>
                <div>
                    <button className="w-full text-xs lg:text-base border-b-4 border-[#3c6e71] hover:text-white  border  font-bold rounded-lg md:px-4 py-2 hover:bg-[#3c6e71] transition duration-300 ease-in-out flex items-center justify-center" onClick={() => setIsDrawerOpen(!isDrawerOpen)}><FaArrowCircleLeft className='me-2 text-lg'></FaArrowCircleLeft> Close Drawer</button>
                </div>
            </div>
            {/* Content Outlet */}
            <div
                className={`${isDrawerOpen ? 'ml-44 lg:ml-72 pl-8' : 'ml-0'
                    } transition-all duration-300 ease-in-out flex-grow pt-4 min-h-[88vh]`}
            >
                <Outlet></Outlet>

                <div hidden={location.pathname !== "/pro-memberShip"}>
                    <QuizDashboard></QuizDashboard>
                </div>
            </div>

            {/* Button to open/close drawer */}
            {!isDrawerOpen && <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="fixed top-6 text-white left-2  flex items-center border-b-4 border-[#3c6e71] mt-14  font-bold rounded-lg px-4 py-2 bg-[#3c6e71] hover:bg-[#3c6e71] hover:text-black transition duration-300 ease-in-out">
                Open Drawer <FaArrowCircleRight className='ms-2 text-lg'></FaArrowCircleRight>
            </button>}
        </div>
    );
};







export default ProDashboard;