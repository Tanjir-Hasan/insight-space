import React, { useContext, useEffect, useRef, useState } from 'react';
import usePosts from '../../Hooks/usePosts';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import useUser from '../../Hooks/useUser';
import { ThemeContext } from '../../providers/ThemeProvider';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaArrowRight, FaBookmark, FaComment, FaHeart, FaHistory, FaThList } from 'react-icons/fa';
import moment from "moment";
import useAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import useBlog from '../../Hooks/useBlog';
import ButtonWithLoading from '../../components/ButtonWithLoading';
import { BsSend } from 'react-icons/bs';
import useNewsFeedFunctionality from '../../Hooks/useNewsFeedFunctionality';


const BlogFeed = () => {
    const [posts] = usePosts();
    const [show, setShow] = useState(false);
    const [singleData, setSingleData] = useState("");
    const controls = useAnimation();
    const [refs, inView] = useInView();
    const { theme } = useContext(ThemeContext);
    const [userDetails] = useUser();
    const ref = useRef();
    const [hide, setHide] = useState(false);
    const { user, btnLoading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [blogs, refetch] = useBlog();
    const [handleReact, handleBookMark, handleAddComment] = useNewsFeedFunctionality();
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    // console.log(posts)

    const haldleClick = (_id) => {
        const findData = posts.find(post => post._id === _id)
        setSingleData(findData)
        setActiveId(activeId === _id ? null : _id);
    }

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
                    const newPost = { imgURL, category: "Blog", status, date, text: blogText, userEmail: user.email, react, comment, userPhoto: userDetails?.photoURL, userName: userDetails?.displayName };
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

    return (
        <div className={`${theme}`}>

            <div className='w-10/12 mx-auto font-[Poppins]'>

                <form onSubmit={handleBlogSubmit}>

                    <div className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} border border-[#3c6e71] border-spacing-4 mt-2 py-5 rounded-lg`}>

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
                                className="text-sm text-grey-500 file:mr-5 file:py-3 file:px-10 file:rounded-lg file:border-0 file:text-md file:font-semibold file:text-white file:bg-gradient-to-r file:from-[#3c6e71] file:to-[#335c67] hover:file:cursor-pointer hover:file:opacity-90 duration-500 py-5 w-full" />
                        </label>

                        <div className="px-6">
                            {/* fix submit button */}
                            <ButtonWithLoading width={"w-full"} loading={btnLoading} icon={<BsSend />}>Share your thoughts</ButtonWithLoading>
                        </div>

                    </div>

                </form>




                <div className='md:flex gap-20 py-8'>

                    <div
                        className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} md:w-8/12 rounded-lg  `}>

                        <motion.div
                            ref={refs}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -100 },
                            }}
                            transition={{ duration: 0.9 }}>
                            <div className='border rounded-lg border-[#3c6e71]'>
                                <div className="p-4">
                                    <div className="flex space-x-2 mb-4">
                                        <img src={singleData?.userPhoto ? singleData?.userPhoto : "https://i.ibb.co/tbpwNBs/shamim-removebg-preview.png"} alt="user photo" className="w-12 h-12 rounded-full" />
                                        <div>
                                            <p className="text-lg font-semibold pt-1">{singleData?.userName ? singleData.userName : "MD Shamim Miah"}</p>
                                            <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(singleData.date).startOf('hour').fromNow()}</h6>
                                        </div>
                                    </div>
                                    <p>{singleData.text ?
                                        show === true ?
                                            <>
                                                <p>
                                                    {singleData.text}
                                                </p>
                                                <span className='font-semibold text-[#3c6e71] cursor-pointer' onClick={() => setShow(!show)}>Read Less</span>
                                            </>
                                            :
                                            <>
                                                <p className='text-slate-500'>
                                                    {singleData.text.substring(0, 250)} ......
                                                </p>
                                                <span className='font-semibold text-[#3c6e71] cursor-pointer' onClick={() => setShow(!show)}>Read More</span>
                                            </>
                                        :
                                        "In the digital age, blogs have become a powerful medium for sharing knowledge, experiences, and perspectives. The blog section on our platform is a dynamic space where thought-provoking ideas, expert insights, and personal narratives come together to create a tapestry of inspiration. Whether you're seeking guidance, entertainment, or a fresh perspective on various aspects of life, our blog section is here to be your companion on this exciting journey."} </p>

                                </div>
                                <div>
                                    {
                                        <img src={singleData?.imgURL ? singleData.imgURL : "https://i.ibb.co/J5cXvT4/want44772-1-Ib-Ur41479200085-1.jpg"} className="w-full  md:h-[400px]" alt="image" />
                                    }
                                </div>
                                <div className="w-full flex items-center py-6 px-8">
                                    <div className="w-full flex space-x-8">
                                        <button onClick={() => handleReact(singleData?._id, userDetails.email)} className="flex items-center"><FaHeart className={singleData?.react?.includes(userDetails.email) ? "text-3xl text-red-600 me-2" : "text-3xl me-2"}></FaHeart> {singleData?.react?.length}</button>
                                        <button onClick={() => setHide(singleData?._id)} className="flex items-center"><FaComment className="text-2xl me-2"></FaComment> {singleData?.comment?.length}</button>
                                    </div>
                                    <div>
                                        <button><FaBookmark onClick={() => handleBookMark(singleData?._id, userDetails?.email)} className="text-2xl me-2"></FaBookmark></button>
                                    </div>
                                </div>
                                {/* comment body  */}
                                {
                                    hide === singleData._id && <div>
                                        <div className="flex items-center space-x-2 px-4 py-6 border border-spacing-2">
                                            <img src={userDetails?.photoURL} alt="user photo" className="w-12 h-12 rounded-full" />
                                            <textarea ref={ref} name="" id="" cols="2" rows="1" className="w-full px-4 py-2 border border-spacing-4 rounded-3xl" placeholder="add your answer"></textarea>
                                            <button onClick={() => handleAddComment(p, userDetails, ref)} className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 flex items-center">Add<FaArrowRight className="text-2xl ms-2"></FaArrowRight> </button>
                                        </div>
                                        <div>
                                            {
                                                singleData?.comment?.map((c, i) => <div className="pt-2 pb-8 px-4" key={i}>
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
                            </div>
                        </motion.div>

                    </div>


                    <motion.div
                        ref={refs}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 100 },
                        }}
                        transition={{ duration: 0.9 }} className="mx-auto overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                        <h2 className=" text-center text-4xl uppercase mb-2 font-bold  font-[Poppins] border-b-2 border-[#3c6e71] md:py-0 py-8">Blog heading</h2>

                        {
                            blogs && blogs.map(p => <div key={p._id}  >

                                <div onClick={() => haldleClick(p._id)} className={`flex items-center gap-5 mb-7 px-5 py-8 bg-opacity-40 rounded-md shadow-md shadow-[#3c6e71] m-5 hover:bg-[#3c6e71]  duration-500 cursor-pointer ${activeId === p._id ? 'bg-[#3b6e46]' : ""}`}>
                                    <div>
                                        <img className='w-14 h-14 rounded-md' src={p?.imgURL} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-[Cinzel] font-semibold'>Posted by: {p.userName}</h2>
                                        <h2 className='font-[Cinzel]'>{p.text.substring(0, 70)}... {"  "}
                                            <span className='text-[#023e8a] hover:font-semibold cursor-pointer'>Read more</span>
                                        </h2>

                                    </div>
                                </div>


                            </div>)
                        }

                    </motion.div>

                </div>

            </div>

        </div>
    );
};

export default BlogFeed;