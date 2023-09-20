/* eslint-disable react/prop-types */ //
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";
import usePosts from "../../../Hooks/usePosts";
import useAuth from "../../../Hooks/useAuth";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { SlClose } from 'react-icons/sl';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ButtonWithLoading from "../../../components/ButtonWithLoading";
import { BsSend } from "react-icons/bs";
import { useSelector } from "react-redux";

const NewsForm = () => {

    const [axiosSecure] = useAxiosSecure();

    const bookMarks = useSelector(state => state?.bookMarks);

    const { theme } = useContext(ThemeContext);

    const { user, btnLoading } = useAuth();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isOpen, setIsOpen] = useState("questions");

    const [userDetails] = useUser();

    const [, refetch] = usePosts();

    const { register, handleSubmit } = useForm();

    const ref = useRef();
    // post form submit function 
    const onSubmit = data => {
        const status = ref.current.value;
        const date = new Date();
        const react = [];
        const comment = [];
        const { category, text } = data;
        const newPost = { status, date, category, text, userEmail: user.email, react, comment, userPhoto: userDetails?.photoURL, userName: userDetails?.displayName }
        axiosSecure.post('/posts', newPost)
            .then(data => {
                if (data) {
                    Swal.fire(
                        'Success!',
                        'Your Questions Uploaded.',
                        'success'
                    )
                    refetch()
                    setIsModalOpen(!isModalOpen)
                }
            })
            .catch(err => console.log(err.message))
    };

    const handleBlogSubmit = (e) => {
        e.preventDefault();
        const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
        const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
        const form = e.target;
        const blogText = form.blogText.value;
        const imgInput = form.fileInput;

        const formData = new FormData();
        formData.append('image', imgInput.files[0]);
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url;
                    const date = new Date();
                    const status = ref.current.value;
                    const react = [];
                    const comment = [];
                    const newPost = { imgURL, category: "Blog", status, date, text: blogText, userEmail: user.email, react, comment, userPhoto: userDetails?.photoURL, userName: userDetails?.displayName };
                    axiosSecure.post('/posts', newPost)
                        .then(data => {
                            if (data) {
                                Swal.fire(
                                    'Success!',
                                    'Your Blog Uploaded.',
                                    'success'
                                )
                                refetch()
                                setIsModalOpen(!isModalOpen)
                            }
                        })
                        .catch(err => console.log(err.message))
                }
            })
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            window.addEventListener('keydown', handleEscapeKey);

            document.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    const handleClickOutside = (event) => {
        const modal = document.querySelector('.modal');

        if (modal && !modal.contains(event.target)) {
            closeModal();
        }
    };

    return (
        <div hidden={bookMarks.length > 0} className={`${theme === 'dark' ? 'dark' :
            theme === 'night' ? 'night' :
                theme === 'light' ? 'bg-[#f0efeb]' : ''} py-3 lg:mt-2 mt-0 border border-[#3c6e71] rounded-lg lg:my-3`}>
            {/* main form  */}

            <div className="mt-2 py-4 rounded-lg">
                <div className="flex space-x-2 mx-4">
                    <img src={user?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                    <input type="text" name="" id="" onClick={() => setIsModalOpen(true)} className="text-black w-full border border-spacing-3 rounded-xl px-2" placeholder="What's on your mind?" />
                </div>
            </div>

            {/* modal body  */}

            {/* TODO: modal responsive for mobile and tab */}

            {isModalOpen && (
                <div className={`${theme === 'dark' ? 'dark ' :
                    theme === 'night' ? 'night' :
                        theme === 'light' ? 'bg-[#f0efeb]' : ''} fixed top-1/3 mt-20 md:mt-8 lg:mt-20 left-1/2 md:left-[30%] lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg border-2 border-[#3c6e71] w-[95%] md:w-[54%] lg:w-2/5`}>
                    <button onClick={() => setIsModalOpen(false)} className="px-3 py-1 rounded absolute right-3 top-2">
                        <SlClose className="text-2xl hover:text-[#ad2831]" />
                    </button>
                    {/* modal two sections start  */}

                    <div className="md:flex my-5 gap-5">

                        <button onClick={() => setIsOpen("questions")} className={`w-full duration-700 lg:px-16 px-8 lg:py-2 py-1 rounded-lg ${theme === 'light' ? 'text-white bg-gradient-to-l from-[#006466] to-[#212f45] hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45]' :
                            theme === 'dark' ? 'text-white bg-gradient-to-r from-[#48cae4] to-[#051923] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4]' :
                                theme === 'night' ? 'text-white bg-gradient-to-r from-[#0d1b2a] to-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced]' : ''}`}>Ask a Questions</button>

                        <button onClick={() => setIsOpen("blogs")} className={`w-full duration-700 md:mt-0 mt-2 lg:px-16 px-8 lg:py-2 py-1 rounded-lg ${theme === 'light' ? 'text-white bg-gradient-to-l from-[#006466] to-[#212f45] hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45]' :
                            theme === 'dark' ? 'text-white bg-gradient-to-r from-[#48cae4] to-[#051923] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4]' :
                                theme === 'night' ? 'text-white bg-gradient-to-r from-[#0d1b2a] to-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced]' : ''}`}>Create a Blog</button>

                    </div>

                    {/* modal two sections end  */}

                    {/* display  post contend*/}

                    <div>
                        <div className="flex space-x-2">
                            <img src={userDetails?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                            <div>
                                <p className="text-lg font-[Poppins] font-bold pt-2">{userDetails?.displayName}</p>
                                <select ref={ref} className="text-black font-[Poppins] w-full border rounded-md">
                                    <option>Friends</option>
                                    <option>Public</option>
                                    <option>Only me</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* questions form start */}
                    {isOpen == "questions" ? <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <div className="my-2 w-1/2 font-[Poppins]">
                            <p className="text-md font-semibold mb-2">Select Category: </p>
                            <select required {...register("category")} className="text-black w-full border rounded-md">
                                <option>News & Updates</option>
                                <option>Creative Arts</option>
                                <option>Lifestyle & Hobbies</option>
                                <option>Wellness & Self-Care</option>
                                <option>Technology & Innovation</option>
                                <option>Entertainment Buzz</option>
                                <option>Science & Exploration</option>
                                <option>Travel & Adventure</option>
                                <option>Food & Cuisine</option>
                                <option>Personal Stories</option>
                                <option>Fashion & Style</option>
                                <option>Sports & Fitness</option>
                                <option>Parenting & Family</option>
                                <option>Education & Learning</option>
                            </select>
                        </div>
                        <textarea rows="4" {...register("text")} type="text" id="" className="text-black w-full border border-spacing-2 rounded-xl px-2 py-2" placeholder="What's on your mind?" required></textarea><br />
                        <div className="mt-8">
                            {/* fix submit button */}
                            <ButtonWithLoading width={"w-full"} loading={btnLoading} icon={<BsSend />}>Post</ButtonWithLoading>
                        </div>
                    </form> :
                        // blog  form start
                        <form className="mt-8" onSubmit={handleBlogSubmit}>
                            <textarea rows="4" type="text" id="" className="w-full border border-spacing-2 rounded-xl px-2 py-2" name="blogText" placeholder="What's on your mind?" required></textarea><br />
                            <div className="mt-4">

                                <input type="file"
                                    id="fileInput"
                                    name="fileInput"
                                    className={`text-sm text-grey-500 file:mr-5 file:py-3 file:px-10 file:rounded-lg file:border-0 file:text-md file:font-semibold hover:file:cursor-pointer hover:file:opacity-90 duration-500 py-5 w-full
                                    ${theme === 'light' ? 'file:text-white file:bg-gradient-to-l file:from-[#006466] file:to-[#212f45]' : theme === 'dark' ? 'file:text-white file:bg-gradient-to-tr file:from-[#48cae4] file:to-[#051923]' :
                                            theme === 'night' ? 'file:text-white file:bg-gradient-to-tr file:from-[#0d1b2a] file:to-[#b79ced]'
                                                : ''}
                                    `}
                                />

                            </div>

                            <div className="mt-8">
                                {/* fix submit button */}
                                <ButtonWithLoading width={"w-full"} loading={btnLoading} icon={<BsSend />}>Post Blog</ButtonWithLoading>
                            </div>

                        </form>}
                    {/* blog from end */}
                </div>
            )}
        </div>
    );
};

export default NewsForm;