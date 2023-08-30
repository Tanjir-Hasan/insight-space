import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import useMyFriends from '../../../Hooks/useMyFriends';
import { useEffect } from 'react';

const MyFriends = () => {

    const { theme } = useContext(ThemeContext);

    const [friends] = useMyFriends();

    const controls = useAnimation();

    const [ref, inView] = useInView();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className='flex'>

            <div className='w-1/3 bg-rose-200'>
                <div>
                    <h1>Pending Request</h1>
                </div>
                <div>
                    <h1>My Friends</h1>
                </div>
            </div>



            <div className='w-2/3 bg-cyan-200'>

                <div>
                    <h1>All friend request</h1>
                </div>

                <Carousel
                    responsive={responsive}
                    swipeable
                    draggable
                    arrows={false}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                >
                    {
                        friends?.map((friend) => (
                            <div key={friend?._id} className="bg-white text-black sm:rounded-lg p-6 h-48 my-10 shadow-xl m-3 overflow-hidden">
                                <div className="flex flex-col items-center justify-center space-y-3 mb-4">

                                    <img className="w-20 rounded-full" src={friend?.photoURL} alt={friend?.displayName} />

                                    <h3 className="capitalize text-lg font-medium text-gray-900 font-[Cinzel]">{friend?.displayName}</h3>

                                    <h3 className="capitalize text-lg font-medium text-gray-900 font-[Cinzel]">{friend?.email}</h3>

                                </div>
                            </div>
                        ))
                    }
                </Carousel>

            </div>

        </div>
    );
};

export default MyFriends;