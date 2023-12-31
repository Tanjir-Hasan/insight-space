import React from 'react';
import { SlClose } from 'react-icons/sl';
import Payment from '../Payment/Payment';
import useAuth from '../../../../Hooks/useAuth';

const PayModal = ({ isOpen, onClose, children, getMember, instructorData }) => {
    const { user } = useAuth();
    
    return (
        <div
            className={`fixed w-10/12 mx-auto text-black inset-0 z-50 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'
                }`}>
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white p-10 border-2 border-cyan-500 rounded-lg  ">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                    <SlClose className="text-2xl hover:text-[#ad2831]" />
                </button>
                <div className=" max-h-[80vh] overflow-y-auto mt-6"> {children}
                    <div>
                        <h2 className='border-y-2 text-2xl font-bold bg-slate-100 p-1'>Membership Level</h2>
                        <div className='space-y-3 border-b'>
                            <p>you have selected <span className='text-xl font-bold text-red-700'>{getMember.memberShip}</span> membership level.</p>
                            <p>If you are serious beacomeva Professional member today. We are ready to provide an interactive that will help you to become basic membership.</p>
                            <p>The price for membership is <span className='text-xl font-bold text-red-700'>${getMember.price}</span> per month.</p>
                        </div>


                        <div>
                            <div className='flex justify-between items-center  border-y-2 bg-slate-100 p-1 mt-5 mb-2 '>
                                <h2 className=' text-2xl font-bold '>Account Information</h2>
                                <img className='rounded-full h-10 w-10' src={user?.photoURL} alt="" />
                            </div>

                            <div className='space-y-4'>
                                <div>
                                    <h5>Username</h5>
                                    <input type="text" defaultValue={user?.displayName}
                                        className='border-2 p-1 rounded-md w-6/12' readOnly />
                                </div>
                                <div>
                                    <h5>Email</h5>
                                    <input type="text" defaultValue={user?.email}
                                        className='border-2 p-1 rounded-md w-6/12' readOnly />
                                </div>
                            </div>
                        </div>


                        <div>
                            <h2 className=' border-y-2 text-2xl font-bold bg-slate-100 p-1 mt-8 mb-2'>Choose Your Payment Method</h2>
                            <div className='flex items-center gap-2' >
                                <input type="radio" name="" value="" id="" />
                                <p>Check Out with a Credit Card Here</p>
                            </div>
                            <div className='flex flex-wrap items-center gap-5 mt-2 px-5'>
                                <img className='w-20 h-12 rounded-xl' src="https://i.ibb.co/028QMk6/visa-payment-card1873.jpg" alt="" />
                                <img className='w-20 h-12 rounded-xl' src="https://i.ibb.co/x3nB9YH/Mastercard-Download-PNG.png" alt="" />
                                <img className='w-20 h-12 rounded-xl' src="https://i.ibb.co/6BjcDVR/Pay-Pal-Card.jpg" alt="" />
                                <img className='w-20 h-12 rounded-xl' src="https://i.ibb.co/ws7tMvX/png-transparent-credit-card-debit-card-mastercard-payment-card-credit-card-payment-internet-debit-ca.jpg" alt="" />
                            </div>
                        </div>

                        <div>
                            <h2 className=' border-y-2 text-2xl font-bold bg-slate-100 p-1 mt-8 mb-2'>Payment Information</h2>

                            <Payment instructorData={instructorData} getMember={getMember}></Payment>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default PayModal;