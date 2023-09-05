import React, { useEffect, useState } from 'react';
import { PiShootingStarBold } from 'react-icons/pi';
import SSLPayment from '../SSLPayment/SSLPayment';

const SSLPaymentModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle the "Escape" key press
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    // Add event listeners when the modal is open
    useEffect(() => {
        if (isModalOpen) {
            // Listen for "Escape" key press
            window.addEventListener('keydown', handleEscapeKey);

            // Listen for clicks outside of the modal
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            // Remove event listeners when the modal is closed
            window.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    // Function to handle clicks outside of the modal
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

                        <div className="absolute bg-white -top-56 lg:right-24 -right-2 lg:w-[500px] w-[320px] mx-auto rounded-lg p-2">

                            <div className='flex justify-end'>
                                <button onClick={closeModal} className='text-sm font-[Cinzel] text-white rounded-lg border-0 text-md font-semibold bg-gradient-to-r from-[#84a98c] to-[#344e41] hover:cursor-pointer hover:opacity-90 duration-500 py-2 px-2'>Close</button>
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