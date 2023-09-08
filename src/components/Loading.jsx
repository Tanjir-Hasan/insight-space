import Lottie from "lottie-react";
import React from 'react';
import loader from "../../public/loading.json"
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const Loading = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${ theme }`}>
            <Lottie animationData={loader} loop={true} className="w-1/3 flex justify-center items-center h-screen mx-auto" />
        </div>
    );
};

export default Loading;