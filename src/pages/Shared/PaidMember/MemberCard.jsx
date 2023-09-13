import React, { useContext, useEffect, useState } from 'react';
import { FaCheck, FaRegWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../providers/ThemeProvider';
import PayModal from './PayModal/PayModal';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const MemberCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const [memberShip, setMemberShip] = useState([])
    const [getMember, setGetMember] = useState([])
    const controls = useAnimation();
    const [refs, inView] = useInView();


    const url = 'memberShip.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMemberShip(data))
    }, [url])

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const getMemberShip = id => {
        const findData = memberShip.find(data => data._id === id)
        setGetMember(findData)

    }

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);


    return (
        <div className=' font-[Poppins] mb-32'>
            <div className=''>
                <img className='w-full md:h-[500px]' src="https://samrack.com/wp-content/uploads/2020/10/Kenya-Mobile-Money-MPESA-PesaLink.gif" alt="" />




                <div className='w-10/12 mx-auto grid gap-5 lg:grid-cols-3 md:grid-cols-2'>


                    <motion.div
                        ref={refs}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        transition={{ duration: 1.5 }}>
                        <div>
                            <div className={`${theme === 'dark' ? 'dark hover:bg-black' : 'bg-white'}  border md:-mt-28 box-content   p-3 px-10 rounded-md  space-y-2 hover:bg-[#d3e4d6] transition duration-1000 ease-in-out transform hover:-translate-y-8 `}>

                                <div className='flex items-center gap-1'>
                                    <img className='rounded-s-full w-10 h-14' src="https://i.ibb.co/FJn5Wc3/download-2-removebg-preview.png" alt="" />
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
                                <Link to='/'> <button className='text-xl text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] w-full duration-700 py-2 rounded-lg'>Get Free</button></Link>

                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                    ref={refs}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                    }}
                    transition={{ duration: 1.5 }}>
                    {/* className={`${theme === 'dark' ? 'dark' : ''}`} */}
                    <div className={`${theme === 'dark' ? 'dark hover:bg-black' : 'bg-lime-50 hover:bg-[#d3e4d6]'} relative border   p-3 px-10 rounded-md  space-y-2   transition duration-1000 ease-in-out transform hover:-translate-y-8`}>

                        <img className='absolute h-48 -right-14 -top-1' src=" https://i.ibb.co/TgnGm6s/30-discount-hang-tag-vector-template-flat-illustration-design-vector-eps-10-2-BM3-BKP-removebg-previ.png" alt="" />

                        <div className='flex items-center gap-1'>
                            <img className='rounded-full h-10 w-10' src="https://i.ibb.co/r0BMFDp/verified-green-512.webp" alt="" />
                            <h2 className='uppercase font-semibold text-xl border-b-2'>  Gold MemberShip</h2>
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
                        <div onClick={() => getMemberShip(1)}>
                            <button onClick={openModal} className='text-xl text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] w-full duration-700 py-2 rounded-lg'>Get Gold</button>
                        </div>

                    </div>
                    </motion.div>



                    <motion.div
                        ref={refs}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 100 },
                        }}
                        transition={{ duration: 1.5 }}>
                        <div>
                            <div className={`${theme === 'dark' ? 'dark hover:bg-black' : 'bg-white'}  relative border md:-mt-28 box-content   p-3 px-10 rounded-md  space-y-2 hover:bg-[#d3e4d6] transition duration-1000 ease-in-out transform hover:-translate-y-8 `}>

                                <img className='absolute h-48 -right-16 -top-4' src="https://media4.giphy.com/media/sGnVQF4n8KJgqFwxND/giphy.gif" alt="" />
                                <div className='flex items-center gap-1'>
                                    <img className='rounded-s-full w-12 h-10' src="https://i.ibb.co/3dzNwLw/download-1-removebg-preview.png" alt="" />
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
                                <div onClick={() => getMemberShip(2)}>
                                    <button onClick={openModal} className='text-xl text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] w-full duration-700 py-2 rounded-lg'>Get Pro</button>
                                </div>

                            </div>
                        </div>
                    </motion.div>


                </div>

            </div>
            <PayModal getMember={getMember} isOpen={isModalOpen} onClose={closeModal}></PayModal>

        </div>
    );
};

export default MemberCard;