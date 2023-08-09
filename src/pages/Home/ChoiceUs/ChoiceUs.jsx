import icon1 from "../../../assets/images/icons/sun (1).png";
import icon2 from "../../../assets/images/icons/reflect.png";
import icon3 from "../../../assets/images/icons/sun.png";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
const ChoiceUs = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={`${theme === 'dark' ? 'dark' : ''}`}>

<div className="Insight-space justify-center items-center w-11/12 mx-auto">

    <div className="lg:flex justify-between rounded-lg">

        <div className="flex items-center justify-center md:w-10/12 drop-shadow-lg  bg-emerald/80">

            <div className="space-y-5">

                <h1 className="text-4xl mb-5 mt-10 text-stone-700 font-bold font-[Poppins]">Why Choose Us?</h1>
                <ul className="font-[Cinzel]">
                    <li className="list-[upper-roman] list-inside">Cultivating Collective Wisdom: Empowering Minds Through.</li>
                    <li className="list-[upper-roman] list-inside">A Dynamic Knowledge Sharing  Platform for Seamless.</li>
                    <li className="list-[upper-roman] list-inside">Collaboration, Continuous Learning, and Innovation.</li>
                </ul>

                <div className="md:w-8/12 md:mx-0 w-10/12 mx-auto">
                    <Link to="/login">
                        <Button heading="Sign-up"></Button>
                    </Link>
                </div>

            </div>

        </div>

        {/* <!-- 3 Banner --> */}
        <div className="relative w-10/12 py-24">

            {/* <!-- banner middle card --> */}
            <div className="z-10 absolute top-52 md:-left-20 w-full md:w-5/6">
                <div className="relative bg-[#022b3a] h-52 rounded-lg text-black flex px-5 items-center bg-white/80">
                    <div className="absolute -top-8 -left-8">
                        <img className="w-20 h-20" src={icon3}></img>
                    </div>
                    <div>
                        <p className="mb-5 font-[Cinzel] text-justify">Preservation of Institutional Knowledge: As employees come and go, organizations risk losing valuable institutional knowledge. Knowledge sharing platforms help preserve this knowledge by capturing it in a format that can be passed on to new employees.</p>

                    </div>
                </div>
            </div>


            {/* <!-- banner top card --> */}

            <div className="md:ml-28 w-full md:w-5/6">
                <div className=" relative h-52 rounded-lg text-black flex px-5 item-center bg-white/80">
                    <div className="absolute -top-5 -left-5">
                        <img className="w-12 h-12" src={icon2}></img>
                    </div>
                    <div>
                        <p className="mt-5 font-[Cinzel] text-justify">Feedback and Continuous Improvement: Users can seek feedback on their work, ideas, or projects, leading to refinement and improvement. Constructive criticism and suggestions can be shared in a supportive environment.</p>
                    </div>
                </div>
            </div>

            {/* <!-- banner bottom card --> */}
            <div className="md:-ml-40 w-full md:w-5/6">
                <div className="relative bg-[#022b3a] h-52 rounded-lg text-black flex px-5 items-center bg-white/80">
                    <div className="absolute -bottom-12 -right-6">
                        <img className="w-16  h-16" src={icon1}></img>
                    </div>
                    <div>
                        <p className="mt-36 font-[Cinzel] text-justify">Accessibility and Convenience: Knowledge sharing platforms provide a central repository where information, expertise, and resources are accessible at any time and from anywhere. This convenience is especially valuable for remote teams, global collaborations, or individuals seeking information on the go.</p>
                    </div>
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