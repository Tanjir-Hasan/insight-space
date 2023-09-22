import { FaComment, FaEllipsisV } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import useUser from "../../../Hooks/useUser";
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import SSLPaymentModal from "../../Shared/PaidMember/SSLPayment/SSLPaymentModal/SSLPaymentModal";
import useNewsFeedFunctionality from "../../../Hooks/useNewsFeedFunctionality";
import { MdSend } from "react-icons/md";
import { ThemeContext } from "../../../providers/ThemeProvider";

const NewsFooter = ({ p, hide, setHide }) => {
  const { theme } = useContext(ThemeContext);

  const [userDetails] = useUser();

  const [allComments, setAllComments] = useState([]);
  const [isAction, setIsAction] = useState(null);

  useEffect(() => {
    setAllComments(p?.comment?.slice(0, 3));
  }, [p]);

  // display comment function
  const handleShowAllComments = (id) => {
    if (id === p._id) {
      setAllComments(p.comment);
    }

    if (id === p._id && allComments?.length > 3) {
      setAllComments(p?.comment?.slice(0, 3));
    }
  };

  const handleNewsModal = (id) => {
    if (id) {
      setHide(id);
    }
    if (id === hide) {
      setHide(null);
    }
  };

  const [commentAction, setCommentAction] = useState(null);

  const ref = useRef();

  const updateRef = useRef();

  const [handleReact, , handleAddComment, handleUpdateComment, handleDelete] = useNewsFeedFunctionality();

  return (
    <div>
      <div className="flex items-center space-x-8 p-6">
        <div className="w-full flex items-center gap-5">
          <button
            onClick={() => handleReact(p?._id, userDetails?.email)}
            className="flex items-center"
          >
            <AiFillHeart
              className={
                p?.react?.includes(userDetails?.email)
                  ? "text-2xl text-[#e5383b] me-2"
                  : "text-2xl me-2"
              }
            ></AiFillHeart>{" "}
            {p?.react?.length}
          </button>

          <button
            onClick={() => handleNewsModal(p?._id)}
            className="flex items-center"
          >
            <FaComment className="text-2xl me-2"></FaComment>{" "}
            {p?.comment?.length}
          </button>
        </div>

        {/* <SSLPaymentModal></SSLPaymentModal> */}
      </div>

      {/* comment body  */}
      {hide === p?._id && (
        <div>
          <div className="flex items-center space-x-2 px-4 py-6 border border-spacing-2 rounded-lg">
            <img
              src={userDetails?.photoURL}
              alt="user photo"
              className="w-12 h-12 rounded-full"
            />

            <textarea
              ref={ref}
              name=""
              id=""
              cols="2"
              rows="1"
              className="w-full text-black px-4 py-2 border border-spacing-4 rounded-3xl"
              placeholder="add your answer"
              required
            ></textarea>

            <button
              onClick={() => handleAddComment(p, userDetails, ref)}
              className={`duration-700 p-2 rounded-full ${theme === "light"
                ? "message-btn-light"
                : theme === "dark"
                  ? "message-btn-dark"
                  : theme === "night"
                    ? "message-btn-night"
                    : ""
                }`}
            >
              <MdSend className="text-2xl" />
            </button>
          </div>

          {/* category comments  */}
          {allComments?.length > 0 && (
            <select
              className="text-black mt-1 mx-1 block w-1/6 pl-2 py-2 text-base
           border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
           sm:text-sm rounded-md"
              onChange={() => handleShowAllComments(p?._id)}
            >
              <option>Top Comments</option>
              <option>All Comments</option>
            </select>
          )}
          {/* comment section start */}
          <div>
            {allComments?.map((c, i) => (
              <div className="pt-2 pb-8 px-4" key={i}>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <img
                      src={c.photoURL}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />

                    {/* comment delete and edit functionality  */}
                    <div>
                      <p className="text-lg font-semibold">{c.displayName}</p>

                      <p hidden={commentAction === c.commentId}>{c.comment}</p>

                      {commentAction === c?.commentId && (
                        <div>
                          <textarea
                            ref={updateRef}
                            name=""
                            id=""
                            cols="80"
                            rows="2"
                            defaultValue={c.comment}
                            className="w-full px-4 py-2 border border-spacing-4 rounded-3xl"
                          ></textarea>

                          <button
                            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 w-full"
                            onClick={() =>
                              handleUpdateComment(
                                p?._id,
                                c.commentId,
                                updateRef,
                                setIsAction,
                                setCommentAction
                              )
                            }
                          >
                            Update
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* delete and edit button  */}

                  <div
                    hidden={
                      commentAction === c.commentId ||
                      c.email !== userDetails.email
                    }
                  >
                    <button
                      hidden={isAction === c.commentId}
                      onClick={() => setIsAction(c.commentId)}
                    >
                      <FaEllipsisV></FaEllipsisV>
                    </button>

                    {isAction === c.commentId && (
                      <div className="flex flex-col justify-end">
                        {/* edit btn  */}
                        <button
                          className={`${theme === "dark"
                            ? "text-[#48cae4] font-semibold border-[#48cae4] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4] hover:text-white"
                            : theme === "night"
                              ? "text-[#b79ced] font-semibold border-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced] hover:text-white"
                              : theme === "light"
                                ? "text-black font-semibold hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45] hover:text-white border-[#3c6e71]"
                                : ""
                            } border-2 px-10 py-1 rounded-xl transition duration-700 mb-2`}
                          onClick={() => setCommentAction(c.commentId)}
                        >
                          Edit
                        </button>
                        {/* delete btn  */}
                        <button
                          className={`${theme === "dark"
                          ? "text-[#48cae4] font-semibold border-[#48cae4] hover:bg-gradient-to-r hover:from-[#051923] hover:to-[#48cae4] hover:text-white"
                          : theme === "night"
                            ? "text-[#b79ced] font-semibold border-[#b79ced] hover:bg-gradient-to-l hover:from-[#0d1b2a] hover:to-[#b79ced] hover:text-white"
                            : theme === "light"
                              ? "text-black font-semibold hover:bg-gradient-to-r hover:from-[#006466] hover:to-[#212f45] hover:text-white border-[#3c6e71]"
                              : ""
                          } border-2 px-10 py-1 rounded-xl transition duration-700 mb-2`}
                          onClick={() => handleDelete(p._id, c.commentId)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* comment section end */}
        </div>
      )}
    </div>
  );
};

export default NewsFooter;
