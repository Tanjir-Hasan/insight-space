import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';

const LatestBlog = ({ latest }) => {

    const {theme} = useContext(ThemeContext)
    // console.log(latest)
    return (
        <div>
            <div className='mb-10'>
                <img className='md:h-56  w-full rounded-md' src={latest?.imgURL} alt="" />
                <h2 className='font-[Cinzel] lg:text-3xl'>{latest?.text.substring(0, 70)}... {"  "}
                    <span className={`hover:font-semibold cursor-pointer duration-700 ${theme === 'light' ? 'text-[#3c6e71]' : 'text-[#48cae4]'}`}>Read more</span>
                </h2>
            </div>
        </div>
    );
};

export default LatestBlog;