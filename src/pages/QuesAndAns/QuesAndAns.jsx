import React, { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import useUser from '../../Hooks/useUser';
import Button from '../../components/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import usePosts from '../../Hooks/usePosts';
import useNewsFeedFunctionality from '../../Hooks/useNewsfeedFunctionality';
import { FaArrowRight, FaBookmark, FaComment, FaHeart, FaHistory } from 'react-icons/fa';
import moment from "moment";

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
    };

    // show post functionality

    const [hide, setHide] = useState(false);

    const [posts] = usePosts();

    const [handleReact, handleBookMark, handleAddComment] = useNewsFeedFunctionality();

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} pt-4 pb-8`}>

            <div className='md:w-8/12 w-11/12 mx-auto'>

                <div className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} border border-[#84a98c] mt-2 py-5 rounded-lg`}>

                    <div className="flex space-x-2 mx-4">

                        <img src={userDetails?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />

                        <textarea rows="2" {...register("text")} type="text" id="" className="w-full border border-spacing-2 rounded-xl px-2 py-2" placeholder="Ask your question"></textarea>

                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="font-[Poppins] mt-8">

                        <p className="text-md font-semibold mb-2 px-5">Select Category: </p>

                        <div className="flex md:flex-row flex-col justify-between items-center font-[Poppins] my-2 px-5">

                            <select required {...register("category")} className="text-black md:text-center px-2 md:w-1/3 w-11/12 border rounded-md">
                                <option>Educational</option>
                                <option>Science</option>
                                <option>Health</option>
                                <option>Technology</option>
                                <option>Food</option>
                                <option>Books</option>
                            </select>

                            <select ref={ref} className="text-black md:text-center md:w-1/3 w-11/12 md:mt-0 mt-3 px-2 border rounded-md">
                                <option>Public</option>
                                <option>Friends</option>
                                <option>Only me</option>
                            </select>

                        </div>

                        <div className="md:mt-8 mt-5 px-5">
                            <button type="submit" className="text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] duration-700 w-full md:px-24 px-2 py-2 rounded-lg">Ask a question</button>
                        </div>

                    </form>

                </div>


                {/* show post functionality */}

                <div>
                    {
                        posts && posts.map(p => <div key={p._id}
                            className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} my-6 rounded-lg border border-[#84a98c]`}>
                            <div className="p-4">
                                <div className="flex space-x-2 mb-4">
                                    <img src={p.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="text-lg font-semibold pt-1">{p.userName}</p>
                                        <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(p.date).startOf('hour').fromNow()}</h6>
                                    </div>
                                </div>
                                <p>{p.text}</p>
                                {/* {<span onClick={() =>(p.text)} className="underline underline-offset-4 ms-2 text-sm text-green-600">{p.text} See More</span>} */}
                            </div>
                            <div>
                                {
                                    p.postImg && <img src={p.postImg} className="w-full max-h-[600px]" alt="image" />
                                }
                            </div>
                            <div className="w-full flex items-center py-6 px-8">
                                <div className="w-full flex space-x-8">
                                    <button onClick={() => handleReact(p._id, userDetails.email)} className="flex items-center"><FaHeart className={p.react.includes(userDetails.email) ? "text-3xl text-red-600 me-2" : "text-3xl me-2"}></FaHeart> {p.react.length}</button>
                                    <button onClick={() => setHide(p._id)} className="flex items-center"><FaComment className="text-2xl me-2"></FaComment> {p.comment.length}</button>
                                </div>
                                <div>
                                    <button><FaBookmark onClick={() => handleBookMark(p._id, userDetails?.email)} className="text-2xl me-2"></FaBookmark></button>
                                </div>
                            </div>
                            {/* comment body  */}
                            {
                                hide === p._id && <div>
                                    <div className="flex items-center space-x-2 px-4 py-6 border border-spacing-2">
                                        <img src={userDetails.photoURL} alt="user photo" className="w-12 h-12 rounded-full" />
                                        <textarea ref={ref} name="" id="" cols="2" rows="1" className="w-full px-4 py-2 border border-spacing-4 rounded-3xl" placeholder="add your answer"></textarea>
                                        <button onClick={() => handleAddComment(p, userDetails, ref)} className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 flex items-center">Add<FaArrowRight className="text-2xl ms-2"></FaArrowRight> </button>
                                    </div>
                                    <div>
                                        {
                                            p?.comment?.map((c, i) => <div className="pt-2 pb-8 px-4" key={i}>
                                                <div className="flex space-x-3 items-center">
                                                    <img src={c.photoURL} alt="" className="w-10 h-10 rounded-full" />
                                                    <div>
                                                        <p className="text-lg font-semibold">{c.displayName}</p>
                                                        <p>{c.comment}</p>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            }
                        </div>)
                    }
                </div>

            </div>

        </div>
    );
};

export default QuesAndAns;