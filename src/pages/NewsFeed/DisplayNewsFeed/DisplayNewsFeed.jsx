/* eslint-disable react/prop-types */ //
import { useContext, useEffect, useState } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { FaComment, FaEllipsisH, FaHistory, FaLock, FaUserFriends } from 'react-icons/fa';
import useUser from "../../../Hooks/useUser";
import moment from "moment";
import usePosts from "../../../Hooks/usePosts";
import useNewsFeedFunctionality from "../../../Hooks/useNewsfeedFunctionality";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { useSelector } from "react-redux";
import NewsFooter from "./NewsFooter";
import { useRef } from "react";
import { SlClose, SlGlobe } from 'react-icons/sl';



const DisplayNewsFeed = ({ query }) => {

    const [id, setId] = useState(null);

    const [isOpen, setIsOpen] = useState(null);

    const [allPosts, setAllPosts] = useState([]);

    const [hide, setHide] = useState(false);

    const [isOpenModal, setIsOpenModal] = useState(false);

    const [editPost, setEditPost] = useState({});

    const ref = useRef();

    const { theme } = useContext(ThemeContext);

    const [userDetails] = useUser();

    const [posts] = usePosts();

    const [, handleBookMark, , , , handleDeletePost, handleUpdatePost] = useNewsFeedFunctionality();
    // redux state 
    const categoriesData = useSelector(state => state?.categories);
    const bookMarks = useSelector(state => state?.bookMarks)
    const myPosts = useSelector(state => state?.myPosts)
   

    useEffect(() => {
        if (categoriesData.length > 0) {
            setAllPosts(categoriesData)
        }
        else if (bookMarks.length > 0) {
            setAllPosts(bookMarks)
        }
        else if (myPosts.length > 0) {
            setAllPosts(myPosts)
        }
        else {
            setAllPosts(posts)
        }
    }, [categoriesData, posts, myPosts, bookMarks]);


    const setIsOpenPostActions = (id) => {
        if (isOpen) {
            setIsOpen(null)
        }
        else {
            setIsOpen(id)
        }
    };

    const EditPostModalOpen = (post) => {
        setIsOpenModal(!isOpenModal)
        setEditPost(post);
    };

    // copy url function
    const handleCopyClick = (id) => {
        const currentURL = window.location.href;
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = `${currentURL}/${id}`;
        tempInput.select();
        document.execCommand('copy');
        alert("Link copy done")
    };

    //   end  copy url

    return (
        <div className="min-h-screen">
            {
                allPosts && allPosts.filter(post => post.text.toLowerCase().includes(query.toLowerCase())).map(p =>
                    <div
                        key={p._id}
                        className={`mb-3 ${theme} rounded-lg border border-[#3c6e71]`}>

                        <div className="p-4">

                            <div className="flex justify-between">

                                <div className="flex space-x-2 mb-4">                                 
                                        <img src={p.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />                                       
                                    <div>
                                        <p className="text-lg font-semibold pt-1">{p.userName}</p>
                                        <div className="flex space-x-2">
                                            <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(p.date).startOf('hour').fromNow()}</h6>
                                            <button>{p.status === "Public" && <SlGlobe title={p.status}></SlGlobe>}{p.status === "Friends" && <FaUserFriends title={p.status}></FaUserFriends>}{p.status === "Only me" && <FaLock title={p.status}></FaLock>}</button>
                                        </div>
                                    </div>
                                </div>

                                {/* posts action  */}

                                <div className="px-2 flex items-baseline">

                                    {isOpen === p._id &&

                                        <div className="relative">
                                            <ul className="p-4 space-y-2 w-72 bg-[#F0EFEB] text-black rounded-lg absolute top-0 right-0">

                                                <li><button hidden={bookMarks.length === allPosts.length || p.userEmail === userDetails.email} className="posts-action-btn" onClick={() => handleBookMark(p._id, userDetails?.email)} >Bookmark</button></li>

                                                <li><button hidden={bookMarks.length === allPosts.length || p.userEmail === userDetails.email} className="posts-action-btn" onClick={() => handleCopyClick(p._id)} >Copy Link</button></li>

                                                <li><button hidden={p.userEmail !== userDetails.email} className="posts-action-btn" onClick={() => handleDeletePost(p)}>Delete</button></li>

                                                <li><button hidden={p.userEmail !== userDetails.email} onClick={() => EditPostModalOpen(p)} className="posts-action-btn">Edit Posts</button></li>

                                                <li> {bookMarks.length === allPosts.length && <button className="posts-action-btn" onClick={() => handleDeletePost(p)}>Delete Bookmark</button>}</li>
                                            </ul>

                                        </div>}

                                    {/* hidden={posts.length === allPosts.length} */}

                                    <button className="hover:scale-125 duration-500" onClick={() => setIsOpenPostActions(p._id)}><FaEllipsisH></FaEllipsisH></button>

                                </div>

                            </div>

                            {/* see more btn  */}

                            <div className="my-4">

                                <span hidden={id === p._id}>{p.text?.slice(0, 300)}</span>

                                <span hidden={p.text?.length < 300}>

                                    <span hidden={id !== p._id}>{p.text}</span>

                                    <span hidden={id === p._id} onClick={() => setId(p._id)}
                                        className={`${theme === 'light' ? "text-[#3c6e71]" : "text-[#48cae4]"} underline underline-offset-4 ms-2 text-sm text-[#3c6e71] cursor-pointer`}
                                    >See More</span>

                                    <span hidden={id !== p._id} onClick={() => setId(0)}
                                        className={`${theme === 'light' ? "text-[#3c6e71]" : "text-[#48cae4]"} underline underline-offset-4 ms-2 text-sm text-[#3c6e71] cursor-pointer`}>See Less</span>

                                </span>

                            </div>

                        </div>

                        <div>
                            {
                                p.imgURL && <img src={p.imgURL} className="w-full max-h-[600px]" alt="blog image" />
                            }
                        </div>

                        <NewsFooter p={p} hide={hide} setHide={setHide}></NewsFooter>

                    </div>)
            }

            {/* modal for update post  */}

            {isOpenModal && (

                <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">

                    <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

                    <div className="modal-container bg-white w-11/12 md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">

                        {/* Add your modal content here */}
                        <div className="p-4">

                            <div className="flex justify-between">

                                <div className="flex space-x-2 mb-4">

                                    <img src={editPost.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />

                                    <div>
                                        <p className="text-lg font-semibold pt-1">{editPost.userName}</p>
                                        <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(editPost.date).startOf('hour').fromNow()}</h6>
                                    </div>

                                </div>

                                <div>
                                    <button onClick={() => setIsOpenModal(!isOpenModal)}><SlClose className="text-3xl"></SlClose></button>
                                </div>

                            </div>

                            <div className="m-2">
                                <textarea ref={ref} name="" id="" className="w-full border-slate-300 border-2 rounded-xl p-2" defaultValue={editPost.text} rows="8"></textarea>
                            </div>

                            <div>
                                {
                                    editPost.imgURL && <img src={editPost.imgURL} className="w-full max-h-[300px] rounded-lg" alt="blog image" />
                                }
                            </div>

                            <div className="w-full flex space-x-8 p-6">

                                <button className="flex items-center"><AiFillHeart className={editPost.react.includes(userDetails.email) ? "text-2xl text-red-600 me-2" : "text-2xl me-2"}></AiFillHeart> {editPost.react.length}</button>

                                <button className="flex items-center"><FaComment className="text-2xl me-2"></FaComment> {editPost.comment.length}</button>

                            </div>

                            <div>
                                <button onClick={() => handleUpdatePost(ref, editPost._id, setIsOpenModal, isOpenModal)} className="w-full secondary-button">Update</button>
                            </div>

                        </div>

                    </div>

                </div>
            )};
            {/* modal for update post end */}

        </div>
    );
};

export default DisplayNewsFeed;