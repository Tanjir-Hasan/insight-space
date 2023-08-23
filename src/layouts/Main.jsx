import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import Message from "../pages/Message/Message";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="mt-[72px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;