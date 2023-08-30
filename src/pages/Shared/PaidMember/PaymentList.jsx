import React from 'react';

const PaymentList = () => {
    return (
        <div className=' w-10/12  mx-auto mb-36 font-[Poppins]'>
            <div className=' '>
                <h2 className='md:text-5xl text-4xl text-center  '>Accepted Payments</h2>
                <p className='border-b-2 border-[#84a98c] text-center mb-8 pb-2 text-[#036919]'>"We offer a range of payment methods, including credit/debit cards, PayPal, bank transfers, and more, to cater to your preferences."</p>
            </div>

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
        </div>
    );
};

export default PaymentList;