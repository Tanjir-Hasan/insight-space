import { useContext } from "react";
import useAuth from '../../../../Hooks/UseAuth';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import UserDetails from '../UserDetails';
import ViewMyProfile from "./ViewMyProfile";

const ViewProfile = () => {
    const { info } = useAuth();
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <div className="w-full md:w-3/4 px-3 md:px-0 mx-auto">
                <div>
                    <div className="py-10">
                        <ViewMyProfile></ViewMyProfile>
                    </div>
                    <div className="border border-spacing-4 pt-8">
                        {info && <UserDetails></UserDetails>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;