import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import Message from "../pages/Message/Message";
import GoogleTranslator from "../components/GoogleTranslator";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[72px]">
                <Outlet />
            </div>
            <GoogleTranslator /> 
            <Footer />
        </>
    );
};

export default Main;
