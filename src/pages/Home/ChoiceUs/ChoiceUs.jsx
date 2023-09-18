import icon1 from "../../../assets/images/icons/sun (1).png";
import icon2 from "../../../assets/images/icons/reflect.png";
import icon3 from "../../../assets/images/icons/sun.png";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const ChoiceUs = () => {

    const { theme } = useContext(ThemeContext);

    const controls = useAnimation();
    
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className={`${theme}`}>

            <div className="Insight-space justify-center items-center">

                <div className="lg:flex justify-between rounded-lg">

                    <div className="flex items-center justify-center md:w-10/12 w-11/12 mx-auto drop-shadow-lg">

                        <div className="space-y-5 md:px-0 px-6">

                            <h1 className="text-4xl mb-5 mt-10 font-bold font-[Poppins]">Why Choose Us?</h1>
                            <ul className="font-[Cinzel]">
                                <li className="list-[upper-roman] list-inside">Cultivating Collective Wisdom: Empowering Minds Through.</li>
                                <li className="list-[upper-roman] list-inside">A Dynamic Knowledge Sharing  Platform for Seamless.</li>
                                <li className="list-[upper-roman] list-inside">Collaboration, Continuous Learning, and Innovation.</li>
                            </ul>

                            <div className="md:w-8/12 md:mx-0 w-11/12 mx-auto">
                                <Link to="/login">
                                    <Button heading="Sign-up"></Button>
                                </Link>
                            </div>

                        </div>

                    </div>

                    {/* right side card for large device*/}

                    <div className="relative w-10/12 md:mr-20 py-24 hidden sm:hidden md:hidden lg:block xl:block">

                        {/* <!-- banner top card --> */}

                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -100 },
                            }}
                            transition={{ duration: 0.9 }}

                            className="md:ml-24 w-full md:w-5/6 ">
                            <div className="relative flex h-40 px-5 item-center">
                                <div className="absolute -top-10 left-12">
                                    <img className="w-12 h-12" src={icon2}></img>
                                </div>
                                <div>
                                    <p className="mt-5 font-[Cinzel] text-justify">Feedback and Continuous Improvement: Users can seek feedback on their work, ideas, or projects, leading to refinement and improvement. Constructive criticism and suggestions can be shared in a supportive environment.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* <!-- banner middle card --> */}

                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -100 },
                            }}
                            transition={{ duration: 0.9 }}

                            className={`${theme === 'light' ? 'hover:bg-[#3c6e71]' : theme === 'dark' ? 'hover:bg-[#051923]' : theme === 'night' ? 'hover:bg-[#0d1b2a]' : ''} md:-left-20 w-full md:w-5/6 hover:text-white duration-500 rounded-3xl`}
                            >
                            <div className="relative h-40 rounded-lg flex px-5 items-center">
                                <div className="absolute -top-10 left-12">
                                    <img className="h-16" src={icon3}></img>
                                </div>
                                <div className="">
                                    <p className="mb-5 font-[Cinzel] text-justify">Preservation of Institutional Knowledge: As employees come and go, organizations risk losing valuable institutional knowledge. Knowledge sharing platforms help preserve this knowledge by capturing it in a format that can be passed on to new employees.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* <!-- banner bottom card --> */}

                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -100 },
                            }}
                            transition={{ duration: 0.9 }}

                            className="md:-ml-40 w-full md:w-5/6">
                            <div className="relative h-40 rounded-lg flex px-5 items-center">
                                <div className="absolute -top-10 left-12">
                                    <img className="w-16 h-16" src={icon1}></img>
                                </div>
                                <div>
                                    <p className="font-[Cinzel] text-justify">Accessibility and Convenience: Knowledge sharing platforms provide a central repository where information, expertise, and resources are accessible at any time and from anywhere. This convenience is especially valuable for remote teams, global collaborations, or individuals seeking information on the go.</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* right side card for small device */}

                    <div className="w-11/12 mx-auto py-10 space-y-3 lg:hidden md:block">

                        <div className={`${theme === 'light' ? 'hover:bg-[#3c6e71]' : theme === 'dark' ? 'hover:bg-[#051923]' : theme === 'night' ? 'hover:bg-[#0d1b2a]' : ''} duration-500 rounded-3xl p-5`}>
                            <div className="flex justify-center">
                                <img className=" h-20" src={icon2} alt="" />
                            </div>
                            <p className="mt-5 font-[Cinzel] text-justify">Feedback and Continuous Improvement: Users can seek feedback on their work, ideas, or projects, leading to refinement and improvement. Constructive criticism and suggestions can be shared in a supportive environment.</p>
                        </div>

                        <div className={`${theme === 'light' ? 'hover:bg-[#3c6e71]' : theme === 'dark' ? 'hover:bg-[#051923]' : theme === 'night' ? 'hover:bg-[#0d1b2a]' : ''} duration-500 rounded-3xl p-5`}>
                            <div className="flex justify-center">
                                <img className=" h-20" src={icon3} alt="" />
                            </div>
                            <p className="mt-5 font-[Cinzel] text-justify">Preservation of Institutional Knowledge: As employees come and go, organizations risk losing valuable institutional knowledge. Knowledge sharing platforms help preserve this knowledge by capturing it in a format that can be passed on to new employees.</p>
                        </div>

                        <div className={`${theme === 'light' ? 'hover:bg-[#3c6e71]' : theme === 'dark' ? 'hover:bg-[#051923]' : theme === 'night' ? 'hover:bg-[#0d1b2a]' : ''} duration-500 rounded-3xl p-5`}>
                            <div className="flex justify-center">
                                <img className=" h-20" src={icon1} alt="" />
                            </div>
                            <p className="mt-5 font-[Cinzel] text-justify">Accessibility and Convenience: Knowledge sharing platforms provide a central repository where information, expertise, and resources are accessible at any time and from anywhere. This convenience is especially valuable for remote teams, global collaborations, or individuals seeking information on the go.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChoiceUs;