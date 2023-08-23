import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const Testimonial = () => {

    const { data: testimonials = [] } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const response = await axios(`https://insight-space-server.vercel.app/testimonials`)
            if (response) {
                // console.log(response.data);
            }
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
    return (
        <div>
            <div className="md:w-10/12 w-11/12 mx-auto">

                <h1 className='text-center md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#84a98c] w-1/2 mx-auto lg:pt-20 pt-10 '>
                    Testimonials
                    <br />
                    <span className='text-xl'>- What's says our users -</span>
                </h1>

            </div>

            <div className="">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="kakon">
                        <Carousel
                            responsive={responsive}
                            swipeable
                            draggable
                            arrows={true}
                            showDots={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"
                        >
                            {testimonials?.map((testimonial) => (
                                <div key={testimonial?._id} className="bg-white sm:rounded-lg p-6 h-48 my-10 hover:bg-[#84a98c] duration-700 shadow-xl m-3 overflow-hidden">
                                    <div className="flex items-center mb-4">
                                        <img className="w-10 h-10 rounded-full mr-4" src={testimonial?.photo} alt={testimonial?.userName} />
                                        <div>
                                            <h3 className=" capitalize text-lg font-medium text-gray-900">{testimonial?.userName}</h3>
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
                                        <p className="text-sm ">{testimonial?.message}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;