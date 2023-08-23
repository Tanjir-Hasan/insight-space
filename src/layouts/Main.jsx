import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import GoogleTranslator from '../components/GoogleTranslator';
 // Replace with the correct path

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[72px]">
                <Outlet />
            </div>
            <GoogleTranslator /> {/* Add the GoogleTranslator component here */}
            <Footer />
        </>
    );
};

export default Main;
