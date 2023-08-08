import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = ({ cylon }) => {
    function showWebsiteContent() {
        // Display the website content by changing its CSS display property
        document.getElementById("website-content").style.display = "block";
        // Hide the loading message by changing its CSS display property
        document.getElementById("loading-message").style.display = "none";
    }
    setTimeout(showWebsiteContent, 3000);

    return (
        <>
         <div id="loading-message" className="loading-message bg-white mx-auto">
                {/* <h2 className="text-center pt-20 font-semibold text-2xl">Please Wait...</h2> */}
                <img className='h-20 mx-auto mt-16' src="https://thumbs.gfycat.com/MelodicJadedBlackrhino-size_restricted.gif" alt="" />
                <img className="mx-auto w-64" src="https://i.gifer.com/9IBr.gif" alt="" />
                {/* <ReactLoading className="text-center mx-auto pt-48" type={cylon}  /> */}
                {/* https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif */}
            </div>

            <div id="website-content" className="hidden bg-black bg-opacity-40">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </>
    );
};

export default Main;