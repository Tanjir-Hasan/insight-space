import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import useUser from "../../Hooks/useUser";
import { useForm } from "react-hook-form";
import usePosts from "../../Hooks/usePosts";
import useNewsFeedFunctionality from "../../Hooks/useNewsfeedFunctionality";
import { FaArrowRight, FaBookmark, FaComment, FaHeart, FaHistory } from 'react-icons/fa';
import moment from "moment";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hooks/UseAuth";
import useBlog from "../../Hooks/useBlog";

const BlogFeed = () => {

    const { theme } = useContext(ThemeContext);

    const [userDetails] = useUser();

    const [blogs, refetch] = useBlog();

    console.log(blogs)

    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();

    // const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    // console.log(image_hosting_url);
    const handleBlogSubmit = (e) => {
        e.preventDefault();
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
                    const newPost = { imgURL, category: "blog", status, date, text: blogText, userEmail: user.email, react, comment, userPhoto: userDetails?.photoURL, userName: userDetails?.displayName };
                    axiosSecure.post('/posts', newPost)
                        .then(data => {
                            if (data) {
                                Swal.fire(
                                    'Success!',
                                    'Your Blog Uploaded.',
                                    'success'
                                )
                                refetch();
                            }
                        })
                        .catch(err => console.log(err.message))
                }
            })
    }

    // show post functionality

    const ref = useRef();

    const [hide, setHide] = useState(false);

    const [posts] = usePosts();

    const [handleReact, handleBookMark, handleAddComment] = useNewsFeedFunctionality();

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>

            <div className="md:w-2/3 w-11/12 mx-auto py-4">

                <form onSubmit={handleBlogSubmit}>

                    <div className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} border border-[#84a98c] border-spacing-4 mt-2 py-5 rounded-lg`}>

                        <div className="flex space-x-2 mx-4 px-2">
                            <img src={userDetails?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                            <input type="post" name="blogText" placeholder="What's on your mind?" className="text-black w-full border border-spacing-3 rounded-xl px-2" required />
                        </div>

                        <select ref={ref} className="text-black font-[Poppins] border rounded-md mx-6 mt-5 w-28 px-3">
                            <option>Public</option>
                            <option>Friends</option>
                            <option>Only me</option>
                        </select>

                        <label className="mx-6">
                            <input type="file"
                                    id="fileInput"
                                    name="fileInput"
                                className="text-sm text-grey-500 file:mr-5 file:py-3 file:px-10 file:rounded-lg file:border-0 file:text-md file:font-semibold file:text-white file:bg-gradient-to-r file:from-[#84a98c] file:to-[#344e41] hover:file:cursor-pointer hover:file:opacity-90 duration-500 py-5 w-full" />
                        </label>

                        <div className="px-6">
                            <button type="submit" className='text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] w-full duration-700 px-16 md:px-24 py-2 rounded-lg'>Share your thoughts</button>
                        </div>

                    </div>

                </form>

                {/* show post functionality */}

                <div>
                    {
                        blogs && blogs.map(p => <div key={p._id}
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
                                    p.imgURL && <img src={p.imgURL} className="w-full max-h-[600px]" alt="image" />
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

export default BlogFeed;