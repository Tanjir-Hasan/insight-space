import { SlClose } from 'react-icons/sl';

const WelcomeModal = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity ${isOpen ? 'opacity-100  pointer-events-auto' : 'opacity-0 hidden pointer-events-none'
                }`}
        >
            <div className="bg-white  rounded shadow-md  relative">
                <button
                    className="absolute top-2 right-2 text-white hover:text-red-600 "
                    onClick={onClose}>
                    <SlClose className="text-2xl  " />
                </button>


                <div className=''>
                    <img className='w-[900px]' src="https://thumbs.gfycat.com/DeadlyBaggyLaughingthrush-max-1mb.gif" alt="" />

                </div>

            </div>
        </div>
    );
};

export default WelcomeModal;