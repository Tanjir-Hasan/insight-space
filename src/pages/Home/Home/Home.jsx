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
import MemberShips from "../Membership/MemberShips";
import VideoUpload from "../../NewsFeed/VideoUpload/VideoUpload";
import SSLPayment from "../../Shared/PaidMember/SSLPayment/SSLPayment/SSLPayment";
import Footer from "../../Shared/Footer/Footer";
import useTitle from "../../../Hooks/useTitle";



const Home = () => {

    useTitle('Home');
    
    return (
        <>
            <Banner></Banner>
            <PopularPost></PopularPost>
            <ExploreContent></ExploreContent>
            <ChoiceUs></ChoiceUs>
            <PeerToPeer></PeerToPeer>
            <AdvancedCapabilities></AdvancedCapabilities>
            <MemberShips></MemberShips>
            <CommunityGuidelines></CommunityGuidelines>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </>)



};

export default Home;

