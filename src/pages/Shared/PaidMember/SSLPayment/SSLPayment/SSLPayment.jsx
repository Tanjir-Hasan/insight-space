import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../../Hooks/useAuth';

const SSLPayment = (formData) => {

    const { user } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        event.preventDefault();

        fetch(`${import.meta.env.VITE_base_URL}/ssl-payment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...data, total_amount: formData.number })
        })
            .then(res => res.json())
            .then(result => {
                window.location.replace(result.url);
                console.log(result)
            });

        console.log(data)
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <p className='font-[Cinzel] py-1'>{user.displayName}</p>

            <div className='flex gap-3 items-center my-5 px-2'>

                <label htmlFor="number" className="text-md block">
                    Amount
                </label>

                <input
                    className="input-field-ssl"
                    type="number"
                    {...register("number")}
                    min="1"
                    placeholder="Enter Support Amount"
                    required
                />

            </div>


            <button type='submit'
                className='text-xl font-[Cinzel] text-white mr-5 rounded-lg border-0 text-md font-semibold bg-gradient-to-r from-[#3c6e71] to-[#335c67] hover:cursor-pointer hover:opacity-90 duration-500 py-2 w-full'
            >Send Support</button>

        </form>
    );
};

export default SSLPayment;