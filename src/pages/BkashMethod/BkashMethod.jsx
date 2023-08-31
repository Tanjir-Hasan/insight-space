import React from 'react';
import useAuth from '../../Hooks/UseAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import ButtonWithLoading from '../../components/ButtonWithLoading';
import { BsSend } from 'react-icons/bs';

const BkashMethod = () => {
    

    const { user, btnLoading } = useAuth()
    console.log(user);

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit } = useForm();



    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const postcode = form.postcode.value;
        console.log(postcode)
        // const imgInput = form.fileInput;
        
        const bkashmethod = {
            userName: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            postcode,
            phonenumber,
            address
        }
        console.log(bkashmethod)
        axiosSecure.post("/bkashmethod", bkashmethod)
            .then(data => {
                if (data.data) {
                    alert('Information has been recorded')
                }
            })
    };

    return (
        <div>
            <div className="pb-40">
                <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto ">

                    <div className="space-y-5 md:px-0 px-6">


                        <form onSubmit={onSubmit}>
                            {/* name */}
                            <label htmlFor="message" className="block font-semibold mb-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                name="name"
                                defaultValue={user?.displayName} placeholder='name'
                                readOnly>
                            </input>
                            {/* email */}
                            <label htmlFor="email" className="block font-semibold mb-2">
                                Email:
                            </label>

                            <input
                                type="email"
                                className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                name="email"
                                defaultValue={user?.email}
                                placeholder='email' readOnly>
                            </input>

                            {/* Address */}
                            <label htmlFor="address" className="block font-semibold mb-2 mt-4">
                                Address:
                            </label>
                            <textarea
                                required name="address" id=""
                                className="w-full h-24 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
                                {...register("message")} cols="30" rows="5">
                            </textarea>
                            {/* Phone Number */}
                            <label htmlFor="phonenumber" className="block font-semibold mb-2 mt-4">
                               Phone Number:
                            </label>
                            <input
                                required name="phonenumber" id=""
                                className="w-full h-10 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
                                {...register("message")} cols="30" rows="5">
                            </input>

                            {/* Post Code */}
                            <label htmlFor="postcode" className="block font-semibold mb-2 mt-4">
                               Post Code:
                            </label>
                            
                            <input
                                required name="postcode" id=""
                                className="w-full h-10 text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
                                {...register("message")} cols="30" rows="5">
                            </input>

                            

                            <label htmlFor="#" className="block font-semibold mb-2">

                            </label>
                            <div className=''>

                                <div className="md:w-38 md:mx-0  mx-auto mt-10">
                                    {/* fix submit button */}
                                    <ButtonWithLoading width={"w-full"} loading={btnLoading} icon={<BsSend />}>Buy membership</ButtonWithLoading>
                                </div>

                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BkashMethod;