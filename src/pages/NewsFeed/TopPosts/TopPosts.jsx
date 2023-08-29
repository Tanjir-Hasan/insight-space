import React from 'react';

const TopPosts = () => {



    return (
        <div className="">

            <div className='text-black bg-[#fdfffc] shadow-xl p-4 font-[Cinzel] duration-700 cursor-pointer rounded-xl mb-3'>

                <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ad.{" "}
                    <span className='text-[#013a63]'>Continue reading {" "}....</span>
                </p>

                <div className='flex items-baseline gap-3 py-2'>

                    {/* {imgURL && <img src="https://i.ibb.co/235F36k/hands-1.jpg" alt="blog photo" className='w-20 rounded-lg' />} */}

                    <img src="https://i.ibb.co/235F36k/hands-1.jpg" alt="blog photo" className='w-20 rounded-lg' />

                    <h4 >Author, Name</h4>
                </div>

            </div>




        </div>
    );
};

export default TopPosts;