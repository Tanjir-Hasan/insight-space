
const ChoiceUs = () => {
    return (
        <>
            <div className="Insight-space justify-center items-center w-11/12 mx-auto">
                <div className="grid md:grid-cols-2 bg-white  rounded-lg text-black">
                    <div className="flex items-center justify-center">
                        <div className="">
                            <h1 className="text-3xl mb-5 mt-10">InSight Space</h1>
                            <p className="mb-5 font-sans">MindShare Hub: Connecting Wisdom, Sharing Knowledge</p>
                            <button className=" bg-orange-400 text-white font-bold px-3 py-2 rounded-sm">Sign Up</button>

                        </div>
                    </div>

                    {/* <!-- 3 Banner --> */}
                    <div className="relative py-24">

                        {/* <!-- banner middle card --> */}
                        <div className=" z-10 absolute top-52 md:-left-10 w-3/4">
                            <div className=" relative bg-[#022b3a] h-60 rounded-lg text-black flex px-5 items-center ">
                                {/* <div className="absolute -top-5 -left-5">
                        <img src={BG3}></img>
                    </div> */}
                                <div>
                                    <p className="mb-5 font-sans text-white font-bold">Where Knowledge Finds a Common Ground</p>

                                </div>
                            </div>
                        </div>

                        {/* <!-- banner top card --> */}

                        <div className=" left-20 md:left-32 opacity-40 w-3/4">
                            <div className=" relative bg-cyan-500 h-56 rounded-lg text-black flex px-5 item-center">
                                {/* <div className="absolute -top-5 -left-5">
                    <img src={BG3}></img>
                    </div> */}
                                <div>
                                    <p className="mb-5 font-sans text-white font-bold">Where Knowledge Finds a Common Ground</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- banner bottom card --> */}
                        <div className=" left-20 mt-10 md:left-32 opacity-40 w-3/4">
                            <div className=" relative bg-indigo-400 h-56 rounded-lg text-black flex px-5 item-center">
                                {/* <div className="absolute -top-5 -left-5">
                    <img src={BG3}></img>
                    </div> */}
                                <div>
                                    <p className="mb-5 font-sans text-white font-bold">Where Knowledge Finds a Common Ground</p>
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