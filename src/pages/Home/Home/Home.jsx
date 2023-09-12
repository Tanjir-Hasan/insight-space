import AdvancedCapabilities from "../AdvancedCapabilities/AdvancedCapabilities";
import Banner from "../Banner/Banner";
import ChoiceUs from "../ChoiceUs/ChoiceUs";
import CommunityGuidelines from "../CommunityGuidelines/CommunityGuidelines";
import ExploreContent from "../ExploreContent/ExploreContent";
import PeerToPeer from "../PeerToPeer/PeerToPeer";
import PopularPost from "../PopularPost/PopularPost";
import ContactForm from "../Support/ContactForm";
import Testimonial from "../Testimonial/Testimonial";
import { Link } from "react-router-dom";
import Membership from "../Membership/Membership";
import VideoUpload from "../../NewsFeed/VideoUpload/VideoUpload";
import SSLPayment from "../../Shared/PaidMember/SSLPayment/SSLPayment/SSLPayment";
import Footer from "../../Shared/Footer/Footer";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PopularPost></PopularPost>
            <ExploreContent></ExploreContent>
            <ChoiceUs></ChoiceUs>
            <PeerToPeer></PeerToPeer>

            <Link to="/group-conversations">
                <img src="https://i.ibb.co/bzywHzS/mail.png" alt="" className="fixed top-[calc(100vh - 0)] bottom-2 right-10 w-12" />
            </Link>

            <AdvancedCapabilities></AdvancedCapabilities>
            <Membership></Membership>
            <CommunityGuidelines></CommunityGuidelines>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </>)



};

export default Home;

