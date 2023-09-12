import moment from "moment";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import useUser from "../../../Hooks/useUser";

// icons
import subject from "../../../assets/images/icons/book-stack.png"
import questions from "../../../assets/images/icons/question.png"
import exam from "../../../assets/images/icons/exam (1).png"


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
            className="gap-4 bg-[#E8ECF1] lg:w-full rounded-lg text-gray-500  px-16 pb-20"
        >
            <div className=" items-center justify-center  md:w-10/12 w-screen mx-auto drop-shadow-lg  ">

                <div className="">
                    <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto drop-shadow-lg">

                        <div className="space-y-2 md:px-0 px-5 pt-10">

                            <p className="uppercase font-bold text-3xl text-white-500 text-center"> {userDetails?.displayName}</p>
                            <h2 className="text-xl text-center font-semibold px-4">Welcome to Your Dashboard</h2>

                            <div className='  relative'>

                                <div className="">
                                    <div
                                        className="bg-white  rounded-lg  border-2 backdrop-blur-sm bg-white/30 p-4 relative  h-70  text-black flex px-5 items-center gap-2">
                                        
                                        <div>
                                            <h4 className="font-bold">Key Responsibilities of an Instructor</h4>

                                            <p className="mb-5">
                                                Quality Teaching: Instructors are responsible for providing high-quality instruction that engages students.</p>

                                            <p>
                                                Classroom Environment: Instructors create a positive and inclusive learning environment.
                                            </p>


                                            <p className="mb-5">

                                                Assessment & Support: They assess student progress, provide feedback, and offer support for improvement.
                                            </p>
                                            

                                        </div>
                                        <div className="">
                                            <div>
                                                <img src={userDetails?.photoURL} alt="user photo" className="w-52 h-36" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{userDetails?.displayName}</h4>

                                                <small>Instructor</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                                <div className="bg-[#8BBABB] h-46 rounded-lg border-2  p-4"
                                >
                                    <h2 className='text-center text-white'>Subject and Plan</h2>
                                    <div className="justify-center items-center p-12">
                                        <img src={subject} className="w-24 h-24"></img>
                                    </div>

                                </div>

                                <div className="bg-[#87C0CD] h-46 rounded-lg  border-2 backdrop-blur-sm bg-white/30 p-4"
                                >
                                    <h2 className='text-center text-white'>Questions</h2>
                                    <div className="justify-center items-center p-12">
                                        <img src={questions} className="w-24 h-24"></img>
                                    </div>
                                </div>

                                <div className="bg-[#71C9CE] h-46 rounded-lg border-2 backdrop-blur-sm bg-white/30 p-4"
                                >
                                    <h2 className='text-center text-white'>Classes and Exams</h2>
                                    <div className="justify-center items-center p-12">
                                        <img src={exam} className="w-24 h-24"></img>
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

export default InstructorHome;