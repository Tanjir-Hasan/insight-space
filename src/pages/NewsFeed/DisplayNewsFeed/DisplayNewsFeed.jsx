import { useState } from "react";
import { FaBookmark, FaComment, FaHeart, FaHistory } from 'react-icons/fa';

const DisplayNewsFeed = ({ post }) => {
    const [details, setDetails] = useState(post?.postText.slice(0, 200))
    const { postText, userName, userPhoto, postImg, reacts, comments } = post;
    return (
        <div className="my-6 bg-slate-100">
            <div className="p-4">
                <div className="flex space-x-2 mb-4">
                    <img src={userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                    <div>
                        <p className="text-lg font-semibold pt-1">{userName}</p>
                        <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory> 5 min ago</h6>
                    </div>
                </div>
                <span>{details}</span>
                {details.length >= 200 ? <span hidden={details.length > 200} onClick={() => setDetails(postText)} className="underline underline-offset-4 ms-2 text-sm text-green-600">See More</span> : ""}
                {/* <span onClick={() => setDetails(postText.slice(0, 200))} className="underline underline-offset-4 ms-2 text-sm text-green-600">See Less</span> */}
            </div>
            <div>
                {
                    postImg && <img src={postImg} className="w-full max-h-[600px]" alt="image" />
                }
            </div>
            {/* TODO: make like and comment dynamic */}
            <div className="w-full flex items-center py-6 px-8">
                <div className="w-full flex space-x-8">
                    <button className="flex items-center"><FaHeart className="text-red-600 text-2xl me-2"></FaHeart> 50</button>
                    <button className="flex items-center"><FaComment className="text-2xl me-2"></FaComment> 20</button>
                </div>
                <div>
                    <button><FaBookmark className="text-2xl me-2"></FaBookmark></button>
                </div>
            </div>
        </div>
    );
};

export default DisplayNewsFeed;