import Banner from "../Banner/Banner";
import ChoiceUs from "../ChoiceUs/ChoiceUs";
import CommunityGuidelines from "../CommunityGuidelines/CommunityGuidelines";
import ExploreContent from "../ExploreContent/ExploreContent";
import OurTeam from "../TeamMembers/OurTeam";

import TopPosts from "../TopPosts/TopPosts";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TopPosts></TopPosts>
            <ExploreContent></ExploreContent>
            <ChoiceUs></ChoiceUs>         
            <CommunityGuidelines></CommunityGuidelines>
          
        </> )
};

export default Home;