import AdvancedCapabilities from "../AdvancedCapabilities/AdvancedCapabilities";
import Banner from "../Banner/Banner";
import ChoiceUs from "../ChoiceUs/ChoiceUs";
import CommunityGuidelines from "../CommunityGuidelines/CommunityGuidelines";
import ExploreContent from "../ExploreContent/ExploreContent";
import PeerToPeer from "../PeerToPeer/PeerToPeer";
import PopularPost from "../PopularPost/PopularPost";
import ContactForm from "../Support/ContactForm";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Testimonial from "../Testimonial/Testimonial";
import { Link } from "react-router-dom";
import GoogleTranslator from "../../../components/GoogleTranslator";
import Membership from "../Membership/Membership";




const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PopularPost></PopularPost>
            <ExploreContent></ExploreContent>
            <FeaturedPosts></FeaturedPosts>
            <ChoiceUs></ChoiceUs>
            <PeerToPeer></PeerToPeer>
            <AdvancedCapabilities></AdvancedCapabilities>
            <Membership></Membership>
            <CommunityGuidelines></CommunityGuidelines>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
            <div className="flex justify-between w-10/12 mx-auto my-5">
                <GoogleTranslator />
                <Link to="/group-conversations">
                    <img src="https://i.ibb.co/LtKQ9c9/send-1.png" alt="send-image"
                        className="h-16" />
                </Link>
            </div>
            {/* <div className="">
                <Link to="/group-conversations">
                    <img
                        src="https://i.ibb.co/tQvLsdd/send.png"
                        alt="send-image"
                        className="h-16"
                    />
                </Link>
            </div> */}
        </>)



};

export default Home;

