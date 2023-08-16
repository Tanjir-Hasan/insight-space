/* eslint-disable react/prop-types */ //
import { useRef, useState } from "react";
import { FaArrowRight, FaBookmark, FaComment, FaHeart, FaHistory, FaThList } from 'react-icons/fa';
import useUser from "../../../Hooks/useUser";
import moment from "moment";
import usePosts from "../../../Hooks/usePosts";
import useNewsFeedFunctionality from "../../../Hooks/useNewsfeedFunctionality";


const DisplayNewsFeed = () => {
    const [userDetails] = useUser();
    const ref = useRef();
    const [hide, setHide] = useState(false);
    const [posts] = usePosts();
    const [handleReact, handleBookMark, handleAddComment] = useNewsFeedFunctionality();
    const [isAction, setIsAction] = useState(null)
    const [commentId, setCommentId] = useState(null)



    const handleEditComment = (id) => {
        setCommentId(id)
    }


    return (
        <div>
            {
                posts && posts.map(p => <div key={p._id} className="my-6 bg-slate-100 rounded-lg">
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
                            <button><FaBookmark onClick={() => handleBookMark(p._id, userDetails?.email)} className="text-2xl me-2" title="book mark"></FaBookmark></button>
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
                                        <div className="flex justify-between">
                                            <div className="flex space-x-3">
                                                <img src={c.photoURL} alt="" className="w-10 h-10 rounded-full" />
                                                <div>
                                                    <p className="text-lg font-semibold">{c.displayName}</p>
                                                   {commentId !== c.commentId && <p>{c.comment}</p>}
                                                    <textarea name="" id="" cols="2" rows="1" className="w-full px-4 py-2 border border-spacing-4 rounded-3xl" placeholder="add your answer"></textarea>
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={() => setIsAction(c.commentId)}><FaThList></FaThList></button>
                                                {isAction === c.commentId && <div>
                                                    <button onClick={() => handleEditComment(c.commentId)}>Edit</button>
                                                    <button>Delete</button>
                                                </div>}
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
    );
};

export default DisplayNewsFeed;