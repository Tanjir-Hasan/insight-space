import Banner from "../Banner/Banner";
import ChoiceUs from "../ChoiceUs/ChoiceUs";

const Home = () => {
    return (
<<<<<<< HEAD
        <div className="Insight-space justify-center items-center mx-auto">
            <div className="grid md:grid-cols-2 gap-4 bg-white w-11/12 mx-auto rounded-lg text-black px-16">
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
                    <div className="z-10 absolute top-52 md: -left-10 w-3/4">
                        <div className=" relative bg-orange-300 h-60 rounded-lg text-black flex px-5 items-center ">
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
=======
        <>
            <Banner></Banner>
            <ChoiceUs></ChoiceUs>
            {/* another compo */}
        </>
>>>>>>> ee3e63a8fa508d9d61afa9a207a303f0a99bcde4
    );
};

export default Home;