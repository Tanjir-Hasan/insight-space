import { useContext } from "react";
import useAuth from '../../../../Hooks/UseAuth';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import Categories from '../../Categories/Categories';
import NewsForm from '../../NewsForm/NewsForm';
import UserDetails from '../UserDetails';
import ViewMyProfile from "./ViewMyProfile";

const ViewProfile = () => {

    const { info } = useAuth();
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <div className="min-h-screen w-10/12 mx-auto ">
                <div className="grid gap-5  md:justify-items-end sm:grid-cols-1 lg:grid-cols-2 w-full">

                    <div>
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