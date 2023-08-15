import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import useUser from '../../Hooks/useUser';
import Button from '../../components/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const QuesAndAns = () => {

    const { theme } = useContext(ThemeContext);

    const ref = useRef();

    const [userDetails] = useUser();

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const status = ref.current.value;
        const date = new Date();
        const react = [];
        const comment = [];
        const { category, text } = data;
        const newPost = { status, date, category, text, userEmail: user.email, react, comment, userPhoto: userDetails?.photoURL, userName: userDetails?.displayName }
        axios.post('https://insight-space-server.vercel.app/posts', newPost)
            .then(data => {
                if (data) {
                    Swal.fire(
                        'Success!',
                        'Your Questions Uploaded.',
                        'success'
                    )
                    refetch()
                }
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>

            <div className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} border border-spacing-4 mt-2 pt-4 pb-8 rounded`}>
                <div className="flex space-x-2 mx-4">
                    <img src={userDetails?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                    <input type="text" name="" id="" className="w-full border border-spacing-3 rounded-xl px-2" placeholder="Post Your Questions" />
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="my-2 w-1/2">
                    <p className="text-md font-semibold mb-2">Select Category : </p>
                    <select required {...register("category")} className="w-full border rounded-md focus:ring focus:ring-blue-300">
                        <option>Educational</option>
                        <option>Science</option>
                        <option>Health</option>
                        <option>Technology</option>
                        <option>Food</option>
                        <option>Books</option>
                    </select>
                </div>
                <textarea rows="4" {...register("text")} type="text" id="" className="w-full border border-spacing-2 rounded-xl px-2 py-2" placeholder="Write your query"></textarea><br />
                <div className="mt-8">
                    <button type="submit" className="w-full border border-slate-500 text-slate-500 rounded-md px-4 py-2 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out">Post</button>
                </div>
            </form>

            <div className='w-10/12 mx-auto'>
                <Button heading="Ask a question"></Button>
            </div>

        </div>
    );
};

export default QuesAndAns;