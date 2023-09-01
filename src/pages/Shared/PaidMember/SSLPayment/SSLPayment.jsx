import React from 'react';
import { useForm } from "react-hook-form";

const SSLPayment = (formData) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch("http://localhost:5000/ssl-payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Corrected header field name
            },
            body: JSON.stringify({ ...data, total_amount: formData.number }) // Use formData.number directly
        })
        console.log(data)
    };


    // console.log(watch("example")); // watch input value by passing the name of it

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