import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { BsSend } from 'react-icons/bs';
import { useContext } from 'react';
import Button from '../../../components/Button';
import useAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import ButtonWithLoading from '../../../components/ButtonWithLoading';
import { ThemeContext } from '../../../providers/ThemeProvider';

const InstructorApplication = () => {

    const { theme } = useContext(ThemeContext);

    const { user, btnLoading } = useAuth()
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { message, subject, education, educationlevel, Degreetitle, InstitutionName, passingYear, Skils  } = data;
        const date = new Date();
        const feedback = {
            userName: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            subject,
            education,
            educationlevel,
            Degreetitle,
            InstitutionName,
            passingYear,
            Skils,
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
        <div className={`${theme}`}>
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
                            data-testid="searchBar"
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

                        <label htmlFor="message" className="block font-semibold my-2">
                            Education:
                        </label>
                       <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                         <div>
                         <input
                            type="text"
                            className="w-full text-black px-4 py-2 border mb-5 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            {...register("message")} 
                            name="educationlevel"
                            
                            placeholder='Education Level' >
                        </input>
                        <input
                            type="text"
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            {...register("message")} 
                            name="Degreetitle"
                            
                            placeholder='Degree' >
                        </input>
                         </div>
                         <div>
                         <input
                            type="text"
                            className="w-full text-black px-4 py-2 border mb-5 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            {...register("message")} 
                            name="InstitutionName"
                            
                            placeholder='Instituition Name' >
                        </input>
                        <input
                            type="text"
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            {...register("message")} 
                            name="passingYear"
                            
                            placeholder='Passing Year' >
                        </input>

                         </div>
                       </div>

                        <label htmlFor="message" className="block font-semibold my-2">
                            Subject:
                        </label>
                        <input
                            type="text"
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            {...register("message")} 
                            name="subject"
                            
                            placeholder='Subject' >
                        </input>

                        <label htmlFor="message" className="block font-semibold my-2">
                            Skils:
                        </label>
                        <input
                            type="text"
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            {...register("message")} 
                            name="Write your skills"
                            
                            placeholder='Skills' >
                        </input>

                        <label htmlFor="message" className="block font-semibold mb-2 mt-4">
                            Study Plan:
                        </label>
                        <textarea
                            required name="" id=""
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
                            {...register("message")}
                            placeholder='Write your study plan' cols="30" rows="5">
                        </textarea>


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

export default InstructorApplication;