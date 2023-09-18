import { useContext } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import LinkedInProfile from "./LinkedInProfile";

const ViewProfile = () => {
  const { info } = useAuth();
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="w-11/12  mx-auto">
        <div>
          <div className="py-5">
            {/* <ViewMyProfile></ViewMyProfile> */}
            <LinkedInProfile></LinkedInProfile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
