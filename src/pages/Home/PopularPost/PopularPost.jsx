import React from 'react';
import usePopularPost from '../../../Hooks/usePopularPost';

const PopularPost = () => {
    const [popularPost] = usePopularPost();
    console.log(popularPost)
    return (
        <div>
            
        </div>
    );
};

export default PopularPost;