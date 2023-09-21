import React, { useEffect, useState } from 'react';
import { PiShootingStarBold } from 'react-icons/pi';
import SSLPayment from '../SSLPayment/SSLPayment';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../providers/ThemeProvider';

const SSLPaymentModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { theme } = useContext(ThemeContext);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            window.addEventListener('keydown', handleEscapeKey);
        } else {
            window.removeEventListener('keydown', handleEscapeKey);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isModalOpen]);

    return (
        <div>
            <div className={`flex gap-3 cursor-pointer duration-500 ${theme === 'light' ? 'hover:text-[#3c6e71]' : theme === 'dark' ? 'hover:text-[#48cae4]' : theme === 'night' ? 'hover:text-[#b79ced]' : ''}`}
                onClick={openModal}>

                <p className='font-[Cinzel] font-bold'>Give</p>
                <PiShootingStarBold className="text-2xl" />

            </div>

            {isModalOpen && (
                <div className="modal">

                    <div className="relative">

                        <div className={`${theme === 'dark' ? 'bg-[#003049]' :
                            theme === 'night' ? 'bg-[#03071e]' :
                                theme === 'light' ? 'bg-[#f0efeb]' : ''} absolute -top-56 lg:right-24 -right-2 lg:w-[500px] w-[320px] mx-auto rounded-lg p-2`}>

                            <div className='flex justify-end'>
                                <button onClick={closeModal} className={`${theme === 'light' ? 'text-white bg-gradient-to-l from-[#006466] to-[#212f45] hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45]' :
                                    theme === 'dark' ? 'text-white bg-gradient-to-r from-[#48cae4] to-[#051923] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4]' :
                                        theme === 'night' ? 'text-white bg-gradient-to-r from-[#0d1b2a] to-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced]' : ''} text-center text-xl font-[Poppins] w-3/12 transition-all duration-1000 py-1 rounded-lg`}>Close</button>
                            </div>

                            <SSLPayment></SSLPayment>

                        </div>

                    </div>

                </div>
            )}
        </div>
    );
};

export default SSLPaymentModal;