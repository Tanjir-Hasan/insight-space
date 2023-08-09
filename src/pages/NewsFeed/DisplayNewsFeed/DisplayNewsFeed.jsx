/* eslint-disable react/prop-types */ //
import { useEffect} from "react";
import { FaBookmark, FaComment, FaHeart, FaHistory } from 'react-icons/fa';
import { fetchPosts } from "../../../StateManagment/Posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
import useUser from "../../../Hooks/useUser";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";


const DisplayNewsFeed = () => {
    const [userDetails] = useUser();
    const { isLoading, posts, error } = useSelector(state => state.posts)
    // console.log(posts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    //  handle react 
    const handleReact = (id, email) => {
        const addReact = { id, email }
        axios.patch("https://insight-space-server.vercel.app/reacts", addReact)
            .then(data => console.log(data.data))
            .catch(err => console.log(err.message))
    }
    // for add bookmarks
    const handleBookMark = (id, email) => {
        const addBookMark = { postId:id, email }
        axios.post("https://insight-space-server.vercel.app/book-marks", addBookMark)
            .then(data => {
                if(data){
                    Swal.fire(
                        'Success!',
                        'This Question save on your collections.',
                        'success'
                    )
                }
            })
            .catch(err => console.log(err.message))
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
                    {/* TODO: make like and comment dynamic */}
                    <div className="w-full flex items-center py-6 px-8">
                        <div className="w-full flex space-x-8">
                            <button onClick={() => handleReact(p._id, userDetails.email)} className="flex items-center"><FaHeart className="text-red-600 text-2xl me-2"></FaHeart> {p.react.length}</button>
                            <button className="flex items-center"><FaComment className="text-2xl me-2"></FaComment> {p.comment.length}</button>
                        </div>
                        <div>
                            <button><FaBookmark onClick={()=>handleBookMark(p._id , userDetails?.email)} className="text-2xl me-2"></FaBookmark></button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default DisplayNewsFeed;