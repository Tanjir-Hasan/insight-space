/* eslint-disable react/prop-types */ //
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";
import usePosts from "../../../Hooks/usePosts";
import useAuth from "../../../Hooks/UseAuth";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { SlClose } from 'react-icons/sl';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const NewsForm = () => {
    const [axiosSecure] = useAxiosSecure();
    const { theme } = useContext(ThemeContext);
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState("questions")
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
    }

    return (
        <div className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} py-4 mt-5 border border-[#84a98c] rounded-lg`}>

            {/* main form  */}

            <div className="mt-2 py-4 rounded-lg">
                <div className="flex space-x-2 mx-4">
                    <img src={userDetails?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                    <input type="text" name="" id="" onClick={() => setIsModalOpen(true)} className="w-full border border-spacing-3 rounded-xl px-2" placeholder="What's on your mind?" />
                </div>
            </div>

            {/* modal body  */}

            {isModalOpen && (
                <div className={`${theme === 'dark' ? 'bg-[#001427]' : 'bg-[#f0efeb]'} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg border-2 border-[#84a98c] sm:w-full lg:w-2/5`}>

                    <button onClick={() => setIsModalOpen(false)} className="px-3 py-1 rounded absolute right-3 top-2">
                        <SlClose className="text-2xl hover:text-[#ad2831]" />
                    </button>

                    {/* modal two sections start  */}

                    <div className="flex my-5 gap-5">

                        <button onClick={() => setIsOpen("questions")} className="text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-16 py-2 rounded-lg">Ask a Questions</button>

                        <button onClick={() => setIsOpen("blogs")} className="text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-16 py-2 rounded-lg">Create a Blog</button>

                    </div>

                    {/* modal two sections end  */}

                    {/* display  post contend content  */}

                    <div>
                        <div className="flex space-x-2">
                            <img src={user?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                            <div>
                                <p className="text-lg font-[Poppins] font-bold pt-2">{user?.displayName}</p>
                                <select ref={ref} className="text-black font-[Poppins] w-full border rounded-md">
                                    <option>Friends</option>
                                    <option>Public</option>
                                    <option>Only me</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* questions from start */}
                    {isOpen == "questions" ? <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <div className="my-2 w-1/2 font-[Poppins]">
                            <p className="text-md font-semibold mb-2">Select Category: </p>
                            <select required {...register("category")} className="text-black w-full border rounded-md">
                                <option>Educational</option>
                                <option>Science</option>
                                <option>Health</option>
                                <option>Technology</option>
                                <option>Food</option>
                                <option>Books</option>
                            </select>
                        </div>
                        <textarea rows="4" {...register("text")} type="text" id="" className="text-black w-full border border-spacing-2 rounded-xl px-2 py-2" placeholder="What's on your mind?"></textarea><br />
                        <div className="mt-8">
                            <button type="submit" className="text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-24 py-2 rounded-lg">Post</button>
                        </div>
                    </form> :
                        // blog  form start
                        <form className="mt-8">
                            <textarea rows="4" type="text" id="" className="w-full border border-spacing-2 rounded-xl px-2 py-2" placeholder="What's on your mind?"></textarea><br />
                            <div className="mt-4">
                                <input type="file"
                                    id="fileInput"
                                    name="fileInput"  {...register("file")}
                                    className="text-sm text-grey-500 file:mr-5 file:py-3 file:px-10 file:rounded-lg file:border-0 file:text-md file:font-semibold file:text-white file:bg-gradient-to-r file:from-[#84a98c] file:to-[#344e41] hover:file:cursor-pointer hover:file:opacity-90 duration-500 py-5 w-full" />
                            </div>
                            <div className="mt-8">
                                <button type="submit" className="text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-24 py-2 rounded-lg">Post Blog</button>
                            </div>
                        </form>}
                    {/* blog from end */}
                </div>
            )}
        </div>
    );
};

export default NewsForm;