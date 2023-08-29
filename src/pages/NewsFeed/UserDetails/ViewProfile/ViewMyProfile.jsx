import moment from "moment";
import useUser from "../../../../Hooks/useUser";
import OutlineButton from "../../../../components/outlineButton";



const ViewMyProfile = () => {
    const [userDetails] = useUser();
    const { displayName, photoURL, email, _id, date } = userDetails;
    

    return (
        <div className="md:flex gap-5 border p-5 items-center ">
            <div className="grid items-center gap-5">
                <img className="w-48 h-48 rounded-full mx-auto" src={photoURL} alt="" />
                {/* Add Outline button component */}
                <OutlineButton>Edit Profile</OutlineButton>
            </div>
            <div className="text-2xl">
                <h4 className="grid">
                    <span className="text-xl" >User ID:</span>
                    <span className="font-semibold">{_id}</span>
                </h4>
                <h2 className="grid mt-4">
                    <span className="text-xl">Name:</span>
                    <span className="font-semibold">{displayName}</span>
                </h2>
                <h3 className="grid mt-4">
                    <span className="text-xl">Email Address:</span>
                    <span className="font-semibold">{email}</span>
                </h3>
                <p className="grid mt-4">
                    <span className="text-xl">Join Date:</span>
                    <span className="font-semibold">{moment(date).format('lll')}</span>
                </p>

            </div>

        </div>
    );
};

export default ViewMyProfile;