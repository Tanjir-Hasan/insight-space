// import React, { useState } from 'react';
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
// import './navber.css'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     let Links = [
//         { id: 1, name: "Home", link: "/" },
//         { id: 2, name: "NewsFeed", link: "/" },
//         { id: 3, name: "Blogs", link: "/" },
//         { id: 4, name: "Contact", link: "/" },


//     ];
//     let [open, setOpen] = useState(false);
//     let [opens, setOpens] = useState(false);
//     let [userOpen, setUserOpen] = useState(false);
//     return (
//         <div className='fixed w-[100%] z-20 '>
//             <div className='shadow-md w-full relative '>
//                 <div className='md:flex items-center justify-between bg-slate-900 py-3 md:px-10 px-7'>
//                     {/* logo section */}
//                     <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
//                         {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
//                         <img className='w-7 h-7  rounded-full' src="https://e7.pngegg.com/pngimages/659/864/png-clipart-logo-book-cartoon-books-cartoon-character-supplies-thumbnail.png" alt="" />
//                         <span className='text-white'>Insight Space</span>
//                     </div>
//                     {/* Menu icon */}
//                     <div onClick={() => setOpen(!open)} className='absolute right-8 top-3 cursor-pointer md:hidden w-7 h-7'>
//                         {
//                             open ? <XMarkIcon className='text-white' /> : <Bars3BottomRightIcon className='text-white' />
//                         }
//                     </div>
//                     {/* linke items */}
//                     <ul className={`md:flex md:items-center gap-3 md:pb-0 pb-12 absolute md:static bg-slate-900 md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
//                         {
//                             Links.map((link) => (
//                                 <li key={link.id} className='md:ml-4 md:my-0 my-4 font-semibold'>
//                                     <a href={link.link} className='text-white navsection-btn btn-nav text-sm hover:text-blue-400 duration-500'>{link.name}</a>
//                                 </li>))
//                         }





//                         {/* dropdown user menu for mobile*/}
//                         <div className=' flex rounded-lg  border-gray-700   px-2 gap-2  md:hidden'>
//                             <img className='rounded-full w-7 h-7' src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
//                             <div onClick={() => setUserOpen(!userOpen)} className='  cursor-pointer  w-7 h-7'>
//                                 {
//                                     userOpen ?
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                                         </svg>
//                                         :
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                                         </svg>
//                                 }

//                             </div>
//                             <ul className={` items-center text-white rounded-b-lg py-4 gap-3 absolute bg-slate-900    transition-all duration-500 ease-in ${userOpen ? 'top-14 left-32' : 'top-[-490px]'}`}>
//                                 <div className='mr-5 grid grid-cols-1 pl-4 z-10 text-xs leading-8 '>
//                                     <Link to=''> Name</Link>
//                                     <Link to=''> Edit Profile</Link>
//                                     <Link to=''> Settings</Link>
//                                     <Link to=''> Dark Mode</Link>
//                                     <Link to=''> Log out</Link>
//                                     <hr />
//                                 </div>
//                             </ul>
//                         </div>
//                     </ul>







//                     {/* dropdown user menu dakstop */}
//                     <div className='md:flex rounded-lg   px-2 w-36 justify-end gap-2  hidden'>
//                         <img className='rounded-full w-7 h-7' src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
//                         <div onClick={() => setOpens(!opens)} className='  cursor-pointer  w-7 h-7'>
//                             {
//                                 opens ? <XMarkIcon className='text-white' /> : <Bars3BottomRightIcon className='text-white' />
//                             }
//                         </div>
//                         <ul className={` items-center text-white rounded-b-lg py-4   gap-3   absolute  bg-slate-900    transition-all duration-1000 ease-in ${opens ? 'top-14' : 'top-[-490px]'}`}>
//                             <div className='mr-5 grid grid-cols-1 px-10 z-10 text-xs leading-8    ' >
//                                 <Link to=''> Name</Link>
//                                 <Link to=''> Edit Profile</Link>
//                                 <Link to=''> Settings</Link>
//                                 <Link to=''> Dark Mode</Link>
//                                 <Link to=''> Log out</Link>
//                                 <hr />
//                             </div>
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BiMenuAltRight, BiMenu } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../../../providers/ThemeProvider';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [showSearchField, setShowSearchField] = useState(false);

    const toggleSearchField = () => {
        setShowSearchField(!showSearchField);
    };

    const handleThemeToggle = () => {
        toggleTheme();
    };

    return (
        <div className={`py-6 ${theme === 'dark' ? 'dark' : 'w-full h-full bg-gradient-to-br from-teal-500 via-teal-300 to-blue-100'}`}>
            <div className='flex justify-between items-center'>

                <div>
                    <img src="" alt="" />
                    <h3>InSight space</h3>
                </div>
 
                <div >
                    {!showSearchField ? (
                        <button onClick={toggleSearchField}>
                            <BsSearch />
                        </button>
                    ) : (
                        <input
                            type="text"
                            placeholder="Search..."
                            onBlur={() => setShowSearchField(false)}
                        />
                    )}
                </div>

                <div className='flex items-center gap-3'>

                    <div>
                        <span className='' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen === true ? (
                                <BiMenuAltRight className='h-8 w-6 text-blue-700' />
                            ) : (
                                <BiMenu className='h-8 w-6 text-blue-500' />
                            )}
                        </span>

                        {isOpen === true && (
                            <div className='flex flex-row justify-between text-left bg-slate-200 absolute md:top-1 top-10 md:right-28 right-4 md:w-[250px] w-[350px] duration-1000'>
                                <Link to="/">Home</Link>
                                <Link to="/news-feed">News Feed</Link>
                                <Link to="/blog-feed">Blog</Link>
                                <Link to="/login">Login</Link>
                            </div>
                        )}
                    </div>

                    <button onClick={handleThemeToggle}>
                        {theme === 'light' ? <MdDarkMode className='h-8 w-6' /> : <BsSun className='h-8 w-6' />}
                    </button>

                    <img src="https://i.ibb.co/txZTzJB/user-1.png" alt="user-image" className='h-8 rounded-full' />

                </div>
            </div>
        </div>
    );
};

export default Navbar;