import React, { useContext } from 'react';
import { ThemeContext } from '../../../../../providers/ThemeProvider';

const SSLPaymentFail = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen`}>
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-[#ef233c] lg:text-5xl text-2xl font-[Poppins]'>Your transaction has failed. Please try again.</h1>
            </div>
        </div>
    );
};

export default SSLPaymentFail;