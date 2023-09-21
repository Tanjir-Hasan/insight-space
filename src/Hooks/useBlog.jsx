import { useEffect } from "react";
import usePosts from "./usePosts";
import { useState } from "react";

const useBlog = () => {
  const [posts, refetch] = usePosts();
  const [reloadBlog, setReloadBlog] = useState(false);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const findData = posts?.filter((blog) => blog.category === "Blog");
    setBlogs(findData);
  }, [posts, reloadBlog]);
  return [blogs, refetch, reloadBlog, setReloadBlog];
};

export default useBlog;
