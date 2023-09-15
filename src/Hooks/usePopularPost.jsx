import axios from 'axios';
import React, { useEffect, useState } from 'react';

const usePopularPost = () => {
    const [popularPost, setPopularPost] = useState("")
    const url = `${import.meta.env.VITE_base_URL}/top-post`
    useEffect(() => {
        axios.get(url)
            .then(data => setPopularPost(data.data))
    }, [url])
    return [popularPost]
};

export default usePopularPost;