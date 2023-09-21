import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import useUser from '../../Hooks/useUser';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import usePosts from '../../Hooks/usePosts';
import { FaArrowRight, FaBookmark, FaComment, FaHistory } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import moment from "moment";
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { BsSend } from 'react-icons/bs';
import ButtonWithLoading from '../../components/ButtonWithLoading';
import useMyPayments from '../../Hooks/useMyPayments';
import useTitle from '../../Hooks/useTitle';
import useNewsFeedFunctionality from '../../Hooks/useNewsFeedFunctionality';
import NewsFooter from '../NewsFeed/DisplayNewsFeed/NewsFooter';

const QuesAndAns = () => {
    useTitle('Q&A');

    const { theme } = useContext(ThemeContext);

    const ref = useRef();

    const [userDetails] = useUser();

    const { user, btnLoading, setBtnLoading } = useAuth();

    const [axiosSecure] = useAxiosSecure();

    const [posts, refetch] = usePosts();

    const { register, handleSubmit, reset } = useForm();

    const [, bages] = useMyPayments();

    const [hide, setHide] = useState(false);

    const [handleReact, handleBookMark, handleAddComment] = useNewsFeedFunctionality();

    const [qna, setQna] = useState([]);

    useEffect(() => {
        const findQNA = posts?.filter(p => p.category !== "Blog")
        setQna(findQNA)
    }, [posts]);

    const onSubmit = data => {
        if (!data.text) {
            alert("Please enter a text");
        } else {
            setBtnLoading(true);
            const status = ref.current.value;
            const date = new Date();
            const react = [];
            const comment = [];
            const { category, text } = data;
            const newPost = { status, date, category, text, userEmail: user.email, react, comment, userPhoto: userDetails?.photoURL, userName: userDetails?.displayName }
            axiosSecure.post('/posts', newPost)
                .then(data => {
                    if (data) {
                        setBtnLoading(false);
                        reset();
                        Swal.fire(
                            'Success!',
                            'Your Questions Uploaded.',
                            'success'
                        )
                        refetch()
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Sorry Question Not Sent!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.error('Error sending Sorry Question Not Sent:', error);
                    setBtnLoading(false);
                });
        }
    };

    return (
        <div className={`${theme} pt-4 pb-8`}>

            <div className='md:w-8/12 w-11/12 mx-auto'>

                <div className={`${theme === 'dark' ? 'dark' :
                    theme === 'night' ? 'night' :
                        theme === 'light' ? 'bg-[#f0efeb]' : ''} border border-[#3c6e71] mt-2 py-5 rounded-lg`}>

                    <form onSubmit={handleSubmit(onSubmit)} className="font-[Poppins] ">

                        <div className="flex space-x-2 mx-4">

                            <img src={userDetails?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />

                            <textarea rows="2" {...register("text")} type="text" id="" className="text-black w-full border border-spacing-2 rounded-xl px-2 py-2" placeholder="Ask your question"></textarea>

                        </div>

                        <p className="text-md font-semibold my-2 px-5">Select Category: </p>

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
                            {/* fix submit button */}
                            <ButtonWithLoading width={"w-full"} loading={btnLoading} icon={<BsSend />}>Ask a question</ButtonWithLoading>
                        </div>

                    </form>

                </div>


                {/* show post functionality */}

                <div>
                    {
                        qna && qna?.map(p => <div key={p._id}
                            className={`${theme === 'dark' ? 'dark' :
                                theme === 'night' ? 'night' :
                                    theme === 'light' ? 'bg-[#f0efeb]' : ''} my-6 rounded-lg border border-[#3c6e71]`}>
                            <div className="p-4">
                                <div className="flex gap-3 space-x-2 mb-4">
                                    <div className='relative'>
                                        <img src={p.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                                        <div className='absolute -bottom-3 -right-2'>
                                            {
                                                bages?.email === p.userEmail && bages?.memberShip === "Basic" ?
                                                    (<img className='w-8 h-8 rounded-full' src="https://i.ibb.co/r0BMFDp/verified-green-512.webp" alt="" />)
                                                    :
                                                    bages?.email === p.userEmail && bages?.memberShip === "Pro" ?
                                                        (<img className='w-8 h-7 rounded-full' src="https://i.ibb.co/3dzNwLw/download-1-removebg-preview.png" alt="" />)
                                                        : ""
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold pt-1">{p?.userName}</p>
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
                            <NewsFooter p={p} hide={hide} setHide={setHide}></NewsFooter>
                        </div>)
                    }
                </div>

            </div>

        </div>
    );
};

export default QuesAndAns;