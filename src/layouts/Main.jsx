import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Welcome from "../pages/Shared/Welcome/Welcome";



const Main = () => {
    return (
        <>
            <>
                <Navbar />

                <div className="mt-[72px]">
                    <Outlet />
                    <Welcome></Welcome>
                </div>

            </>
        </>
    );
};


export default Main;