import { useContext } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import LinkedInProfile from "./LinkedInProfile";

const ViewProfile = () => {

  const { info } = useAuth();

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <div className="w-11/12 mx-auto">
        <div className="py-5">
          <LinkedInProfile></LinkedInProfile>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
