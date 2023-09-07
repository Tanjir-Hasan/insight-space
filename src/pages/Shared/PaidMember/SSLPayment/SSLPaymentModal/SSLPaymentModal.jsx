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

            document.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    const handleClickOutside = (event) => {
        const modal = document.querySelector('.modal');

        if (modal && !modal.contains(event.target)) {
            closeModal();
        }
    };

    return (
        <div>
            <div className='flex gap-3' onClick={openModal}>

                <p className='font-[Cinzel]'>Give</p>
                <PiShootingStarBold className="text-2xl" />
                
            </div>

            {isModalOpen && (
                <div className="modal">

                    <div className="relative">

                        <div className={`${theme === 'dark' ? 'dark' :
                        theme === 'night' ? 'night' :
                        theme === 'light' ? 'bg-[#f0efeb]' : ''} absolute -top-56 lg:right-24 -right-2 lg:w-[500px] w-[320px] mx-auto rounded-lg p-2`}>

                            <div className='flex justify-end'>
                                <button onClick={closeModal} className='text-sm font-[Cinzel] text-white rounded-lg border-0 text-md font-semibold bg-gradient-to-r from-[#3c6e71] to-[#335c67] hover:cursor-pointer hover:opacity-90 duration-500 py-2 px-2'>Close</button>
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