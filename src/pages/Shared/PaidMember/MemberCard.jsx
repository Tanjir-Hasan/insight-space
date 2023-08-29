import React, { useState } from 'react';
import { FaCheck, FaCheckSquare, FaRegWindowClose } from 'react-icons/fa';
import PayModal from './PayModal/PayModal';

const MemberCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
    return (
        <div className=' font-[Poppins] mb-32'>
            <div className=''>
                <img className='w-full md:h-[500px]' src="https://samrack.com/wp-content/uploads/2020/10/Kenya-Mobile-Money-MPESA-PesaLink.gif" alt="" />




                <div className='w-10/12 mx-auto grid gap-5 lg:grid-cols-3 md:grid-cols-2'>


                    <div>
                        <div className=' border md:-mt-28 box-content  bg-white p-3 px-10 rounded-md  space-y-2 hover:bg-[#d3e4d6] transition duration-1000 ease-in-out transform hover:-translate-y-8 '>

                            <div className='flex items-center gap-1'>
                                <img className='rounded-s-full w-10 h-10' src="https://cdn.vectorstock.com/i/preview-1x/45/10/vip-membership-golden-label-vector-1204510.jpg" alt="" />
                                <h2 className='uppercase font-semibold text-xl border-b-2'>  Free MemberShip</h2>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FaRegWindowClose className='text-red-500' />
                                <p>Exclusive Content and Features</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaRegWindowClose className='text-red-500' />
                                <p>Ad-Free Experience</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaRegWindowClose className='text-red-500' />
                                <p>Early Access and Sneak Peeks</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Enhanced Support</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaRegWindowClose className='text-red-500' />
                                <p>Increased Limits or Quotas</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaRegWindowClose className='text-red-500' />
                                <p>Community and Networking</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaRegWindowClose className='text-red-500' />
                                <p>Educational Resources</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaRegWindowClose className='text-red-500' />
                                <p>Flexible Cancellation</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Personalization Options</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Feedback and Influence</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaRegWindowClose className='text-red-500' />
                                <p>Special Events or Webinars</p>
                            </div>

                            <p className=' mt-5 mb-2'><span className=' font-extrabold text-4xl'>$00 USD </span><span>/ month (ex. VAT)</span></p>
                            <button className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 py-2 rounded-lg'>Get Free</button>
                        </div>
                    </div>


                    <div className=' relative border  bg-lime-50 p-3 px-10 rounded-md  space-y-2  hover:bg-[#d3e4d6] transition duration-1000 ease-in-out transform hover:-translate-y-8'>

                        <img className='absolute h-48 -right-14 -top-1' src=" https://i.ibb.co/TgnGm6s/30-discount-hang-tag-vector-template-flat-illustration-design-vector-eps-10-2-BM3-BKP-removebg-previ.png" alt="" />

                        <div className='flex items-center gap-1'>
                            <img className='rounded-full h-10 w-10' src="https://cardplayerlifestyle.com/wp-content/uploads/2020/10/red-chip-poker-pro.png" alt="" />
                            <h2 className='uppercase font-semibold text-xl border-b-2'>  Basic MemberShip</h2>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <FaCheck className='text-green-500' />
                            <p>Exclusive Content and Features</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaRegWindowClose className='text-red-500' />
                            <p>Ad-Free Experience</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaRegWindowClose className='text-red-500' />
                            <p>Early Access and Sneak Peeks</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaCheck className='text-green-500' />
                            <p>Enhanced Support</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaCheck className='text-green-500' />
                            <p>Increased Limits or Quotas</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaCheck className='text-green-500' />
                            <p>Community and Networking</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaRegWindowClose className='text-red-500' />
                            <p>Educational Resources</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaRegWindowClose className='text-red-500' />
                            <p>Flexible Cancellation</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaCheck className='text-green-500' />
                            <p>Personalization Options</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaCheck className='text-green-500' />
                            <p>Feedback and Influence</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaRegWindowClose className='text-red-500' />
                            <p>Special Events or Webinars</p>
                        </div>

                        <p className=' mt-5 mb-2'><span className=' font-extrabold text-4xl'>$28 USD </span><span>/ month (ex. VAT)</span></p>
                        <button   onClick={openModal} className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 py-2 rounded-lg'>Get Basic</button>

                    </div>


                    <div>
                        <div className='  relative border md:-mt-28 box-content  bg-white p-3 px-10 rounded-md  space-y-2 hover:bg-[#d3e4d6] transition duration-1000 ease-in-out transform hover:-translate-y-8 '>

                            <img className='absolute h-48 -right-16 -top-4' src="https://media4.giphy.com/media/sGnVQF4n8KJgqFwxND/giphy.gif" alt="" />
                            <div className='flex items-center gap-1'>
                                <img className='rounded-s-full w-10 h-10' src="https://cdn.vectorstock.com/i/preview-1x/45/10/vip-membership-golden-label-vector-1204510.jpg" alt="" />
                                <h2 className='uppercase font-semibold text-xl border-b-2'>  Pro MemberShip</h2>
                            </div>



                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Exclusive Content and Features:</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Ad-Free Experience</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Early Access and Sneak Peeks</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Enhanced Support</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Increased Limits or Quotas</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Community and Networking</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Educational Resources</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Flexible Cancellation</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Personalization Options</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Feedback and Influence</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaCheck className='text-green-500' />
                                <p>Special Events or Webinars</p>
                            </div>


                            <p className=' mt-5 mb-2'><span className=' font-extrabold text-4xl'>$44 USD </span><span>/ month (ex. VAT)</span></p>
                            <button className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 py-2 rounded-lg'>Get Pro</button>
                        </div>
                    </div>


                </div>

            </div>
            <PayModal isOpen={isModalOpen} onClose={closeModal}></PayModal>

        </div>
    );
};

export default MemberCard;