import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import Welcome from "../pages/Shared/Welcome/Welcome";



const Main = () => {
    // const{user} = useAuth();
    
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const openModal = () => {
    //     setIsModalOpen(true);
    //     document.body.style.overflow = 'hidden';

    // };


    // const closeModal = () => {
    //     setIsModalOpen(false);
    //     document.body.style.overflow = '';
    // }

    return (
        <>
            <div className="">
                <Navbar />


                <div className="mt-[72px]">
                    <Outlet />
                    <Welcome></Welcome>
                </div>

                {/* {
                    user? (<div className="fixed bottom-2 right-2 md:bottom-3 md:right-3 ">
                    <img className='animate-pulse hover:animate-none rounded-full w-16 md:h-20 md:w-20' onClick={openModal} src="https://i.ibb.co/b2JRtnf/uctyn-QJ7r-D7i.png" alt="" />
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                    </Modal>
                </div>) : ""
                } */}

                


                {/* <div className="flex justify-between w-10/12 mx-auto my-5">
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

                <div className="flex justify-between w-10/12 mx-auto my-5">
                    <GoogleTranslator />
                   
                        <Link to="/group-conversations">
                            <img
                                src="https://i.ibb.co/tQvLsdd/send.png"
                                alt="send-image"
                                className="h-16" title="Start Conversations"
                            />
                        </Link>
                    
                </div>

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

            </div>
        </>
    );
};


export default Main;