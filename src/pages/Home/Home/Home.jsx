import AdvancedCapabilities from "../AdvancedCapabilities/AdvancedCapabilities";
import Banner from "../Banner/Banner";
import ChoiceUs from "../ChoiceUs/ChoiceUs";
import CommunityGuidelines from "../CommunityGuidelines/CommunityGuidelines";
import ExploreContent from "../ExploreContent/ExploreContent";
import PeerToPeer from "../PeerToPeer/PeerToPeer";

import PopularPost from "../PopularPost/PopularPost";

import ContactForm from "../Support/ContactForm";

import TopPosts from "../TopPosts/TopPosts";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TopPosts></TopPosts>

            <ExploreContent></ExploreContent>       

            <ExploreContent></ExploreContent>

            <ChoiceUs></ChoiceUs>
            <PeerToPeer></PeerToPeer>
            <AdvancedCapabilities></AdvancedCapabilities>
            <CommunityGuidelines></CommunityGuidelines>

            <PopularPost></PopularPost>
            <ContactForm></ContactForm>
          
        </> )

           
        
};

export default Home;

