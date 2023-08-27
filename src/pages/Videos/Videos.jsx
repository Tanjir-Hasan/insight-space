import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import DisplayNewsFeed from '../NewsFeed/DisplayNewsFeed/DisplayNewsFeed';
import { FaSearch } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import DisplayVideos from './DisplayVideos';
import moment from "moment";
import { FaArrowRight, FaBookmark, FaComment, FaEllipsisV, FaHeart, FaHistory } from 'react-icons/fa';




const Videos = () => {
    const { theme } = useContext(ThemeContext);
    const [searchText, setSearchText] = useState("");
    const [videos, setVideos] = useState([]);
    const controls = useAnimation();
    const [refs, inView] = useInView();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [topVideo, setTopVideo] = useState([])
    const [categoryVideos, setCategoryVideos] = useState([])
    const [showResult, setShowResult] = useState(false);
    const [activeId, setActiveId] = useState(null);
    console.log(categoryVideos)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const url = '/Video.json';
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
        const findData = videos.find(post => post.id === id)
        setTopVideo(findData)
        setActiveId(activeId === id ? null : id);

    }


    const handleEducation = () => {
        const categoryFilter = videos.filter(video => video.category === 'Educational')
        setCategoryVideos(categoryFilter);
        setShowResult(true)

    }
    const handleScience = () => {
        const categoryFilter = videos.filter(video => video.category === 'Science')
        setCategoryVideos(categoryFilter);
        setShowResult(true)
    }
    const handleHealth = () => {
        const categoryFilter = videos.filter(video => video.category === 'Health')
        setCategoryVideos(categoryFilter);
        setShowResult(true)
    }
    const handleTechnology = () => {
        const categoryFilter = videos.filter(video => video.category === 'Technology')
        setCategoryVideos(categoryFilter);
        setShowResult(true)
    }
    const handleFood = () => {
        const categoryFilter = videos.filter(video => video.category === 'Food')
        setCategoryVideos(categoryFilter);
        setShowResult(true)
    }
    const handleBooks = () => {
        const categoryFilter = videos.filter(video => video.category === 'Books')
        setCategoryVideos(categoryFilter);
        setShowResult(true)
    }
    const handleFashion = () => {
        const categoryFilter = videos.filter(video => video.category === 'Fashion')
        setCategoryVideos(categoryFilter);
        setShowResult(true)
    }
    const handleSports = () => {
        const categoryFilter = videos.filter(video => video.category === 'Sports')
        setCategoryVideos(categoryFilter);
        setShowResult(true)
    }

    return (
        <div className={`${theme === 'dark' ? 'dark' : 'mb-5 '}`}>
            <div className="flex gap-5  ">

                {/* category section start */}
                <div className="w-3/12 mt-16 fixed top-0 left-0">
                    <div className='flex items-center pl-4 mt-10 md:mt-0'>
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" name="text" placeholder='Search by Post' className='my-2 border-2 border-black focus:border-[#84a98c] focus:outline-0 rounded-lg md:p-2 p-1 w-full' />
                        <span className='relative right-10'><FaSearch></FaSearch></span>
                    </div>
                    <div>
                        <h2 className='text-2xl font-[Poppins] p-2  rounded-t-xl'>Select Your category</h2>
                    </div>

                    <div className="cursor-pointer font-light text-xl px-5  rounded-b-xl ">
                        <h3 onClick={() => handleEducation()} className='quiz-category-effects'>Educational</h3>
                        <h3 onClick={() => handleScience()} className='quiz-category-effects'>Science</h3>
                        <h3 onClick={() => handleHealth()} className='quiz-category-effects'>Health</h3>
                        <h3 onClick={() => handleTechnology()} className='quiz-category-effects'>Technology</h3>
                        <h3 onClick={() => handleFood()} className='quiz-category-effects'>Food</h3>
                        <h3 onClick={() => handleBooks()} className='quiz-category-effects'>Books</h3>
                        <h3 onClick={() => handleFashion()} className='quiz-category-effects'>Fashion</h3>
                        <h3 onClick={() => handleSports()} className='quiz-category-effect'>Sports</h3>
                    </div>

                </div>

                {/* display videos section start */}
                {showResult ?
                    (
                        <div className="w-6/12  mx-auto px-5  overflow-y-auto ">
                            {
                                categoryVideos.map(video => <DisplayVideos videos={videos} video={video} key={video.id} ></DisplayVideos>)
                            }
                        </div>
                    ) : (
                        <div className="w-6/12  mx-auto px-5  overflow-y-auto ">
                            {
                                videos.map(video => <DisplayVideos videos={videos} video={video} key={video.id} ></DisplayVideos>)
                            }
                        </div>
                    )}






                {/* top videos section start */}
                <div className="w-3/12 mt-20 mb-20 p-1  min-h-screen fixed top-0 right-0">
                    <motion.div
                        ref={refs}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 100 },
                        }}
                        transition={{ duration: 0.9 }} className=" mx-auto overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                        <h2 className=" text-center text-3xl uppercase mb-2 font-bold  font-[Poppins] border-b-2 border-[#84a98c] md:py-0 py-8">Top Videos</h2>
                        {
                            videos && videos.map(p => <div key={p.id} onClick={openModal}  >
                                <div onClick={() => haldleClick(p.id)} className={` flex items-center gap-5 mb-7   bg-opacity-40 rounded-md shadow-md shadow-[#84a98c] m-5 hover:bg-[#84a98c]  duration-700 ${activeId === p.id ? 'bg-[#5c9568]' : ''}`}>
                                    <div>


                                        {
                                            activeId === p.id ?
                                                (<iframe className='rounded-md w-32 h-24' src={p?.videos} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscree="true"></iframe>)
                                                :
                                                (<img className='rounded-md w-32 h-24' src={p?.Thumble} alt="" />)
                                        }
                                    </div>
                                    <div>
                                        <h2 className='font-[Cinzel]'>{p.title.substring(0, 20)}... {"  "}
                                            <span className='text-[#023e8a] hover:font-semibold cursor-pointer'>Read more</span>
                                        </h2>
                                        <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(p.date).startOf('hour').fromNow()}</h6>
                                    </div>
                                </div>
                            </div>)
                        }
                    </motion.div>
                </div>


            </div>

            {/* top vidos modal */}
            <div
                className={`fixed inset-0 flex items-center  justify-center ${isModalOpen ? 'visible' : 'hidden'}`}>
                <div className="fixed inset-0 bg-black opacity-50">

                </div>
                <div className="bg-white p-1 rounded-lg shadow-md z-10 w-10/12 min-h-screen   ">
                    <button
                        onClick={closeModal}
                        className="absolute top-20 right-40 text-black text-4xl hover:text-gray-700">
                        Close
                    </button>




                    <div className=''>
                        <iframe className='rounded-md w-full h-[300px] md:h-[600px] lg:h-[900px] p-12 md:p-20 lg:p-32 mt-20 ' src={topVideo.videos} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscree="true"></iframe>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Videos;