import usePosts from "./usePosts";
import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";

const useNewsFeedFunctionality = () => {
    const [axiosSecure] = useAxiosSecure();
    const [, refetch] = usePosts();
    //   for react react 
    const handleReact = (id, email) => {
        const addReact = { id, email }
        axiosSecure.patch("/reacts", addReact)
            .then(data => {
                if (data) {
                    refetch()
                }
            })
            .catch(err => console.log(err.message))
    };
    // for add bookmarks
    const handleBookMark = (id, email) => {
        const addBookMark = { postId: id, email }
        axiosSecure.post("/book-marks", addBookMark)
            .then(data => {
                if (data) {
                    refetch()
                    Swal.fire(
                        'Success!',
                        'This Question save on your collections.',
                        'success'
                    )
                }
            })
            .catch(err => console.log(err.message))
    };
    // for add comments 
    const handleAddComment = (p, user, ref) => {
        const comment = ref.current.value;
        const newComment = { comment, postId: p._id, email: user.email, displayName: user.displayName, photoURL: user.photoURL }
        axiosSecure.patch("/comment", newComment)
            .then(data => {
                if (data) {
                    refetch()
                }
            })
            .catch(err => console.log(err.message))
    };

    // for update comment 
    const handleUpdateComment = (postId, commentId, text, setIsAction, setCommentAction) => {
        const updateComment = text.current.value;
        const updateData = { postId, updateComment, commentId };
        axiosSecure.patch("/updateComment", updateData)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    setCommentAction(null);
                    setIsAction(null);
                    refetch();
                }
            })
            .catch(err => console.log(err))
    }

    return [handleReact, handleBookMark, handleAddComment, handleUpdateComment]
};

export default useNewsFeedFunctionality;