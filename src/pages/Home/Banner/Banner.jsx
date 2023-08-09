import { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Banner = () => {
    const [content, setContent] = useState([])

    useEffect(() => {
        fetch('Banner.json')
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(error => console.error(error))
    })



    return (
        <>
        <div className=' className="h-56"'>
            <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.Bg_Image}') no-repeat center center` }}
                    >
                        <div className="text-center">
                            <div className='bg-stone-800 opacity-60 h-60'>
                            <h1 className='mt-20 pt-10 text-4xl font-semibold text-white'>{item.title}</h1>
                            <p className='mt-5 text-xl  text-white'>{item.description}</p>
                            <button className='mt-5 mb-5 rounded-full bg-white w-40 h-12 '>Sign Up</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </>
    );
};

export default Banner;