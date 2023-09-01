import moment from "moment";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import useUser from "../../../Hooks/useUser";


const AdminHome = () => {
    const [UserDetails] = useUser();
    const [ref, inView] = useInView();
    const { photoURL, _id, displayName, email, date } = UserDetails;
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (

        <div
            className="gap-4 bg-[#abc8b1] lg:w-full rounded-lg text-white px-16 pb-20"
        >
            <div className=" items-center justify-center  md:w-10/12 w-screen mx-auto drop-shadow-lg  ">

                <div className="">
                    <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto drop-shadow-lg">

                        <div className="space-y-2 md:px-0 px-10">


                            <p className=" md:text-5xl text-2xl font-[Poppins] border-b-2 gap-4 border-[#535d55] w-1/2  lg:pt-20 pt-5">Hi
                            </p>
                            <p className="uppercase font-bold text-3xl text-white-500"> {displayName}</p>
                            <h2 className="text-xl text-center font-semibold px-4">Welcome to Your Dashboard</h2>
                            <div className='flex text-xl gap-4'>
                                <div>
                                    <img style={{ borderRadius: '80px 80px 80px 80px' }} className="w-34 h-34" src={photoURL} alt="user photo" />
                                </div>
                                <div>
                                    <p><span className="font-[Cinzel] text-gray-700" >User ID:    </span>
                                        <span className="font-[Cinzel] text-gray-700">{_id}</span></p>
                                    <p><span className="font-[Cinzel] text-xl text-gray-700">Name:    </span>
                                        <span className="font-[Cinzel] text-gray-700">{displayName}</span></p>
                                    <p><span className=" font-[Cinzel]text-xl gap-4 text-gray-700">Email Address:    </span>
                                        <span className="font-[Cinzel] text-gray-700">{email}</span></p>
                                    <p><span className=" font-[Cinzel] text-xl text-gray-700">Join Date:   </span>
                                        <span className="font-[Cinzel] text-gray-700">{moment(date).format('lll')}</span></p>
                                </div>


                            </div>

                            <div className='  relative'>

                                <div className="z-10 absolute top-12 md:-left-10 w-full">
                                    <div
                                        className="bg-white  rounded-lg  border-2 backdrop-blur-sm bg-white/30 p-4 relative  h-70  text-black flex px-5 items-center"
                                    >
                                        <div className="absolute -top-5 -left-5">
                                            <img src="./images/client.png" alt="" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Key Responsibilities of an Administrator</h4>

                                            <p className="mb-5">
                                                User Management: Add, edit, or delete user accounts.
                                                Assign roles and permissions to users.
                                                View user activity logs.
                                            </p>
                                            <p className="mb-5">
                                            Content Management: Manage and edit website/app content.Approve or reject user-generated content (e.g., comments, posts).Schedule content publication or removal.
                                            </p>
                                            <div>
                                                <h4 className="font-bold">{displayName}</h4>

                                                <small>Admin</small>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- top card --> */}
                                <div className=" left-0 md:left-0 opacity-40 w-full">
                                    <div
                                        className=" backdrop-blur-sm bg-white/30 bg-white h-80 rounded-lg text-black flex px-5 items-center"
                                    >

                                        <div>

                                        </div>
                                    </div>
                                </div>


                            </div>



                        </div>

                    </div>






                </div>





                {/* </div>        */}


            </div>
        </div>

    );
};

export default AdminHome;