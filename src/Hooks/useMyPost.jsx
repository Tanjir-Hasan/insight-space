// for my post shamim
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from './UseAuth';


const useMyPost = () => {
    const {user} = useAuth()
    const [myPost, setMyPost] = useState("")
    // console.log(myPost)
    const url = `https://insight-space-server.vercel.app/my-posts?userEmail=${user?.email}`

    useEffect(() => {
        axios.get(url)
            .then(data => setMyPost(data.data))
    }, [url])
    return [myPost]

};

export default useMyPost;