import React from 'react';

const LatestBlog = ({ latest }) => {
    // console.log(latest)
    return (
        <div>
            <div className='mb-10'>
                <img className='h-56 w-full rounded-md' src={latest.imgURL} alt="" />
                <h2 className='font-[Cinzel] text-3xl'>{latest?.text.substring(0, 70)}... {"  "}
                    <span className='text-[#023e8a] hover:font-semibold cursor-pointer'>Read more</span>
                </h2>
            </div>
        </div>
    );
};

export default LatestBlog;