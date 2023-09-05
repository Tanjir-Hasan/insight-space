import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonial = () => {

    const { theme } = useContext(ThemeContext);

    const controls = useAnimation();

    const [ref, inView] = useInView();

    const { data: testimonials = [] } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const response = await axios.get(`https://insight-space-server.vercel.app/testimonials`)
            return response.data;
        },
    })

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
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>

            <div className={`${theme === 'dark' ? 'testimonial bg-[#1d2d44]' : 'bg-wave bg-[#f0efeb]'}  pb-10`}>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className='md:w-10/12 w-11/12 mx-auto '>

                    <h1 className='md:text-5xl text-4xl flex md:flex-row flex-col items-baseline gap-3 font-[Poppins] border-b-2 border-[#84a98c] lg:w-5/12 md:w-9/12 lg:pt-20 pt-10 '>
                        <span>Testimonials</span>
                        <span className='text-xl'>- Our user's saying -</span>
                    </h1>

                </motion.div>

                <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto px-4 sm:px-6 lg:px-8">

                    <Carousel
                        responsive={responsive}
                        swipeable
                        draggable
                        arrows={false}
                        showDots={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                    >
                        {testimonials?.map((testimonial) => (
                            <div key={testimonial?._id} className="bg-white text-black sm:rounded-lg p-6 h-48 my-10 shadow-xl m-3 overflow-hidden">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 rounded-full mr-4" src={testimonial?.photo} alt={testimonial?.userName} />
                                    <div>
                                        <h3 className=" capitalize text-lg font-medium text-gray-900 font-[Cinzel]">{testimonial?.userName}</h3>
                                        <div className="mt-1 flex items-center">
                                            {[...Array(parseInt(testimonial?.rating))].map((_, index) => (
                                                <svg key={index} className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 1l2.928 6.856 6.072.472-4.664 4.38 1.388 6.08-5.824-3.512L4.376 18.76l1.388-6.08L0 8.328l6.072-.472L10 1z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-[Cinzel]">{testimonial?.message}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                </div>

            </div>

        </div>
    );
};

export default Testimonial;