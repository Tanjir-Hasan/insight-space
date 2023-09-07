import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink';
import AdminHome from '../pages/AdminDeshBoard/AdminHome/AdminHome';
import { FaAlignLeft, FaArrowCircleLeft, FaArrowCircleRight, FaDollarSign, FaEdit, FaHome, FaThList, FaUsers } from 'react-icons/fa';

const AdminLayout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const location = useLocation();

    return (
        <div className="flex">
            {/* Navigation Bar */}
            <div className={`${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out fixed top-0 left-0 w-80 bg-[#F0EFEB] px-6 py-4  min-h-screen`}>
                {/* Navigation Content */}
                <nav>
                    <ul className="space-y-4 border-b-4 border-[#3c6e71] py-10">
                        <li className='flex items-center space-x-2'><FaHome></FaHome><ActiveLink to="/admin-dashboard/adminHome">Admin Home</ActiveLink></li>
                        <li className='flex items-center space-x-2'><FaUsers></FaUsers><ActiveLink to="/admin-dashboard/all-users">All Users</ActiveLink></li>
                        <li className='flex items-center space-x-2'><FaThList></FaThList><ActiveLink to="/admin-dashboard/all-posts">All Posts</ActiveLink></li>
                        <li className='flex items-center space-x-2'><FaEdit></FaEdit><ActiveLink to="/add-quiz">Add Quiz</ActiveLink></li>
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
                    <button className="w-full border-b-4 border-[#3c6e71] text-black font-bold rounded-lg px-4 py-2 hover:bg-[#3c6e71] hover:text-white transition duration-300 ease-in-out flex items-center justify-center" onClick={() => setIsDrawerOpen(!isDrawerOpen)}><FaArrowCircleLeft className='me-2 text-lg'></FaArrowCircleLeft> Close Drawer</button>
                </div>
            </div>
            {/* Content Outlet */}
            <div
                className={`${isDrawerOpen ? 'ml-80 pl-8' : 'ml-0'
                    } transition-all duration-300 ease-in-out flex-grow p-4`}
            >
                <Outlet></Outlet>
                <div hidden={location.pathname !== "/admin-dashboard"}>
                    <AdminHome></AdminHome>
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

export default AdminLayout;