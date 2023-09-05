import React from 'react';
import { useForm } from "react-hook-form";

const SSLPayment = (formData) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        event.preventDefault();

        fetch("http://localhost:5000/ssl-payment", {
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

            <label htmlFor="name" className="text-md block">
                Name
            </label>
            <input
                className="input-field"
                type="text"
                id="name"
                {...register("name")}
                placeholder="Your Name"
                required
            />

            <label htmlFor="number" className="text-md block">
                Amount
            </label>
            <input
                className="input-field"
                type="number"
                {...register("number")}
                placeholder="Amount"
                required
            />

            <input type="submit" />
            
        </form>
    );
};

export default SSLPayment;