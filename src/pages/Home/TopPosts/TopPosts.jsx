import React from 'react';
import { useEffect } from "react";
import { fetchPosts } from "../../../StateManagment/Posts/postSlice";
import { useDispatch, useSelector } from "react-redux";

const TopPosts = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts)
    console.log(posts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            {
                posts && posts.slice(0,4).map ( topPost => <div key={topPost._id}>
                 
                    <h2>{topPost.text}</h2>
                    <h2>{topPost.userName}</h2>
                    <img src={topPost.userPhoto} alt="" />
                    <p>Date: {topPost.category}</p>
                    <p>Status: {topPost.status}</p>
                </div>
                )
            }
        </div>
    );
};

export default TopPosts;