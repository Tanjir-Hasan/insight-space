import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
// import AllVideos from './AllVideos';






const Videos = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [videos, setVideos] = useState([]);
    const [showVideo, setShowVideo] = useState([]);
    console.log(showVideo)

    const url = '/videos.json';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setVideos(data))
    }, [url])

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const haldleClick = (id) => {
        console.log(id)
        const findData = videos.find(video => video.id === id)
        setShowVideo(findData)
        // console.log(findData)
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex gap-8'>
                <div className='w-12/8'>
                    <iframe className='rounded-md' width="960" height="515" src={showVideo.videos ? showVideo.videos : "https://www.youtube.com/embed/xNRJwmlRBNU" } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscree="true"></iframe>
                    <div className='grid grid-cols-2 justify-items-center gap-5 mt-5'>
                       <div>
                       <p>{showVideo?.message}</p>
                       </div>
                        <div>
                            <p>{showVideo?.views} Views</p>
                            <p>{showVideo?.likes} Likes</p>
                            <p>{showVideo?.streming} steaming</p>
                            <p>{showVideo?.start} ago</p>

                        </div>
                    </div>
                </div>
                


                <div className='w-4/12 flex flex-col gap-4 border'>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 100 },
                        }}
                        transition={{ duration: 0.9 }} className=" mx-auto  overflow-y-auto" style={{ maxHeight: '500px' }}>

                        <h2 className=" text-center text-4xl uppercase mb-2 font-bold  font-[Poppins] border-b-2 border-[#84a98c]">Related Videos</h2>

                        {
                            videos.map(video => <div key={video.id} className="mt-5">

                                <div onClick={() => haldleClick(video.id)} className='flex gap-5 p-2'>
                                    <div className='w-[40%] relative'>
                                        <img className='w-44 h-24' src={video.img} alt="" />
                                        <img className='absolute w-8 bottom-6 right-12' src="https://i.ibb.co/p3kWvRZ/16630-removebg-preview.png" alt="" />
                                    </div>
                                    <div className='w-[60%]'>
                                        <p>{video?.message}</p>
                                    </div>

                                </div>
                            </div>)


                        }

                    </motion.div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-5 mt-20 border p-5 justify-items-center'>
                {
                    videos.map(video => <div key={video.id} className="">

                        <div onClick={() => haldleClick(video.id)} className='border rounded-md '>
                            <img className='w-72 h-36 rounded-md' src={video.img} alt="" />
                            <p>{video?.message}</p>
                        </div>
                    </div>)
                }


            </div>

        </div>
    );
};

export default Videos;