import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../StateManagment/Posts/postSlice";
import { useState } from "react";

const useBlog = () => {
  const [reloadBlog, setReloadBlog] = useState(false);
  const { isLoading, posts, error } = useSelector(state => state.posts);
  const blogs = posts?.filter(blg => blg.category === "Blog");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts())
  }, [reloadBlog])
  return [blogs, reloadBlog, setReloadBlog]
};
export default useBlog;
// 

