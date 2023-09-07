import usePosts from "../../../../Hooks/usePosts";
import AboutMe from "./AboutMe";
import BlogSection from "./BlogSection";
import CoverPhoto from "./CoverPhoto";
import Education from "./Education";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";
import UserConnections from "./UserConnections";

const LinkedInProfile = () => {

  return (
    <>
      <div className="flex gap-5">
        <div className="w-full lg:w-10/12">
          <div className="">
            <CoverPhoto />
          </div>
          <div className="">
            <div className="flex justify-center items-center gap-5 mb-6 py-5  px-8 shadow-[0px_0px_15px_0px_#84a98c] rounded-b-2xl">
              <div className="flex flex-col md:flex-row justify-start md:items-center md:gap-8 w-1/2">
                <ProfilePicture />
                <ProfileInfo />
              </div>
              <div className="w-1/2">
                <Education />
              </div>
            </div>
            <div className="text-justify my-6 p-8 shadow-[0px_0px_15px_0px_#84a98c] rounded-2xl">
              <AboutMe />
            </div>
            <div className="my-6 p-8 shadow-[0px_10px_35px_0px_#84a98c] rounded-2xl">
              <BlogSection />
            </div>
          </div>
        </div>
        <div className="w-3/12 shadow-[0px_0px_15px_0px_#84a98c] rounded-2xl p-4 mb-6 hidden lg:block">
          <UserConnections />
        </div>
        
      </div>
    </>
  );
};

export default LinkedInProfile;
