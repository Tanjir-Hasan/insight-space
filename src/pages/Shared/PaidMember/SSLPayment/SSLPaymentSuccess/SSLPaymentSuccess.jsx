import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../../../../providers/ThemeProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SSLPaymentSuccess = () => {

    const { theme } = useContext(ThemeContext);

    const { transaction_Id } = useParams();

    const handleCopy = () => {
        navigator.clipboard.writeText(transaction_Id);
        toast.success('Transaction id copied', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            
            <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen`}>

                <div className='flex flex-col justify-center items-center h-screen gap-5'>

                    <h1 className={`${theme === 'dark' ? 'text-[#b0c4b1]' : 'text-[#335c67]'} lg:text-5xl text-2xl font-[Poppins]`}>Your payment has been successful.</h1>

                    <input type="text"
                        value={transaction_Id}
                        readOnly
                        className={`${theme === 'dark' ? '' : ''} bg-transparent text-2xl font-[Poppins]`}
                    />

                    <button onClick={handleCopy} className='text-xl font-[Cinzel] text-white mr-5 px-20 rounded-lg border-0 text-md font-semibold bg-gradient-to-r from-[#3c6e71] to-[#335c67] hover:cursor-pointer hover:opacity-90 duration-500 py-2'>Copy</button>

                </div>

            </div>
        </>
    );
};

export default SSLPaymentSuccess;