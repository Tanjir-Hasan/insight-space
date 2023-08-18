import { useContext, useState } from 'react';
import { BiMenuAltRight, BiMenu } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../../../providers/ThemeProvider';
import ActiveLink from '../../../components/ActiveLink';
import useAuth from '../../../Hooks/UseAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserDetails from '../../NewsFeed/UserDetails/UserDetails';

const Navbar = () => {
    const { user, logOut, info, setInfo } = useAuth();
    const [isOpen, setIsOpen] = useState(true);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate()

    const handleThemeToggle = () => {
        toggleTheme();
    };

    const handleLogOut = () => {
        logOut().then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Logout Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/");
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className={`font-[Poppins] py-2 pr-1 fixed z-50 left-0 top-0 right-0 ${theme === 'dark' ? 'bg-[#001427] text-white' : 'bg-[#f0efeb]'}  ${isOpen ? "pb-6 md:pb-0" : "pb-0"}`}>
            <div className='flex justify-between items-center'>

                <Link to="/">
                    <img src="https://i.ibb.co/Kj8scz6/logo2.png" alt="logo" className='h-16' />
                </Link>

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
                            <div className='flex justify-between gap-3 md:pb-0 pb-2 md:px-0 px-2 rounded-b-lg absolute md:top-7 top-16 md:right-32 right-5 w-[350px] duration-1000'>
                                <ActiveLink to="/">Home</ActiveLink>
                                <ActiveLink to="/news-feed">News Feed</ActiveLink>
                                <ActiveLink to="/ques-ans">Q&A</ActiveLink>
                                <ActiveLink to="/blog-feed">Blog</ActiveLink>
                                <ActiveLink to="/feedback">FB</ActiveLink>
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

                    <img onClick={() => setInfo(!info)} src={user ? user?.photoURL : "https://i.ibb.co/txZTzJB/user-1.png"} alt="user-image" className='h-8 rounded-full' />

                </div>
            </div>
        </div>


    );
};

export default Navbar;

