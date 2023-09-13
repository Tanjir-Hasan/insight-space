import { useContext } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import LinkedInProfile from "./LinkedInProfile";

const ViewProfile = () => {
  const { info } = useAuth();
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="w-full md:w-3/4 px-3 md:px-0 mx-auto">
        <div>
          <div className="py-10">
            {/* <ViewMyProfile></ViewMyProfile> */}
            <LinkedInProfile></LinkedInProfile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
