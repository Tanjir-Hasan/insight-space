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



const Home = () => {
    return (
        <>
            <Banner></Banner>
            <FeaturedPosts></FeaturedPosts>            
            <PopularPost></PopularPost>
            <ExploreContent></ExploreContent>
            <ChoiceUs></ChoiceUs>
            <PeerToPeer></PeerToPeer>
            <AdvancedCapabilities></AdvancedCapabilities>
            <CommunityGuidelines></CommunityGuidelines>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
          
        </> )

           
        
};

export default Home;

