import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../../Hooks/useAuth';
import { ThemeContext } from '../../../../../providers/ThemeProvider';

const SSLPayment = (formData) => {

    const { theme } = useContext(ThemeContext);

    const { user } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
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

        console.log(data);
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
                className={`${theme === 'light' ? 'text-white bg-gradient-to-l from-[#006466] to-[#212f45] hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45]' :
                    theme === 'dark' ? 'text-white bg-gradient-to-r from-[#48cae4] to-[#051923] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4]' :
                        theme === 'night' ? 'text-white bg-gradient-to-r from-[#0d1b2a] to-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced]' : ''} text-center text-xl font-[Poppins] w-full transition-all duration-1000 py-2 rounded-lg`}
            >Send Support</button>

        </form>
    );
};

export default SSLPayment;