import axios from 'axios';
import React, { useEffect, useState } from 'react';

const usePopularPost = () => {
    const [popularPost, setPopularPost] = useState("")
    const url = "https://insight-space-server.vercel.app/top-post"
    useEffect(() => {
        axios.get(url)
            .then(data => setPopularPost(data.data))
    }, [url])
    return [popularPost]
};

export default usePopularPost;