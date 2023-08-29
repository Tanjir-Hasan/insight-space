import React, { useState, useEffect, useRef } from 'react';
import { SlClose } from 'react-icons/sl';
import Chat from '../pages/Message/Chat';

const Modal = ({ isOpen, onClose, children }) => {
    const [isEntering, setIsEntering] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setIsEntering(true);
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, [isOpen]);

    const handleAnimationEnd = () => {
        if (!isOpen) {
            setIsEntering(false);
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 bg-white flex items-center justify-center ${isOpen ? 'visible' : 'hidden'
                }`}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div
                className={`transform transition-transform ${isEntering ? 'scale-100' : 'scale-0'
                    } duration-700 ease-out origin-right bg-white border-4 border-[#0e6ba8]  p-5 rounded-lg `}
                onAnimationEnd={handleAnimationEnd}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                    <SlClose className="text-2xl hover:text-[#ad2831]" />
                </button>
                <h2 className='font-bold'>Group Conversition</h2>
                <div
                    ref={contentRef}
                    className="max-h-[70vh] overflow-y-auto mt-6 border-t-4 pb-5 "
                    style={{ maxHeight: '[70vh]' }}>
                    {children}
                    <Chat></Chat>
                </div>
            </div>
        </div>
    );
};

export default Modal;
