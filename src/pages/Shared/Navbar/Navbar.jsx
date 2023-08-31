import { useContext, useState } from 'react';
import { BiMenuAltRight, BiMenu } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../../../providers/ThemeProvider';
import ActiveLink from '../../../components/ActiveLink';
import useAuth from '../../../Hooks/UseAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../../Hooks/useAdmin';
import UserDetails from '../../NewsFeed/UserDetails/UserDetails';
import useUser from '../../../Hooks/useUser';
import GoogleTranslator from '../GoogleTranslator/GoogleTranslator';


const Navbar = () => {
    const { user, logOut } = useAuth();

    const [userDetails] = useUser();

    const [isOpen, setIsOpen] = useState(true);

    const { theme, toggleTheme } = useContext(ThemeContext);

    const navigate = useNavigate();

    const [isAdmin] = useAdmin();

    const handleThemeToggle = () => {
        toggleTheme();
    };

    // for modal 
    const [isModalOpen, setIsModalOpen] = useState(false);


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
                    .catch(error => { })
            }
        })
    }

    return (
        <div className={`font-[Poppins] py-2 pr-1 fixed z-50 left-0 top-0 right-0 ${theme === 'dark' ? 'bg-[#051923] text-white' : 'bg-[#f0efeb]'}`}>
            {/* bg-[#001427] */}
            <div className='flex justify-between items-center'>

                <div className='flex'>

                    <Link to="/">
                        <img src="https://i.ibb.co/Kj8scz6/logo2.png" alt="logo" className='h-16' />
                    </Link>

                    <GoogleTranslator></GoogleTranslator>

                </div>



                <div className='flex items-center gap-3'>
                    <div>
                        <span className='duration-1000' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <BiMenuAltRight className='h-8 w-6 cursor-pointer text-[#84a98c]' />
                            ) : (
                                <BiMenu className='h-8 w-6 cursor-pointer text-[#84a98c]' />
                            )}
                        </span>

                        {isOpen && (
                            <div className={`flex flex-col md:flex-row  justify-between gap-4 md:pb-0 pb-2 md:px-0 px-2 rounded-b-lg absolute md:top-7 top-16 md:right-32 right-1 duration-1000 ${isOpen === true && theme === 'dark' ? 'bg-[#051923] text-white' : 'bg-[#f0efeb] text-black'}`}>

                                <ActiveLink to="/">Home</ActiveLink>

                                {isAdmin ? <ActiveLink to="/AdminHome">All Users</ActiveLink> : <ActiveLink to="/news-feed">News Feed</ActiveLink>}

                                <ActiveLink to="/connections">Connections</ActiveLink>

                                {isAdmin ? <ActiveLink to="/allPosts">All Posts</ActiveLink> : <ActiveLink to="/ques-ans">Q&A</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/blog-feed">Blog</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/quiz">Quiz</ActiveLink>}

                                <ActiveLink to="/paid-members">Subscription</ActiveLink>

                                <ActiveLink to="/about-us">About</ActiveLink>

                                {
                                    user ?
                                        <button onClick={handleLogOut}>Logout</button>
                                        : <ActiveLink to="/login">Login</ActiveLink>
                                }

                            </div>
                        )}
                    </div>

                    <button onClick={handleThemeToggle}>
                        {theme === 'light' ? <MdDarkMode className='h-8 w-6' /> : <BsSun className='h-8 w-6' />}
                    </button>

                    <img onClick={() => setIsModalOpen(!isModalOpen)} src={user ? user?.photoURL : "https://i.ibb.co/txZTzJB/user-1.png"} alt="user-image" className='h-8 w-8 rounded-full' />

                </div>

            </div>

            {/* modal start  */}

            <div>
                {isModalOpen && (
                    <div className='absolute top-20 right-0 rounded-xl'>
                        <div className="bg-white p-6  rounded-xl">
                            <UserDetails userDetails={userDetails}></UserDetails>
                        </div>
                    </div>
                )}
            </div>

            {/* modal end  */}

        </div>
    );
};

export default Navbar;

