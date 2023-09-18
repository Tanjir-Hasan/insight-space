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

<<<<<<< HEAD
    useEffect(() => {
        const findQNA = posts?.filter(p => p.category !== "Blog")
        setQna(findQNA)
    }, [posts]);
=======

    useEffect(() => {
        // Fetch quiz data from the API when the component mounts
        axiosSecure.get("/posts")
            .then(data => {
                const findQNA = data?.data.filter(QNAS => QNAS.category !== "Blog")
                setQna(findQNA)
            })
            .catch((error) => console.error("Error fetching quiz data:", error));
    }, []);
>>>>>>> e251e640fee5b6935bdc98767d8e9a2edd8b1f29

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
                                    <button onClick={() => handleReact(p._id, userDetails.email)} className="flex items-center"><AiFillHeart className={p.react.includes(userDetails.email) ? "text-2xl text-[#e5383b] me-2" : "text-2xl me-2"}></AiFillHeart> {p.react.length}</button>
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