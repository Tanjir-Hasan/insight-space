import React from 'react';
import { useForm } from 'react-hook-form';
import { BsSend } from 'react-icons/bs';
import { useContext } from 'react';
import useAuth from '../../../Hooks/UseAuth';
import ButtonWithLoading from '../../../components/ButtonWithLoading';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInstructorData } from '../../../StateManagment/Posts/instructorDataSlice';

const InstructorApplication = () => {
    const { theme } = useContext(ThemeContext);
    const { user, btnLoading } = useAuth()
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { degreeTitle, educationLevel, instituteName, passingYear, studyPlan, subject } = data;
        const instructorData = {
            email: user?.email,
            degreeTitle,
            educationLevel,
            instituteName,
            passingYear,
            studyPlan,
            subject
        }
        dispatch(setInstructorData(instructorData))
        navigate("/instructor-payment")
    };

    return (
        <div className={`${theme}`}>
            <div className="pb-40">
                <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto ">

                    <div className="space-y-5 md:px-0 px-6">

                        <h1 className="text-4xl mb-5 mt-10 font-bold font-[Poppins]">Apply As Instructor</h1>

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
                                        {...register("educationLevel")}
                                        placeholder='Education Level' >
                                    </input>
                                    <input
                                        type="text"
                                        className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        {...register("degreeTitle")}
                                        placeholder='Degree' >
                                    </input>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="w-full text-black px-4 py-2 border mb-5 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        {...register("instituteName")}
                                        placeholder='Institute Name' >
                                    </input>
                                    <input
                                        type="text"
                                        className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        {...register("passingYear")}
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
                                {...register("subject")}
                                placeholder='Subject' >
                            </input>

                            <label htmlFor="message" className="block font-semibold mb-2 mt-4">
                                Study Plan:
                            </label>
                            <textarea
                                required name="" id=""
                                className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                {...register("studyPlan")}
                                placeholder='Write your study plan' cols="30" rows="5">
                            </textarea>

                            <div className=''>

                                <div className="md:w-38 md:mx-0  mx-auto mt-10">
                                    {/* fix submit button */}
                                    <ButtonWithLoading width={"w-full"} loading={btnLoading} icon={<BsSend />}>Apply</ButtonWithLoading>
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