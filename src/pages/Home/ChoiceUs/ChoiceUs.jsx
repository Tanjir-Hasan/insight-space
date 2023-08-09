import icon1 from "../../../assets/images/icons/sun (1).png"
import icon2 from "../../../assets/images/icons/reflect.png"
import icon3 from "../../../assets/images/icons/sun.png"
const ChoiceUs = () => {
    return (
        <>
            <div className="Insight-space justify-center items-center w-11/12 mx-auto mt-20 mb-20">
                <div className="grid md:grid-cols-2 bg-stone-200 rounded-lg text-black border-8 border-x-stone-400">
                    <div className="flex items-center justify-center  w-5/6 drop-shadow-lg backdrop-blur-sm bg-emerald/80">
                        <div className="">
                            <h1 className="text-6xl mb-5 mt-10 text-stone-700 font-bold ">Choice Us</h1>
                            <p className="mb-5 font-sans text-stone-700 text-2xl">Cultivating Collective Wisdom: Empowering Minds Through <br></br> a Dynamic Knowledge Sharing  Platform for Seamless <br></br>Collaboration, Continuous Learning, and Innovation</p>
                            <button className=" bg-white text-black font-bold px-3 py-2 rounded-sm">Sign Up</button>

                        </div>
                    </div>

                    {/* <!-- 3 Banner --> */}
                    <div className="relative py-24">

                        {/* <!-- banner middle card --> */}
                        <div className=" z-10 absolute top-56 md:-left-20 w-5/6 drop-shadow-lg backdrop-blur-sm bg-emerald/30">
                            <div className=" relative bg-[#022b3a] h-60 rounded-lg text-black flex px-5 items-center backdrop-blur-sm bg-white/80 ">
                                <div className="absolute -top-5 -left-5">
                                <img className="w-20  h-20" src={icon3}></img>
                                </div>
                                <div>
                                    <p className="mb-5 font-sans text-black font-semibold">Preservation of Institutional Knowledge: As employees come and go, organizations risk losing valuable institutional knowledge. Knowledge sharing platforms help preserve this knowledge by capturing it in a format that can be passed on to new employees.</p>

                                </div>
                            </div>
                        </div>


                        {/* <!-- banner top card --> */}

                        <div className=" left-20 md:left-32 w-2/3 drop-shadow-xl backdrop-blur-sm bg-tael/30 ">
                            <div className=" relative bg-teal-500 h-56 rounded-lg text-black flex px-5 item-center  backdrop-blur-sm bg-white/80">
                                <div className="absolute -top-5 -left-5">
                                    <img className="w-12  h-12" src={icon2}></img>
                                </div>
                                <div>
                                    <p className="mt-5 font-sans text-black font-semibold">Feedback and Continuous Improvement: Users can seek feedback on their work, ideas, or projects, leading to refinement and improvement. Constructive criticism and suggestions can be shared in a supportive environment.</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- banner bottom card --> */}
                        <div className=" left-20 mt-20 md:left-52 w-2/3 drop-shadow-xl  backdrop-blur-sm bg-indigo/30">
                            <div className=" relative bg-indigo-400 shadow-indigo-900 h-56 rounded-lg text-black flex px-5 item-center backdrop-blur-sm bg-white/80">
                                <div className="absolute -bottom-10 -right-5">
                                    <img className="w-16  h-16" src={icon1}></img>
                                </div>
                                <div>
                                    <p className="mt-20  font-sans text-black font-semibold">Accessibility and Convenience: Knowledge sharing platforms provide a central repository where information, expertise, and resources are accessible at any time and from anywhere. This convenience is especially valuable for remote teams, global collaborations, or individuals seeking information on the go.</p>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>
            </div>
        </>
    );
};

export default ChoiceUs;