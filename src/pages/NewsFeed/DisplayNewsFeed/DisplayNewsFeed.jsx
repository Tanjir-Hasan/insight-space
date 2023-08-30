/* eslint-disable react/prop-types */ //
import { useContext, useEffect, useRef, useState } from "react";
import { FaArrowRight, FaBookmark, FaComment, FaEllipsisV, FaHeart, FaHistory, FaTrashAlt } from 'react-icons/fa';
import useUser from "../../../Hooks/useUser";
import moment from "moment";
import usePosts from "../../../Hooks/usePosts";
import useNewsFeedFunctionality from "../../../Hooks/useNewsfeedFunctionality";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { useSelector } from "react-redux";



const DisplayNewsFeed = ({ query }) => {
    const [id, setId] = useState(null);
    const { theme } = useContext(ThemeContext);
    const [userDetails] = useUser();
    const ref = useRef();
    const updateRef = useRef();
    const [hide, setHide] = useState(false);
    const [posts] = usePosts();
    const [allPosts, setAllPosts] = useState([]);
    const [handleReact, handleBookMark, handleAddComment, handleUpdateComment, handleDelete, handleDeletePost] = useNewsFeedFunctionality();
    const [isAction, setIsAction] = useState(null)
    const [commentAction, setCommentAction] = useState(null)
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
    }, [categoriesData, posts, myPosts, bookMarks])


    return (
        <div>
            {
                allPosts && allPosts.filter(post => post.text.toLowerCase().includes(query.toLowerCase())).map(p => <div key={p._id}
                    className={`mb-3 ${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} rounded-lg border border-[#84a98c]`}>
                    <div className="p-4">
                        <div className="flex justify-between">
                            <div className="flex space-x-2 mb-4">
                                <img src={p.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                                <div>
                                    <p className="text-lg font-semibold pt-1">{p.userName}</p>
                                    <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(p.date).startOf('hour').fromNow()}</h6>
                                </div>
                            </div>
                            <div className="px-6" hidden={posts.length === allPosts.length}>
                                <button><FaTrashAlt onClick={() => handleDeletePost(p)} className="transition-transform duration-300 ease-in-out text-xl hover:scale-150 hover:text-red-600"></FaTrashAlt></button>
                            </div>
                        </div>
                        {/* see more btn  */}
                        <div className="my-4">
                            <span hidden={id === p._id}>{p.text?.slice(0, 300)}</span>
                            <span hidden={p.text?.length < 300}>
                                <span hidden={id !== p._id}>{p.text}</span>
                                <span hidden={id === p._id} onClick={() => setId(p._id)} className="underline underline-offset-4 ms-2 text-sm text-green-600">See More</span>
                                <span hidden={id !== p._id} onClick={() => setId(0)} className="underline underline-offset-4 ms-2 text-sm text-green-600">See Less</span>
                            </span>
                        </div>
                    </div>

                    <div>
                        {
                            p.imgURL && <img src={p.imgURL} className="w-full max-h-[600px]" alt="blog image" />
                        }
                    </div>

                    <div className="w-full flex items-center py-6 px-8">
                        <div className="w-full flex space-x-8">
                            <button onClick={() => handleReact(p._id, userDetails.email)} className="flex items-center"><FaHeart className={p.react.includes(userDetails.email) ? "text-3xl text-red-600 me-2" : "text-3xl me-2"}></FaHeart> {p.react.length}</button>
                            <button onClick={() => setHide(p._id)} className="flex items-center"><FaComment className="text-2xl me-2"></FaComment> {p.comment.length}</button>
                        </div>
                        <div>
                            <button><FaBookmark onClick={() => handleBookMark(p._id, userDetails?.email)} className="text-2xl me-2" title="book mark"></FaBookmark></button>
                        </div>
                    </div>

                    {/* comment body  */}

                    {
                        hide === p._id && <div>
                            <div className="flex items-center space-x-2 px-4 py-6 border border-spacing-2">
                                <img src={userDetails.photoURL} alt="user photo" className="w-12 h-12 rounded-full" />
                                <textarea ref={ref} name="" id="" cols="2" rows="1" className="w-full px-4 py-2 border border-spacing-4 rounded-3xl" placeholder="add your answer" required ></textarea>
                                <button onClick={() => handleAddComment(p, userDetails, ref)} className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 flex items-center">Add<FaArrowRight className="text-2xl ms-2"></FaArrowRight> </button>
                            </div>
                            {/* comment section start */}
                            <div>
                                {
                                    p?.comment?.map((c, i) => <div className="pt-2 pb-8 px-4" key={i}>
                                        <div className="flex justify-between">
                                            <div className="flex space-x-2">
                                                <img src={c.photoURL} alt="" className="w-10 h-10 rounded-full" />
                                                {/* comment delete and edit functionality  */}
                                                <div>
                                                    <p className="text-lg font-semibold">{c.displayName}</p>
                                                    <p hidden={commentAction === c.commentId}>{c.comment}</p>
                                                    {commentAction === c.commentId && <div><textarea ref={updateRef} name="" id="" cols="80" rows="2" defaultValue={c.comment} className="w-full px-4 py-2 border border-spacing-4 rounded-3xl"></textarea><button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 w-full" onClick={() => handleUpdateComment(p._id, c.commentId, updateRef, setIsAction, setCommentAction)}>Update</button></div>}
                                                </div>
                                            </div>
                                            {/* delete and edit button  */}
                                            <div hidden={commentAction === c.commentId || c.email !== userDetails.email}>
                                                <button hidden={isAction === c.commentId} onClick={() => setIsAction(c.commentId)}><FaEllipsisV></FaEllipsisV></button>
                                                {isAction === c.commentId && <div>
                                                    {/* edit btn  */}
                                                    <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 w-full mb-2" onClick={() => setCommentAction(c.commentId)}>Edit</button>
                                                    {/* delete btn  */}
                                                    <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 w-full" onClick={() => handleDelete(p._id, c.commentId)}>Delete</button>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                            {/* comment section end */}
                        </div>
                    }
                </div>)
            }
        </div>
    );
};

export default DisplayNewsFeed;