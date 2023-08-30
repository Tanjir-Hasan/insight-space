import moment from "moment";
import useUser from "../../../Hooks/useUser";

const AdminHome = () => {
    const [userDetails] = useUser();
    const { photoURL, _id, displayName, email, date } = userDetails;

    return (
        <div className="border-2 border-spacing-14 rounded-xl shadow-xl border-[#84a98c] shadow-red-50 my-20 py-8 px-8">
            <div className="lg:flex justify-start">
                <div className="space-y-3 p-4 lg:w-1/2">
                    <div>
                        <img style={{ borderRadius: '0 80px 0px 80px' }} className="w-72 h-80" src={photoURL} alt="user photo" />
                    </div>
                    <div className="py-4 space-y-3">
                        <p className="text-3xl font-semibold">Hi
                            <span className="uppercase font-bold text-4xl text-yellow-600"> {displayName}</span></p>
                        <h2 className="text-3xl font-semibold">Welcome to Your Dashboard</h2>
                    </div>
                </div>
                <div className="lg:w-1/2 p-4">
                    <p className="text-center text-4xl font-semibold border-b-4 pb-2 border-[#84a98c]">Your Details</p>
                    <div className="md:text-2xl text-base mt-5">
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
            </div>
        </div>
    );
};

export default AdminHome;