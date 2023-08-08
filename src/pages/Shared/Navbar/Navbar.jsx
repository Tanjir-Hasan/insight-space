import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './navber.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "NewsFeed",  link: "/" },
        { id: 3, name: "Blogs", link: "/" },
        { id: 4, name: "Contact", link: "/" },


    ];
    let [open, setOpen] = useState(false);
    let [opens, setOpens] = useState(false);
    let [userOpen, setUserOpen] = useState(false);
    return (
        <div className='fixed w-[100%] z-20 '>
            <div className='shadow-md w-full relative '>
                <div className='md:flex items-center justify-between bg-slate-900 py-3 md:px-10 px-7'>
                    {/* logo section */}
                    <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                        {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
                        <img className='w-7 h-7 rounded-full' src="https://i.ibb.co/khF9t11/Screenshot-5-removebg-preview.png" alt="" />
                        <span className='text-white'>SiteName</span>
                    </div>
                    {/* Menu icon */}
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-3 cursor-pointer md:hidden w-7 h-7'>
                        {
                            open ? <XMarkIcon className='text-white' /> : <Bars3BottomRightIcon className='text-white' />
                        }
                    </div>
                    {/* linke items */}
                    <ul className={`md:flex md:items-center gap-3 md:pb-0 pb-12 absolute md:static bg-slate-900 md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.id} className='md:ml-4 md:my-0 my-4 font-semibold'>
                                    <a href={link.link} className='text-white navsection-btn btn-nav text-sm hover:text-blue-400 duration-500'>{link.name}</a>
                                </li>))
                        }





                        {/* dropdown user menu for mobile*/}
                        <div className=' flex rounded-lg  border-gray-700   px-2 gap-2  md:hidden'>
                            <img className='rounded-full w-7 h-7' src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
                            <div onClick={() => setUserOpen(!userOpen)} className='  cursor-pointer  w-7 h-7'>
                                {
                                    userOpen ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                }

                            </div>
                            <ul className={` items-center text-white rounded-b-lg py-4 gap-3 absolute bg-slate-900    transition-all duration-500 ease-in ${userOpen ? 'top-14 left-32' : 'top-[-490px]'}`}>
                                <div className='mr-5 grid grid-cols-1 pl-4 z-10 text-xs leading-8 '>
                                    <Link to=''> Name</Link>
                                    <Link to=''> Edit Profile</Link>
                                    <Link to=''> Settings</Link>
                                    <Link to=''> Dark Mode</Link>
                                    <Link to=''> Log out</Link>
                                    <hr />
                                </div>
                            </ul>
                        </div>
                    </ul>







                    {/* dropdown user menu dakstop */}
                    <div className='md:flex rounded-lg   px-2 w-36 justify-end gap-2  hidden'>
                        <img className='rounded-full w-7 h-7' src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
                        <div onClick={() => setOpens(!opens)} className='  cursor-pointer  w-7 h-7'>
                            {
                                opens ? <XMarkIcon className='text-white' /> : <Bars3BottomRightIcon className='text-white' />
                            }
                        </div>
                        <ul className={` items-center text-white rounded-b-lg py-4   gap-3   absolute  bg-slate-900    transition-all duration-500 ease-in ${opens ? 'top-14' : 'top-[-490px]'}`}>
                            <div className='mr-5 grid grid-cols-1 px-10 z-10 text-xs leading-8    ' >
                                <Link to=''> Name</Link>
                                <Link to=''> Edit Profile</Link>
                                <Link to=''> Settings</Link>
                                <Link to=''> Dark Mode</Link>
                                <Link to=''> Log out</Link>
                                <hr />
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;