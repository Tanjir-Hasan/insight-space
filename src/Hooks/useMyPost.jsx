// for my post shamim
import React, { useEffect, useState } from 'react';
import useAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';


const useMyPost = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const [myPost, setMyPost] = useState([]);
    // console.log(myPost)
    const url = `/my-posts?userEmail=${user?.email}`

    useEffect(() => {
        axiosSecure.get(url)
            .then(data => setMyPost(data.data))
    }, [url])
    return [myPost]

};

export default useMyPost;