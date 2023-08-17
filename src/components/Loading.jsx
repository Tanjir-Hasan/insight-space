import Lottie from 'lottie-react-web';
import React from 'react';
import loader from "../../public/Loader/animation_llevge6w.json"
const Loading = () => {
    return (
        <div>
            <Lottie

                options={{
                    animationData: loader
                }}
            />
        </div>
    );
};

export default Loading;