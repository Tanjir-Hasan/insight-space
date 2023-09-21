import moment from "moment";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import { useContext, useEffect } from "react";
import useUser from "../../../Hooks/useUser";

// icons
import subject from "../../../assets/images/icons/book-stack.png"
import questions from "../../../assets/images/icons/question.png"
import exam from "../../../assets/images/icons/exam (1).png"
import { ThemeContext } from "../../../providers/ThemeProvider";


const InstructorHome = () => {

    const { theme } = useContext(ThemeContext);

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
        <div className={`${theme}`}>
            
            <div className="lg:w-full rounded-lg pb-10">

                <div className="items-center justify-center  md:w-10/12 w-screen mx-auto drop-shadow-lg ">

                    <div>
                        <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto drop-shadow-lg">

                            <div className="space-y-2 md:px-0 px-5 pt-10 ">

                                <p className="uppercase font-bold text-3xl text-white-500 text-center"> {userDetails?.displayName}</p>

                                <h2 className="text-xl text-center font-semibold px-4">Welcome to Your Dashboard</h2>

                                <div className='bg-white mt-8 rounded-lg border-2 backdrop-blur-sm bg-white/90 h-50 text-black gap-2'>

                                    <div className="md:flex justify-between md:gap-10 lg:gap-16 py-20 px-10">

                                        <div className="description">

                                            <h4 className="font-bold mb-4">Key Responsibilities of an Instructor</h4>

                                            <div className="mb-2 font-[Cinzel]">
                                                <p className="font-[Cinzel] ">Quality Teaching:  </p>
                                                <div className="w-40 h-0.5 "></div>
                                                Instructors are responsible  for providing high-quality  instruction <br></br>that engages students.</div>

                                            <div className="mb-2 font-[Cinzel] ">
                                                <p className="font-[Cinzel]">Classroom Environment:</p>
                                                <div className="w-40 h-0.5 "></div>
                                                Instructors create a positive and inclusive learning environment.
                                            </div>

                                            <div className="mb-2 font-[Cinzel]">
                                                <p className="font-[Cinzel]">Assessment & Support:</p>
                                                <div className="w-40 h-0.5 "></div>
                                                They assess student progress, provide feedback, and offer support for improvement.
                                            </div>

                                        </div>

                                        <div className="Image">

                                            <div className="w-full  p-6 flex justify-center items-center bg-fixed bg-[#e5e5e5]/30 rounded-md mb-5 md:mb-0">
                                                <img src={userDetails?.photoURL} alt="user photo" className="w-46 h-36" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{userDetails?.displayName}</h4>

                                                <small>Instructor</small>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10">

                                    <div className="bg-[#7cb7b8] h-46 rounded-lg border-2 p-4">

                                        <h2 className='text-center font-semibold text-white mb-4'>Subject and Plan</h2>

                                        <div className="w-full  p-6 flex justify-center items-center bg-fixed bg-[#e5e5e5]/30 rounded-md mb-5 md:mb-0">
                                            <img src={subject} className="w-24 h-24 "></img>
                                        </div>

                                    </div>

                                    <div className="bg-[#87C0CD] h-46 rounded-lg border-2 backdrop-blur-sm p-4">
                                        <h2 className='text-center font-semibold text-white mb-4'>Questions</h2>
                                        <div className="w-full  p-6 flex justify-center items-center bg-fixed bg-[#e5e5e5]/30 rounded-md mb-5 md:mb-0">
                                            <img src={questions} className="w-24 h-24"></img>
                                        </div>
                                    </div>

                                    <div className="bg-[#71C9CE] h-46 rounded-lg border-2 backdrop-blur-sm p-4">
                                        <h2 className='text-center font-semibold text-white mb-4'>Classes and Exams</h2>
                                        <div className="w-full  p-6 flex justify-center items-center bg-fixed bg-[#e5e5e5]/30 rounded-md mb-5 md:mb-0">
                                            <img src={exam} className="w-24 h-24"></img>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default InstructorHome;