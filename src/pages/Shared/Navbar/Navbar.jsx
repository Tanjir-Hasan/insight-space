import { useContext, useState } from 'react';
import { BiMenuAltRight, BiMenu } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
// import { BsSearch } from 'react-icons/bs';
import { ThemeContext } from '../../../providers/ThemeProvider';
import ActiveLink from '../../../components/ActiveLink';
import useUser from '../../../Hooks/useUser';
import useAuth from '../../../Hooks/UseAuth';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const [userDetails] = useUser();
    const { info, setInfo } = useAuth();
    const [isOpen, setIsOpen] = useState(true);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logOut } = useContext(AuthContext);

    const handleThemeToggle = () => {
        toggleTheme();
    };

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        // f6fff8 
        // edede9
        <div className={`font-[Poppins] py-2 pr-1 fixed z-50 left-0 top-0 right-0 ${theme === 'dark' ? 'bg-[#001427] text-white' : 'bg-[#f0efeb]'}  ${isOpen ? "pb-6 md:pb-0": "pb-0"}`}>
            <div className='flex justify-between items-center'>

                <img src="https://i.ibb.co/Kj8scz6/logo2.png" alt="" className='h-16' />

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
                                {userDetails ?
                                    <button onClick={handleLogOut}>Logout</button>
                                    : <ActiveLink to="/login">Login</ActiveLink>}
                            </div>
                        )}
                    </div>

                    <button onClick={handleThemeToggle}>
                        {theme === 'light' ? <MdDarkMode className='h-8 w-6' /> : <BsSun className='h-8 w-6' />}
                    </button>

                    <img src={userDetails ? userDetails?.photoURL : "https://i.ibb.co/txZTzJB/user-1.png"} alt="user-image" className='h-8 rounded-full' />

                </div>
            </div>
        </div>
    );
};

export default Navbar;