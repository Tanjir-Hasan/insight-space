import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Welcome from "../pages/Shared/Welcome/Welcome";
import MessagesIcon from "../pages/Home/MessagesIcon/MessagesIcon";
import SingleChat from "../ChatApplication/SingleChat/SingleChat";

const Main = () => {

    const navigate = useLocation();

    return (
        <>
            <>
                <Navbar />

                <div className="mt-[72px]">
                    <Outlet />
                    <Welcome></Welcome>
                </div>

                {(location.pathname !== "/single-chat" && location.pathname !== "/group-conversations") && <MessagesIcon />}

            </>
        </>
    );
};


export default Main;