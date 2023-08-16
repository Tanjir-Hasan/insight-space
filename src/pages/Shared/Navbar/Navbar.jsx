import { useContext, useState } from 'react';
import { BiMenuAltRight, BiMenu } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
// import { BsSearch } from 'react-icons/bs';
import { ThemeContext } from '../../../providers/ThemeProvider';
import ActiveLink from '../../../components/ActiveLink';
import useUser from '../../../Hooks/useUser';
import useAuth from '../../../Hooks/UseAuth';

const Navbar = () => {
    const [userDetails] = useUser();
    const { info, setInfo } = useAuth();
    const [isOpen, setIsOpen] = useState(true);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        toggleTheme();
    };

    return (
        // f6fff8 
        // edede9
        <div className={`font-[Poppins] py-2 md:pb-0 pb-6 pr-1 fixed left-0 top-0 right-0 ${theme === 'dark' ? 'bg-[#001427] text-white' : 'bg-[#f0efeb]'}`}>
            <div className='flex justify-between items-center'>

                <img src="https://i.ibb.co/Kj8scz6/logo2.png" alt="" className='h-16' />

                {/* <div className='hidden sm:block'>
                    <div className='flex items-center'>
                        <BsSearch />

                        <input
                            type="text"
                            placeholder="Search..."
                        />

                    </div>
                </div> */}

                <div className='flex items-center gap-3'>

                    <div>
                        <span className='duration-1000' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen === true ? (
                                <BiMenuAltRight className='h-8 w-6 cursor-pointer text-[#84a98c]' />
                            ) : (
                                <BiMenu className='h-8 w-6 cursor-pointer text-[#84a98c]' />
                            )}
                        </span>

                        {isOpen === true && (
                            <div className='flex flex-row justify-between gap-3 md:pb-0 pb-2 md:px-0 px-2 rounded-b-lg absolute md:top-7 top-16 md:right-32 right-5 md:w-[350px] w-[350px] duration-1000'>
                                <ActiveLink to="/">Home</ActiveLink>
                                <ActiveLink to="/news-feed">News Feed</ActiveLink>
                                <ActiveLink to="/ques-ans">Q&A</ActiveLink>
                                <ActiveLink to="/blog-feed">Blog</ActiveLink>
                                {userDetails ? <ActiveLink to="">Logout</ActiveLink> : <ActiveLink to="/login">Login</ActiveLink>}
                            </div>
                        )}
                    </div>

                    <button onClick={handleThemeToggle}>
                        {theme === 'light' ? <MdDarkMode className='h-8 w-6' /> : <BsSun className='h-8 w-6' />}
                    </button>
                    {userDetails?.photoURL && <img onClick={() => setInfo(!info)} src={userDetails?.photoURL} alt="user-image" className='h-8 cursor-pointer rounded-full' />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;