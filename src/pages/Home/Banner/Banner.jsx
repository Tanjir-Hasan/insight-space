import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay>

            <div className='group md:h-[720px]'>
                {/* <img src="https://i.ibb.co/7Ws57k2/news-1.jpg" className='grayscale' /> */}
                <img src="https://i.ibb.co/kqGBc6y/michal-czyz-ALM7-RNZu-DH8-unsplash-1-1.jpg" className='grayscale' />
                <p className="legend">Get Your Daily Dose of World Happenings</p>
            </div>

            <div className='md:h-[720px] group'>
                <img src="https://i.ibb.co/QPxK4Sx/arts.jpg" className='grayscale' />
                <p className="legend">The Canvas of Creative Expression Awaits</p>
            </div>

            <div className='md:h-[720px] group'>
                <img src="https://i.ibb.co/Wk68yfs/Lifestyle-Hobbies.jpg" className='grayscale' />
                <p className="legend">Embrace the Good Life, add Excitement to Your Everyday.</p>
            </div>

            <div className='md:h-[720px] group'>
                <img src="https://i.ibb.co/4pVRx58/Wellness-Self-Care.jpg" className='grayscale' />
                <p className="legend">Explore Mental and Physical Health.</p>
            </div>

            <div className='md:h-[720px] group'>
                <img src="https://i.ibb.co/Pc1nT6m/joes-valentine-exf4mc-Fw4zg-unsplash-1.jpg" className='grayscale' />
                <p className="legend">Stay Ahead of the Curve: Dive into Technology.</p>
            </div>

            <div className='md:h-[720px] group'>
                <img src="https://i.ibb.co/198MvrV/Entertainment-Buzz.jpg" className='grayscale' />
                <p className="legend">Lights, Camera, Action: Dive into Entertainment Buzz.</p>
            </div>

            <div className='md:h-[720px] group'>
                <img src="https://i.ibb.co/XDBfWCs/Science-Exploration.jpg" className='grayscale' />
                <p className="legend">Journey to the Unknown: Explore the Cosmos.</p>
            </div>

            <div className='md:h-[720px] group'>
                <img src="https://i.ibb.co/1MRvWc9/Adventures-Beyond-Borders-Travel-and-Explore.jpg" className='grayscale' />
                <p className="legend">Adventures Beyond Borders: Travel and Explore.</p>
            </div>

            <div className='md:h-[720px] group'>
                <img src="https://i.ibb.co/9gDmnXK/calum-lewis-v-A1-L1j-RTM70-unsplash-1.jpg" className='grayscale' />
                <p className="legend">Savor the Flavors: Culinary Delights Await.</p>
            </div>

            <div className='md:h-[720px] group'>
                <img src="https://i.ibb.co/dGgTM2q/florian-klauer-mk7-D-4-UCfmg-unsplash-1.jpg" className='grayscale' />
                <p className="legend">Share the Journey: Connect Through Personal Narratives.</p>
            </div>

        </Carousel>
    );
};

export default Banner;


