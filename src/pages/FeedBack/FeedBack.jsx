import React from 'react';
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from '../../Hooks/UseAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import ButtonWithLoading from '../../components/ButtonWithLoading';
import { BsSend } from 'react-icons/bs';


const FeedBack = () => {
    const { user, btnLoading } = useAuth()
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { message, rating } = data;
        const date = new Date();
        const feedback = {
            userName: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            rating,
            date,
            message
        }
        axiosSecure.post("/feedback", feedback)
            .then(data => {
                if (data.data) {
                    alert('Your response has been recorded')
                }
            })
    };

    return (
        <div>
            <div className="pb-40">
                <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto ">

                    <div className="space-y-5 md:px-0 px-6">

                        <h1 className="text-4xl mb-5 mt-10 font-bold font-[Poppins]">Give your Valuable Feedback</h1>

                        <ul className="font-[Cinzel]">
                            <li className="list-[upper-roman] list-inside">your feedback is our compass guiding us towards excellence.</li>

                            <li className="list-[upper-roman] list-inside">We value your insights, opinions, and suggestions as <br></br> they help us shape our products/services to better meet your needs.</li>

                            <li className="list-[upper-roman] list-inside">Our dedicated Feedback section is your direct line to us, where you can share your thoughts and experiences.</li>
                        </ul>


                        <form onSubmit={handleSubmit(onSubmit)}>
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

                            <label htmlFor="message" className="block font-semibold my-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                name="email"
                                defaultValue={user?.email}
                                placeholder='email' readOnly>
                            </input>

                            <label htmlFor="message" className="block font-semibold mb-2 mt-4">
                                Message:
                            </label>
                            <textarea
                                required name="" id=""
                                className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
                                {...register("message")} cols="30" rows="5">
                            </textarea>

                            <label htmlFor="rating" className="block font-semibold mb-5 mt-5">
                                Rating:
                            </label>
                            {/* <label for="">Select a comment</label> */}
                            <div className='flex'>
                                <p className='text-lg font-semibold me-2'>select : </p>
                                <select className='border border-spacing-3 px-10 py-1 border-gray-300 rounded-lg' defaultValue={5} {...register("rating")} name="rating" id="rating">
                                    <option value="1">1.0</option>
                                    <option value="2">2.0</option>
                                    <option value="3">3.0</option>
                                    <option value="3.5">3.5</option>
                                    <option value="4">4.0</option>
                                    <option value="4.5">4.5</option>
                                    <option value="5">5.0</option>
                                </select>
                            </div>

                            <label htmlFor="#" className="block font-semibold mb-2">

                            </label>
                            <div className=''>

                                <div className="md:w-38 md:mx-0  mx-auto mt-10">
                                    {/* fix submit button */}
                                    <ButtonWithLoading width={"w-full"} loading={btnLoading} icon={<BsSend />}>Send Feedback</ButtonWithLoading>
                                </div>

                                <div className="md:w-25  mt-10">
                                    <Link to="/usersfeedback">
                                        <Button heading="Feedback Submisions"></Button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;






{/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
{
    feedback.map(feedback => <FbCard
        key={feedback._id}

        feedback={feedback}></FbCard>)
}

</div> */}

{/* <input className="w-50 h-50 rounded-r-3xl bg-emerald-600" type="submit" value="send feedback"></input> */ }

{/* <div className="md:w-8/12 mt-10 md:mx-0 w-11/12 mx-auto">
                                <Link to="/feedback">
                                    <Button heading="Send Feedback"></Button>
                                </Link>
                            </div> */}

