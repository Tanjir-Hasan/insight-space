import { useContext, useState } from 'react';
import { BiMenuAltRight, BiMenu } from 'react-icons/bi';
import { ThemeContext } from '../../../providers/ThemeProvider';
import ActiveLink from '../../../components/ActiveLink';
import useAuth from '../../../Hooks/UseAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../../Hooks/useAdmin';
import UserDetails from '../../NewsFeed/UserDetails/UserDetails';
import useUser from '../../../Hooks/useUser';
import ThemeButtons from '../../../ThemeButtons/ThemeButtons';
import useInstructor from '../../../Hooks/useInstructor';


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
        <div className={`font-[Poppins] py-2 pr-1 fixed z-50 left-0 top-0 right-0 ${theme === 'dark' ? 'bg-[#011627]' :
            theme === 'night' ? 'bg-[#0d1b2a]' :
                theme === 'light' ? 'bg-[#f0efeb]' : ''}`}>

            {/* {theme === 'dark' ? 'bg-[#011627]' :
            theme === 'night' ? 'bg-[#343a40]' :
                theme === 'light' ? 'bg-[#f0efeb]' : ''} */}
            {/* bg-[#001427] */}

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

                    {/* <Link to="/">
                        <img src="https://i.ibb.co/0Kz4d2x/inside-space-logo.png" alt="logo" className={`h-16 w-52`} />
                    </Link> */}

                    {/* <GoogleTranslator></GoogleTranslator> */}

                </div>

                {/* <div className='flex items-center gap-3'>
                    <div>
                        <span className='duration-1000' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <BiMenuAltRight className='h-8 w-6 cursor-pointer text-[#3c6e71]' />
                            ) : (
                                <BiMenu className='h-8 w-6 cursor-pointer text-[#3c6e71]' />
                            )}
                        </span>

                        {isOpen && (
                            <div className={`flex flex-col lg:flex-row justify-between gap-4 md:pb-0 pb-2 lg:px-0 px-3 rounded-b-lg absolute md:top-6 top-16 md:right-20 right-1 duration-1000 ${isOpen === true && theme === 'dark' ? 'bg-[#011627] text-white' : theme === 'night' ? 'bg-[#343a40] text-white' : theme === 'light' ? 'bg-[#f0efeb]' : ''}`}>

                                <ActiveLink to="/">Home</ActiveLink>

                                {!isAdmin && <ActiveLink to="/news-feed">News Feed</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/connections">Connections</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/ques-ans">Q&A</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/blog-feed">Blog</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/quiz">Quiz</ActiveLink>}

                                {isAdmin && <ActiveLink to="/admin-dashboard">Dashboard</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/paid-members">Subscription</ActiveLink>}

                                <ActiveLink to="/about-us">About</ActiveLink>

                                {
                                    user ?
                                        <button onClick={handleLogOut}>Logout</button>
                                        : <ActiveLink to="/login">Login</ActiveLink>
                                }

                            </div>
                        )}

                    </div>

                    <img onClick={() => setIsModalOpen(!isModalOpen)} src={user ? user?.photoURL : "https://i.ibb.co/txZTzJB/user-1.png"} alt="user-image" className='h-8 w-8 rounded-full' />

                </div> */}

                {/* show on large device */}

                <div className='hidden sm:hidden md:hidden lg:block xl:block'>

                    <div className={`flex gap-3 ${theme === 'dark' ? 'bg-[#011627] text-white' : theme === 'night' ? 'bg-[#0d1b2a] text-white' : theme === 'light' ? 'bg-[#f0efeb]' : ''}`}>

                        <ActiveLink to="/">Home</ActiveLink>

                        {!isAdmin && <ActiveLink to="/news-feed">News Feed</ActiveLink>}

                        {!isAdmin && <ActiveLink to="/connections">Connections</ActiveLink>}

                        {!isAdmin && <ActiveLink to="/ques-ans">Q&A</ActiveLink>}

                        {!isAdmin && <ActiveLink to="/blog-feed">Blog</ActiveLink>}

                        {!isAdmin && <ActiveLink to="/pro-memberShip">Quiz</ActiveLink>}

                        {isAdmin && <ActiveLink to="/admin-dashboard">Dashboard</ActiveLink>}

                        {isInstructor && <ActiveLink to="/instructor-dashboard">Dashboard</ActiveLink>}

                        {!isAdmin || !isInstructor && <ActiveLink to="/paid-members">Subscription</ActiveLink>}

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

                    <div className='lg:hidden md:block'>

                        <span className='duration-1000' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <BiMenuAltRight className='h-8 w-6 cursor-pointer text-[#3c6e71]' />
                            ) : (
                                <BiMenu className='h-8 w-6 cursor-pointer text-[#3c6e71]' />
                            )}
                        </span>

                        {isOpen &&
                            <div className={`flex flex-col gap-3 absolute top-16 right-0 px-5 duration-1000 ${theme === 'dark' ? 'bg-[#011627] text-white' : theme === 'night' ? 'bg-[#0d1b2a] text-white' : theme === 'light' ? 'bg-[#f0efeb]' : ''}`}>

                                <ActiveLink to="/">Home</ActiveLink>

                                {!isAdmin && <ActiveLink to="/news-feed">News Feed</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/connections">Connections</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/ques-ans">Q&A</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/blog-feed">Blog</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/quiz">Quiz</ActiveLink>}

                                {isAdmin && <ActiveLink to="/admin-dashboard">Dashboard</ActiveLink>}

                                {!isAdmin && <ActiveLink to="/paid-members">Subscription</ActiveLink>}

                                <ActiveLink to="/about-us">About</ActiveLink>

                                {
                                    user ?
                                        <button onClick={handleLogOut}>Logout</button>
                                        : <ActiveLink to="/login">Login</ActiveLink>
                                }

                            </div>
                        }

                    </div>

                </div>

            </div>

            {/* modal start  */}

            <div>
                {isModalOpen && (
                    <div className='absolute top-20 right-0 rounded-xl'>
                        <div className={` p-6  rounded-xl ${theme === 'dark' ? 'bg-black border border-dark' : 'bg-white'}`}>
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

