import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay>

            <div className='group h-[720px]'>
                {/* <img src="https://i.ibb.co/7Ws57k2/news-1.jpg" className='grayscale' /> */}
                <img src="https://i.ibb.co/kqGBc6y/michal-czyz-ALM7-RNZu-DH8-unsplash-1-1.jpg" className='grayscale' />
                <p className="legend">Get Your Daily Dose of World Happenings</p>
            </div>

            <div className='h-[720px] group'>
                <img src="https://i.ibb.co/QPxK4Sx/arts.jpg" className='grayscale' />
                <p className="legend">The Canvas of Creative Expression Awaits</p>
            </div>

            <div className='h-[720px] group'>
                <img src="https://i.ibb.co/Wk68yfs/Lifestyle-Hobbies.jpg" className='grayscale' />
                <p className="legend">Embrace the Good Life, add Excitement to Your Everyday.</p>
            </div>

            <div className='h-[720px] group'>
                <img src="https://i.ibb.co/4pVRx58/Wellness-Self-Care.jpg" className='grayscale' />
                <p className="legend">Explore Mental and Physical Health.</p>
            </div>

            <div className='h-[720px] group'>
                <img src="https://i.ibb.co/Pc1nT6m/joes-valentine-exf4mc-Fw4zg-unsplash-1.jpg" className='grayscale' />
                <p className="legend">Stay Ahead of the Curve: Dive into Technology.</p>
            </div>

            {/* <div className='h-[720px] group'>
                <img src="https://i.ibb.co/qg9QYph/aditya-rathod-tc-rukx-VBXQ-unsplash-1.jpg" className='grayscale' />
                <p className="legend">Legend 1</p>
            </div>

            <div className='h-[720px] group'>
                <img src="https://i.ibb.co/qg9QYph/aditya-rathod-tc-rukx-VBXQ-unsplash-1.jpg" className='grayscale' />
                <p className="legend">Legend 1</p>
            </div>

            <div className='h-[720px] group'>
                <img src="https://i.ibb.co/qg9QYph/aditya-rathod-tc-rukx-VBXQ-unsplash-1.jpg" className='grayscale' />
                <p className="legend">Legend 1</p>
            </div>

            <div className='h-[720px] group'>
                <img src="https://i.ibb.co/qg9QYph/aditya-rathod-tc-rukx-VBXQ-unsplash-1.jpg" className='grayscale' />
                <p className="legend">Legend 1</p>
            </div>

            <div className='h-[720px] group'>
                <img src="https://i.ibb.co/qg9QYph/aditya-rathod-tc-rukx-VBXQ-unsplash-1.jpg" className='grayscale' />
                <p className="legend">Legend 1</p>
            </div> */}

        </Carousel>
    );
};

export default Banner;

