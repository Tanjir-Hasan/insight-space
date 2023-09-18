import moment from 'moment';
import React, { useContext } from 'react';
import { FaHistory } from 'react-icons/fa';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { AiFillCloseCircle } from 'react-icons/ai';

const TopPostShow = ({ isOpen, onClose, children, topPost }) => {

    const { theme } = useContext(ThemeContext);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">

            <div className="fixed inset-0 bg-black opacity-50"></div>

            <div className={`${theme === 'light' ? 'bg-[#f0efeb] text-black' : theme === 'dark' ? 'bg-[#003049] text-white' : theme === 'night' ? 'bg-[#03071e] text-white' : ''} relative z-50 lg:w-1/2 md:w-8/12  rounded-lg shadow-lg`}>

                <div className="flex justify-end p-4">

                    <button onClick={onClose}>

                        <AiFillCloseCircle className='text-3xl text-[#e5383b] hover:text-[#a4161a] duration-700' />

                    </button>

                </div>

                <div className="max-h-[90vh] overflow-y-auto animate-zoom-in p-4">

                    {children}

                    <div className='rounded-lg'>

                        <div className="flex items-center p-3 space-x-2">

                            <img src={topPost?.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />

                            <div>

                                <p className="text-lg font-semibold pt-1">{topPost?.userName}</p>
                                <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(topPost.date).startOf('hour').fromNow()}</h6>

                            </div>

                        </div>

                        <p className='p-3 text-justify'>{topPost?.text}</p>

                        <div>
                            <img className='w-full rounded-b-lg' src={topPost?.imgURL} alt="" />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TopPostShow;