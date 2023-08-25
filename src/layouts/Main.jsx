import { Link, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import GoogleTranslator from "../components/GoogleTranslator";

const Main = () => {

    return (
        <>
            <Navbar />

            <div className="mt-[72px]">
                <Outlet />
            </div>

            {/* <div className="flex justify-between w-10/12 mx-auto my-5">
                <GoogleTranslator />
                <Link to="/group-conversations">
                    <img src="https://i.ibb.co/LtKQ9c9/send-1.png" alt="send-image"
                        className="h-16" />
                </Link>
            </div> */}

            {/* <div className="flex justify-between w-10/12 mx-auto my-5">
                <GoogleTranslator />

                <div className="md:fixed md:bottom-64 md:right-28">
                    <Link to="/group-conversations">
                        <img
                            src="https://i.ibb.co/tQvLsdd/send.png"
                            alt="send-image"
                            className="h-16 animate-bounce hover:animate-none"
                        />
                    </Link>
                </div>
            </div> */}

            <Footer />
        </>
    );
};


export default Main;