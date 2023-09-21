import { useContext, useState } from "react";
import { FaAlignLeft, FaArrowCircleLeft, FaArrowCircleRight, FaDollarSign, FaEdit, FaHome, FaThList, FaUsers } from "react-icons/fa";
import { Outlet, useLocation } from "react-router";
import ActiveLink from "../components/ActiveLink";
import InstructorHome from "../pages/InstructorDashBoard/InstructorHome/InstructorHome";
import useInstructor from "../Hooks/useInstructor";
import { ThemeContext } from "../providers/ThemeProvider";


const InstructorLayout = () => {

    const { theme } = useContext(ThemeContext);

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const location = useLocation();

    const [isInstructor] = useInstructor();

    return (
        <div className={`${theme}`}>

            <div className="flex">
                {/* Navigation Bar */}
                <div className={`${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out fixed top-0 left-0 w-80 px-6 py-4 min-h-screen ${theme === 'dark' ? 'bg-[#003049]' :
                        theme === 'night' ? 'bg-[#03071e]' :
                            theme === 'light' ? 'bg-[#f0efeb]' : ''}`}>

                    {/* Navigation Content */}

                    <nav >

                        <ul className="space-y-4 border-b-4 border-[#3c6e71] py-10">
                            <li className='flex items-center space-x-2'><FaHome></FaHome><ActiveLink to="/instructor-dashboard/home">Instructor Home</ActiveLink></li>

                            {/* <li className='flex items-center space-x-2'><FaUsers></FaUsers><ActiveLink to="/instructor-dashboard/payment-history">Payment History</ActiveLink></li> */}

                            <li className='flex items-center space-x-2'><FaThList></FaThList><ActiveLink to="/instructor-dashboard/my-quiz">My Quiz</ActiveLink></li>

                            <li className='flex items-center space-x-2'><FaEdit></FaEdit><ActiveLink to="/instructor-dashboard/add-quiz">Add Quiz</ActiveLink></li>
                        </ul>

                        <ul className='space-y-4 py-10'>
                            <li className='flex items-center space-x-2'><FaHome></FaHome><ActiveLink to="/">Home</ActiveLink></li>
                            <li className='flex items-center space-x-2'><FaAlignLeft></FaAlignLeft><ActiveLink to="/news-feed">News Feed</ActiveLink></li>
                            <li className='flex items-center space-x-2'><FaAlignLeft></FaAlignLeft><ActiveLink to="/blog-feed">Blog</ActiveLink></li>
                            <li className='flex items-center space-x-2'><FaDollarSign></FaDollarSign><ActiveLink to="/paid-members">Subscription</ActiveLink></li>
                            <li className='flex items-center space-x-2'><FaUsers></FaUsers><ActiveLink to="/about-us">About</ActiveLink></li>
                        </ul>

                    </nav>

                    <div>

                        <button className={`w-full text-xs lg:text-base border-b-4 border font-bold rounded-lg md:px-4 py-2 transition duration-300 ease-in-out flex items-center justify-center ${theme === 'light' ? 'text-white bg-gradient-to-l from-[#006466] to-[#212f45] hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45] border-[#3c6e71]' :
                            theme === 'dark' ? 'text-white bg-gradient-to-r from-[#48cae4] to-[#051923] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4] border-[#48cae4]' :
                                theme === 'night' ? 'text-white bg-gradient-to-r from-[#0d1b2a] to-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced] border-[#b79ced]' : ''}`}
                            onClick={() => setIsDrawerOpen(!isDrawerOpen)}><FaArrowCircleLeft className='me-2 text-lg'></FaArrowCircleLeft> Close Drawer</button>

                    </div>

                </div>

                {/* Content Outlet */}

                <div className={`${isDrawerOpen ? 'ml-80 pl-8' : 'ml-0'
                    } transition-all duration-300 ease-in-out flex-grow p-4`}
                >
                    <Outlet></Outlet>
                    <div hidden={location.pathname !== "/instructor-dashboard"}>
                        <InstructorHome></InstructorHome>
                    </div>
                </div>

                {/* Button to open/close drawer */}
                {!isDrawerOpen && <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    className={`fixed top-6 left-2 flex items-center border-b-4 font-bold rounded-lg px-4 py-2  transition duration-300 ease-in-out ${theme === 'light' ? 'text-white bg-gradient-to-l from-[#006466] to-[#212f45] hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45]' :
                        theme === 'dark' ? 'text-white bg-gradient-to-r from-[#48cae4] to-[#051923] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4]' :
                            theme === 'night' ? 'text-white bg-gradient-to-r from-[#0d1b2a] to-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced]' : ''}`}>
                    Open Drawer <FaArrowCircleRight className='ms-2 text-lg'></FaArrowCircleRight>
                </button>}
            </div>
            
        </div>
    );
};

export default InstructorLayout;