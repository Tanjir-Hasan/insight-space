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
    });

    return (
        <>
            <div className=''>
                <Slider autoplay={3000}>
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className=''
                            style={{
                                backgroundImage: `url('${item.Bg_Image}')`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat', 
                                height: '100%'
                            }}
                        >
                            <div className="text-center overlay">
                                <div className='content-container py-36'>
                                    <h1 className='title'>{item.title}</h1>
                                    <p className='description'>{item.description}</p>
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