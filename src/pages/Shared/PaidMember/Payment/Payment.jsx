import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(import.meta.env.VITE_Payment);
const Payment = ({getMember , instructorData}) => {
   
    return (
        <div className='mb-20'>
            <h2 className='text-center  mb-10 text-3xl font-bold'>Provide Valid Information</h2>
          
            <div className='  w-10/12 mx-auto border-2 p-2 pt-10 rounded-md'>
            <Elements stripe={stripePromise}>
            <CheckoutForm instructorData={instructorData}  getMember={getMember} ></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;