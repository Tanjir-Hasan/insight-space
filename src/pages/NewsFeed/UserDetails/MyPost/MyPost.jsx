import React from 'react';
import useMyPost from '../../../../Hooks/useMyPost';

const MyPost = () => {
    const [myPost] = useMyPost();
    console.log(myPost)
    return (
        <div>
            
        </div>
    );
};

export default MyPost;