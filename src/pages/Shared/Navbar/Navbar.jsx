import { useContext, useState } from 'react';
import { BiMenuAltRight, BiMenu } from 'react-icons/bi';
import { ThemeContext } from '../../../providers/ThemeProvider';
import ActiveLink from '../../../components/ActiveLink';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../../Hooks/useAdmin';
import UserDetails from '../../NewsFeed/UserDetails/UserDetails';
import useUser from '../../../Hooks/useUser';
import ThemeButtons from '../../../ThemeButtons/ThemeButtons';
import useInstructor from '../../../Hooks/useInstructor';
import useAuth from '../../../Hooks/useAuth';
import { useEffect } from 'react';


const Navbar = () => {

    const { user, logOut } = useAuth();

    const [userDetails] = useUser();

    const [isOpen, setIsOpen] = useState(false);

    const { theme } = useContext(ThemeContext);

    const navigate = useNavigate();

    const [isAdmin] = useAdmin();

    const [isInstructor] = useInstructor();
    // for modal 
    const [isModalOpen, setIsModalOpen] = useState(false);


    // modal close  
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            setIsModalOpen(!isModalOpen);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            window.addEventListener('keydown', handleEscapeKey);

            document.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    const handleClickOutside = (event) => {
        const modal = document.querySelector('.modal');

        if (modal && !modal.contains(event.target)) {
            setIsModalOpen(!isModalOpen);
        }
    };

    const handleAbout = () => {
        setIsOpen(false)
    }


    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(result => {
                        Swal.fire(
                            'Logged Out!',
                            'Your Account has been Logged out .',
                            'success'
                        )
                        navigate("/")
                    })
                    .catch(error => console.log(error.message))
            }
        })
    }

    return (
        <div className={`font-[Poppins] py-2 pr-1 fixed z-50 left-0 top-0 right-0 ${theme === 'dark' ? 'bg-[#003049]' :
            theme === 'night' ? 'bg-[#03071e]' :
                theme === 'light' ? 'bg-[#f0efeb]' : ''}`}>

            <div className='flex justify-between items-center'>

                <div className='flex items-center gap-5'>

                    <Link to="/">
                        <img
                            src={theme === 'dark' ? "https://i.ibb.co/0Kz4d2x/inside-space-logo.png"
                                : theme === 'light' ? 'https://i.ibb.co/jrz53Ch/inside-space.png'
                                    : theme === 'night' ? 'https://i.ibb.co/0Kz4d2x/inside-space-logo.png'
                                        : ""}
                            alt="logo"
                            className='h-16 w-52'
                        />
                    </Link>

                </div>

                {/* show on large device */}

                <div className='hidden sm:hidden md:hidden lg:block xl:block'>

                    <div className={`flex gap-5 ${theme === 'dark' ? 'bg-transparent text-white' : theme === 'night' ? 'bg-transparent text-white' : theme === 'light' ? 'bg-[#f0efeb]' : ''}`}>

                        <ActiveLink to="/">Home</ActiveLink>

                        {!isAdmin && <ActiveLink to="/news-feed">News Feed</ActiveLink>}

                        {!isAdmin && <ActiveLink to="/connections">Connections</ActiveLink>}

                        {!isAdmin && <ActiveLink to="/ques-ans">Q&A</ActiveLink>}

                        {!isAdmin && <ActiveLink to="/blog-feed">Blog</ActiveLink>}

                        {!isAdmin && <ActiveLink to="/pro-memberShip">Quiz</ActiveLink>}

                        {isAdmin && <ActiveLink to="/admin-dashboard">Dashboard</ActiveLink>}

                        {isInstructor && <ActiveLink to="/instructor-dashboard">Dashboard</ActiveLink>}

                        <ActiveLink to="/about-us">About</ActiveLink>
                        {
                            user ?
                                <button onClick={handleLogOut}>Logout</button>
                                : <ActiveLink to="/login">Login</ActiveLink>
                        }
                    </div>

                </div>

                <div className='flex gap-3 items-center'>

                    <ThemeButtons></ThemeButtons>

                    {user ? <img onClick={() => setIsModalOpen(!isModalOpen)} src={user?.photoURL} alt="user-image" className='h-8 w-8 rounded-full' /> : <Link to="/login"><img src="https://i.ibb.co/txZTzJB/user-1.png" alt="user-image" className='h-8 w-8 rounded-full' /></Link>}

                    {/* show on small device */}

                    <div className='lg:hidden md:block ml-4'>

                        <span className='duration-1000' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <BiMenuAltRight className={`${theme === 'light' ? 'text-[#3c6e71]' : 'text-[#48cae4]'} h-8 w-6  absolute bottom-6 right-0 cursor-pointer text-[#3c6e71]`} />
                            ) : (
                                <BiMenu className={`${theme === 'light' ? 'text-[#3c6e71]' : 'text-[#48cae4]'} h-8 w-6 absolute bottom-6 right-0 cursor-pointer text-[#3c6e71]`} />
                            )}
                        </span>

                        {isOpen &&
                            <div  className=" animate-zoom-in mt-16  ">
                                <div className={` flex flex-col rounded-md gap-2 absolute right-0  px-8  ${theme === 'dark' ? 'bg-[#011627] text-white border-2 border-black' : theme === 'night' ? 'bg-[#0d1b2a] text-white border-2 border-black' : theme === 'light' ? 'bg-[#f0efeb] border-2 border-[#c6d6e4]' : ''}`}>

                                    <div onClick={() => handleAbout()}>
                                        <ActiveLink to="/">Home</ActiveLink>
                                    </div>
                                    <div onClick={() => handleAbout()}>
                                        {!isAdmin && <ActiveLink to="/news-feed">News Feed</ActiveLink>}
                                    </div>
                                    <div onClick={() => handleAbout()}>
                                        {!isAdmin && <ActiveLink to="/connections">Connections</ActiveLink>}
                                    </div>
                                    <div onClick={() => handleAbout()}>
                                        {!isAdmin && <ActiveLink to="/ques-ans">Q&A</ActiveLink>}
                                    </div>
                                    <div onClick={() => handleAbout()}>
                                        {!isAdmin && <ActiveLink to="/blog-feed">Blog</ActiveLink>}
                                    </div>
                                    <div onClick={() => handleAbout()}>
                                        {!isAdmin && <ActiveLink to="/pro-memberShip">Quiz</ActiveLink>}
                                    </div>
                                    <div onClick={() => handleAbout()}>
                                        {isAdmin && <ActiveLink to="/admin-dashboard">Dashboard</ActiveLink>}
                                    </div>
                                    <div onClick={() => handleAbout()}>
                                        <ActiveLink to="/about-us">About</ActiveLink>
                                    </div>

                                    <div className='bg-[#3c6e71] text-white pl-3 mb-3 rounded-md'>
                                        {
                                            user ?
                                                <button onClick={handleLogOut}>Logout</button>
                                                : <ActiveLink to="/login">Login</ActiveLink>
                                        }
                                    </div>

                                </div>
                            </div>
                        }

                    </div>

                </div>

            </div>

            {/* modal start  */}

            
            <div className='modal'>
                {isModalOpen && (
                    <div className='absolute  top-20 right-0 rounded-xl'>

                        <div className={`rounded-xl  ${theme === 'dark' ? 'bg-black border border-dark' : 'bg-[#f0efeb]'}`}>
                            <UserDetails userDetails={userDetails}></UserDetails>
                        </div>

                    </div>

                )}
            </div>
          

            {/* modal end  */}

        </div >
    );
};

export default Navbar;
