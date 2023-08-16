import useUser from "../../../../Hooks/useUser";



const ViewMyProfile = () => {

   
   const [userDetails] = useUser();
   const {displayName, photoURL, email, _id, date} = userDetails;
   console.log(userDetails)
    
    return (
        <div className="md:flex gap-5 border p-5 items-center ">
            <div className="grid items-center gap-5">
                <img className="w-48 h-48 rounded-full mx-auto" src={photoURL} alt="" />
                <button className="border border-[#84a98c]  text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-white transition duration-300 ease-in-out">Edit Profile</button>
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
                    <span className="font-semibold">{date}</span>
                </p>

            </div>

        </div>
    );
};

export default ViewMyProfile;