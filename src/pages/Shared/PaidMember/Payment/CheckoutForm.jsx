import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../providers/AuthProvider';


const CheckoutForm = ({price, cart}) => {
  // console.log(price)
  const {user} = useContext(AuthContext)
  console.log(user)
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClienSecret] = useState('');
    const [ processing, setProcessing] = useState(false);
    const [ transactionId, setTransactionId] = useState('')

    useEffect( ()=>{
      if(price > 0){
        axiosSecure.post('/create-payment-intent', {price})
      .then(res => {
        console.log(res.data.clientSecret)
        setClienSecret(res.data.clientSecret)
      })
      }
      
    } ,[price, axiosSecure])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

          const card = elements.getElement(CardElement);

        if (card === null) {
        return;
        }
        // console.log('card', card)

           // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if (error) {
          console.log('error', error);
          setCardError(error.message)
        } 
        else {
          setCardError('');
          // console.log('PaymentMethod', paymentMethod);
        }

        setProcessing(true)

console.log(clientSecret)
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
      );
        if(confirmError){
          console.log(confirmError)
        }
        console.log('paymentIntent', paymentIntent)
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
          setTransactionId(paymentIntent.id)

          // save payment information to the server
          const payment = {
            UserName : user?.displayName,
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
          }
          console.log(payment)
          axiosSecure.post('/payments', payment)
          .then(res => {
            console.log(res.data);
            if(res.data.result.insertedId){
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Payment Successfull',
                showConfirmButton: false,
                timer: 1500
              })

            }
          })
          
        }


    }

    return (
        <>
        <form className='' onSubmit={handleSubmit}>
        <CardElement className='mb-5'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '',
                border: '1px solid red',
                '::placeholder': {
                  color: '',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
         {
        cardError && <p className='text-red-500'>{cardError}</p>
      }
      {
        transactionId && <p className='text-green-500'>Transaction complete with
          transaction_id: <span className='text-red-500'>{transactionId}</span>
        </p>
      }
        <button className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 py-2 rounded-lg' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay Now
        </button>
      </form>
     
        </>
    );
};

export default CheckoutForm;