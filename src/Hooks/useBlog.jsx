import { useEffect } from "react";
import usePosts from "./usePosts";
import { useState } from "react";

const useBlog = () => {
    const [posts, refetch] = usePosts();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const findData = posts?.filter(blog => blog.category === 'Blog');
        setBlogs(findData);
    }, [posts])
    return [blogs, refetch]
};

export default useBlog;