import React, { useState, useEffect } from 'react';
import WelcomeModal from './WelcomeModal';


function Welcome() {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const hasDisplayedModal = localStorage.getItem('hasDisplayedModal');
        if (!hasDisplayedModal) {
            // Delay opening the modal by 5 seconds
            const timer = setTimeout(() => {
                setModalOpen(true);
                localStorage.setItem('hasDisplayedModal', 'true');
            }, 10000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, []);

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="flex items-center justify-center  bg-gray-100">
            <WelcomeModal isOpen={modalOpen} onClose={closeModal} ></WelcomeModal>
               
        </div>
    );
}

export default Welcome;