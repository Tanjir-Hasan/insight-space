import { Link, useNavigate } from "react-router-dom";
import useUser from "../../../Hooks/useUser";
import useAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import useBookMarks from "../../../Hooks/useBookMarks";

const UserDetails = () => {
    const [userDetails] = useUser();
    const [data] = useBookMarks();
    const navigate = useNavigate();
    const { logOut } = useAuth();
    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(result => {
                        Swal.fire(
                            'Logged Out!',
                            'Your Account has been Logged out .',
                            'success'
                        )
                        navigate("/")
                    })
                    .catch(error => { })
            }
        })
    }

    return (
        <div className="p-2">
            {userDetails && <div>
                <div className="text-center">
                    <div className="flex justify-center my-4">
                        {userDetails?.photoURL && <img className="w-20 h-20 rounded-full" src={userDetails?.photoURL} alt="user image" />}
                    </div>
                    <h2 className="text-lg font-bold uppercase">{userDetails?.displayName}</h2>
                    <h2 className="text-lg font-semibold">User ID : {userDetails?._id}</h2>
                    <div className="flex justify-center my-4">
                        <button className="border border-[#84a98c] text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-white transition duration-300 ease-in-out"><Link>View Profile</Link></button>
                    </div>
                    <hr className="underline underline-offset-8"></hr>
                </div>
                <div className="my-4 space-y-2">
                    <button className="w-full border-b-4 border[#84a98c] text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-white transition duration-300 ease-in-out">My posts </button>
                    <button className="w-full border-b-4 border[#84a98c] text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-white transition duration-300 ease-in-out"> Book Marks </button>
                    <button onClick={handleLogOut} className="w-full border-b-4 border[#84a98c] text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-white transition duration-300 ease-in-out">Log out</button>
                </div>
            </div>}
        </div>
    );
};

export default UserDetails;