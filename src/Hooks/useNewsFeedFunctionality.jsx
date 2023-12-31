import usePosts from "./usePosts";
import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";
import useBookMarks from "./useBookMarks";
import useAuth from "./useAuth";
import useBlog from "./useBlog";

const useNewsFeedFunctionality = () => {
  const [axiosSecure] = useAxiosSecure();
  const [, refetch] = usePosts();
  const { user } = useAuth();
  const [, reload, setReload] = useBookMarks();
  const [, reloadBlog, setReloadBlog] = useBlog();

  //   for react react
  const handleReact = (id, email) => {
    const addReact = { id, email };
    if (user) {
      axiosSecure.patch("/reacts", addReact)
        .then((data) => {
          if (data) {
            refetch();
            setReloadBlog(!reloadBlog)
          }
        })
        .catch((err) => console.log(err.message));
    }
  };
  // for add bookmarks
  const handleBookMark = (id, email) => {
    const addBookMark = { postId: id, email };
    axiosSecure.post("/book-marks", addBookMark)
      .then((data) => {
        if (data) {
          refetch();
          setReloadBlog(!reloadBlog)
          Swal.fire(
            "Success!",
            "This Question save on your collections.",
            "success"
          );
        }
      })
      .catch((err) => console.log(err.message));
  };

  // update posts
  const handleUpdatePost = (t, id, setIsOpenModal, isOpenModal) => {
    const text = t.current.value;
    const data = { text, id };
    axiosSecure.patch("/update-post", data)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          refetch();
          setIsOpenModal(!isOpenModal);
          setReloadBlog(!reloadBlog);
        }
      })
      .catch((err) => console.log(err.message));
  };

  // for add comments
  const handleAddComment = (p, user, ref) => {
    const comment = ref.current.value;
    const newComment = {
      comment,
      postId: p._id,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    if (comment.length > 0) {
      axiosSecure.patch("/comment", newComment)
        .then((data) => {
          if (data) {
            refetch();
            setReloadBlog(!reloadBlog);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your comment has been Uploaded",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  // for update comment
  const handleUpdateComment = (
    postId,
    commentId,
    text,
    setIsAction,
    setCommentAction
  ) => {
    const updateComment = text.current.value;
    const updateData = { postId, updateComment, commentId };
    axiosSecure.patch("/updateComment", updateData)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          setCommentAction(null);
          setIsAction(null);
          refetch();
          setReloadBlog(!reloadBlog);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (postId, commentId) => {
    const data = { postId, commentId };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch("/deleteComment", data)
          .then((data) => {
            refetch();
            setReloadBlog(!reloadBlog);
            if (data) {
              Swal.fire(
                "Deleted!",
                "Your comment has been deleted.",
                "success"
              );
            }
          })
          .catch((err) => console.log(err.message));
      }
    });
  };

  const handleDeletePost = (post) => {
    if (user?.email === post.userEmail) {
      axiosSecure.delete(`/deletePost/${post._id}`)
        .then((data) => {
          refetch();
          setReloadBlog(!reloadBlog);
          Swal.fire("Deleted!", "Your Post has been deleted.", "success");
        })
        .catch((err) => console.log(err.message));
    } else {
      axiosSecure.delete(`/deleteBookMark/${post._id}`)
        .then((data) => {
          if (data.data.deletedCount > 0) {
            setReload(!reload);
            setReloadBlog(!reloadBlog);
            Swal.fire("Deleted!", "Your Bookmark has been deleted.", "success");
          }
        })
        .catch((err) => console.log(err.message));
    }
  };
  return [handleReact, handleBookMark, handleAddComment, handleUpdateComment, handleDelete, handleDeletePost, handleUpdatePost];
};

export default useNewsFeedFunctionality;
