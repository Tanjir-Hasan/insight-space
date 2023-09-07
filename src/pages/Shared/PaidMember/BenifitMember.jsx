import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const BenifitMember = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='mb-28 font-[Poppins]'>
            <div className=' w-10/12 pt-5 mx-auto'>
                <h2 className='md:text-5xl text-4xl '>Benefits of Member-Ship</h2>
                <p className={`  ${theme === 'dark' ? 'dark text-white' : ''} border-b-2 border-[#3c6e71] lg:w-1/2 w-11/12 mb-8 text-[#036919]`}>
                    "Membership isn't just access; it's an invitation to a world of possibilities. Unlock exclusive benefits that illuminate your path, connect you with experts, and empower your journey towards excellence."</p>
            </div>
            <div className='w-8/12 mx-auto'>
                <div className={` ${theme === 'dark' ? 'dark hover:text-black' : ''} md:flex items-center gap-5 border mb-5 rounded-md hover:bg-[#d3e4d6] transition duration-1000 ease-in-out `}>

                    <div className='md:w-[70%] p-5'>
                        <li>Exclusive articles, advanced tutorials, research papers, and more.</li>
                        <li>Distraction-free browsing and enhanced readability.</li>
                        <li> Downloadable resources, interactive quizzes, and customizable learning path</li>
                        <li>Access to industry experts for personalized advice and unique perspectives</li>
                        <li>Join exclusive forums or groups for networking and shared experiences</li>


                    </div>

                    <div className='md:w-[30%] '>
                        <img className='h-56 mx-auto' src="https://images.prismic.io/swissborg-website/4b8ec6aa-c5fc-49d6-bc25-e95b0f17a10a_Hero%20image-Premium%20page-Premium.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=80&rect=0%2C0%2C2200%2C2200&w=2200&h=2200" alt="" />
                    </div>
                </div>


                <div className={`${theme === 'dark' ? 'dark hover:text-black' : ''} md:flex items-center  gap-5 border rounded-md hover:bg-[#d3e4d6] transition duration-1000 ease-in-out `}>
                    <div className='md:w-[30%]'>
                        <img className='h-56 mx-auto ' src="https://images.prismic.io/swissborg-website/ac1ba40b-e323-4123-b742-45b47c0691ca_Premium%20page-body%20graphics-all%20premiums.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C2200%2C2200&w=2200&h=2200" alt="" />
                    </div>

                    <div className='md:w-[70%] p-5'>
                        <li>Be among the first to access new content and features</li>
                        <li>Earn credentials that enhance your professional profile</li>
                        <li>Connect with like-minded individuals and expand your network</li>
                        <li>Receive tailored recommendations based on your goals and interests</li>
                        <li>Participate in webinars, workshops, and live Q&A sessions hosted by experts in the field</li>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BenifitMember;