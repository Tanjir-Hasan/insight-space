import moment from "moment";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import useUser from "../../../Hooks/useUser";


const InstructorHome = () => {
    const [userDetails] = useUser();
    const [ref, inView] = useInView();
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
                            <p className="uppercase font-bold text-3xl text-white-500"> {userDetails?.displayName}</p>
                            <h2 className="text-xl text-center font-semibold px-4">Welcome to Your Dashboard</h2>
                            <div className='flex text-xl gap-4'>
                                <div>
                                    <img src={userDetails?.photoURL} alt="user photo" className="w-36 h-36 rounded-full" />
                                </div>
                                <div>
                                    <p><span className="font-[Cinzel] text-gray-700" >User ID:    </span>
                                        <span className="font-[Cinzel] text-gray-700">{userDetails?._id}</span></p>
                                    <p><span className="font-[Cinzel] text-xl text-gray-700">Name:    </span>
                                        <span className="font-[Cinzel] text-gray-700">{userDetails?.displayName}</span></p>
                                    <p><span className=" font-[Cinzel]text-xl gap-4 text-gray-700">Email Address:    </span>
                                        <span className="font-[Cinzel] text-gray-700">{userDetails?.email}</span></p>
                                    <p><span className=" font-[Cinzel] text-xl text-gray-700">Join Date:   </span>
                                        <span className="font-[Cinzel] text-gray-700">{moment(userDetails?.date).format('lll')}</span></p>
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
                                                Quality Teaching: Instructors are responsible for providing high-quality instruction that engages students.


                                                Classroom Environment: Instructors create a positive and inclusive learning environment.
                                            </p>
                                            <p className="mb-5">
                                                
                                               Assessment & Support: They assess student progress, provide feedback, and offer support for improvement.
                                            </p>
                                            <div>
                                                <h4 className="font-bold">{userDetails?.displayName}</h4>

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

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                                <div className="bg-white h-46 rounded-lg border-2 backdrop-blur-sm bg-white/30 p-4"
                                >
                                    <h2 className='text-center'>Free Membership</h2>
                                    <p className='text-center'>Dip your toes into our community with our no-cost Free Membership, offering you a taste of our content and a glimpse into the possibilities that await.</p>
                                </div>

                                <div className="bg-white h-46 rounded-lg  border-2 backdrop-blur-sm bg-white/30 p-4"
                                >
                                    <h2 className='text-center'>Basic Membership</h2>
                                    <p className='text-center'>Unlock the door to a range of essential features with our Basic Membership, designed to provide you with foundational benefits and a solid starting point for your journey with us.</p>
                                </div>

                                <div className="bg-white h-46 rounded-lg border-2 backdrop-blur-sm bg-white/30 p-4"
                                >
                                    <h2 className='text-center' >Pro Membership</h2>
                                    <p className='text-justify'>Step up your game and take full advantage of our Pro Membership, offering advanced perks, exclusive access, and a premium experience that caters to your aspirations and needs.</p>
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

export default InstructorHome;