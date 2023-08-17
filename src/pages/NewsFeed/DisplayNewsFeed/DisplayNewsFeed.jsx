/* eslint-disable react/prop-types */ //
import { useContext, useRef, useState } from "react";
import { FaArrowRight, FaBookmark, FaComment, FaEllipsisV, FaHeart, FaHistory } from 'react-icons/fa';
import useUser from "../../../Hooks/useUser";
import moment from "moment";
import usePosts from "../../../Hooks/usePosts";
import useNewsFeedFunctionality from "../../../Hooks/useNewsfeedFunctionality";
import Swal from "sweetalert2";
import { ThemeContext } from "../../../providers/ThemeProvider";
import axios from "axios";


const DisplayNewsFeed = () => {
    const { theme } = useContext(ThemeContext);
    const [userDetails] = useUser();
    const ref = useRef();
    const updateRef = useRef();
    const [hide, setHide] = useState(false);
    const [posts] = usePosts();
    const [handleReact, handleBookMark, handleAddComment, handleUpdateComment] = useNewsFeedFunctionality();
    const [isAction, setIsAction] = useState(null)
    const [commentAction, setCommentAction] = useState(null)

 


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://insight-space-server.vercel.app/deleteComment?id=${id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data) {
                            Swal.fire(
                                'Deleted!',
                                'Your comment has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        })
    }




    return (
        <div>
            {
                posts && posts.map(p => <div key={p._id}
                    className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} my-6 rounded-lg border border-[#84a98c]`}
                >
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
                                <textarea ref={ref} name="" id="" cols="2" rows="1" className="w-full px-4 py-2 border border-spacing-4 rounded-3xl" placeholder="add your answer"></textarea>
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
                                                    <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 w-full" onClick={() => handleDelete(c.commentId)}>Delete</button>
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