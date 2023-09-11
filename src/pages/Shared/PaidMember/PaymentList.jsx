import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const PaymentList = () => {
    const { theme } = useContext(ThemeContext);
    const controls = useAnimation();
    const [refs, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className='w-10/12 mx-auto font-[Poppins]'>
            <div className=' '>
            
                <h2 className='md:text-5xl text-4xl text-center '>Accepted Payments</h2>
                <p className={`${theme === 'dark' ? 'dark text-white' : ''}  border-b-2 border-[#3c6e71] text-center mb-8 pb-2 text-[#036919]`}>"We offer a range of payment methods, including credit/debit cards, PayPal, bank transfers, and more, to cater to your preferences."</p>
            </div>


            <motion.div
                    ref={refs}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                    }}
                    transition={{ duration: 0.9 }}>
            <div className='flex gap-5 justify-center flex-wrap'>
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/028QMk6/visa-payment-card1873.jpg" alt="" />
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/x3nB9YH/Mastercard-Download-PNG.png" alt="" />
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/6BjcDVR/Pay-Pal-Card.jpg" alt="" />
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/ws7tMvX/png-transparent-credit-card-debit-card-mastercard-payment-card-credit-card-payment-internet-debit-ca.jpg" alt="" />
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/dc1Tg0s/pngtree-purple-bank-card-image-1171357.jpg" alt="" />
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/3Cfb8sY/credit-card-PNG24.png" alt="" />
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/Qn3TTyj/payoneer-card-300x192.jpg" alt="" />
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/0BfNV3R/download.jpg" alt="" />
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/nz3PKcX/png-transparent-stripe-payment-gateway-payment-processor-authorize-net-colored-stripes.jpg" alt="" />
            <img className='w-40 h-28 rounded-xl' src="https://i.ibb.co/869gcs3/Binance-card-678x381.png" alt="" />          
            </div>
            </motion.div>
        </div>
    );
};

export default PaymentList;