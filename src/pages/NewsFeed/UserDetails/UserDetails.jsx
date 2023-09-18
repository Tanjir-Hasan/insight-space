import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useBookMarks from "../../../Hooks/useBookMarks";
import OutlineButton from "../../../components/outlineButton";
import { useDispatch } from "react-redux";
import useMyPost from "../../../Hooks/useMyPost";
import { setBookMarks } from "../../../StateManagment/Posts/bookMarksSlice";
import { setMyPosts } from "../../../StateManagment/Posts/MyPostsSlice";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import useMyPayments from "../../../Hooks/useMyPayments";

const UserDetails = ({ userDetails }) => {

    const { theme } = useContext(ThemeContext);

    const [bookmarks] = useBookMarks();
    const [myPost] = useMyPost();
    const navigate = useNavigate();
    const { logOut } = useAuth();
    const dispatch = useDispatch();

    const [myPayments, bages] = useMyPayments();
    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
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

    const handleMyPosts = () => {
        dispatch(setMyPosts(myPost));
        dispatch(setBookMarks([]));
    }
    const handleBookmarks = () => {
        dispatch(setBookMarks(bookmarks));
        dispatch(setMyPosts([]));
    }

    return (
        <div className={`${theme}`}>

            {userDetails && <div className="p-2">

                <div className="text-center">
                    <div className="flex justify-center relative my-4">
                        {userDetails?.photoURL && <img className="w-20 h-20 rounded-full" src={userDetails?.photoURL} alt="user image" />}

                        {bages && <div className="absolute bottom-0 ml-10">
                            {
                                bages?.memberShip === 'Basic' ?
                                    (
                                        <img className='w-10 h-10 rounded-full' src="https://i.ibb.co/r0BMFDp/verified-green-512.webp" alt="" />
                                    )
                                    :
                                    bages?.memberShip === 'Pro' ?
                                        (
                                            <img className='w-12 h-10 rounded-full' src="https://i.ibb.co/3dzNwLw/download-1-removebg-preview.png" alt="" />
                                        )
                                        : " "
                            }
                        </div>}
                    </div>
                    <h2 className="text-lg font-bold uppercase">{userDetails?.displayName}</h2>
                    {
                        bages?.memberShip === 'Basic' ?
                            (<h2 className="text-green-700 font-bold">Gold Member</h2>)

                            :
                            bages?.memberShip === 'Pro' ?
                                (<h2>VIP Member</h2>)
                                : " "
                    }
                    <h2 className="text-lg font-semibold">User ID : {userDetails?._id}</h2>
                    <div className="flex justify-center my-4">
                        <Link to="/view-Profile">
                            {/* Add Outline button component */}
                            {/* <OutlineButton>View Profile</OutlineButton> */}
                            <button className={`${theme === "light" ? "outline-btn-light" : "outline-btn-dark-night"}`}>View Profile</button>
                        </Link>
                    </div>
                    <hr className="underline underline-offset-8"></hr>
                </div>

                <div className="my-4 ">

                    <Link to="/news-feed"> <button onClick={handleMyPosts} className={`${theme === "light" ? "secondary-button-light" : "secondary-button-dark-night"}`}>My posts </button></Link>

                    <Link to="/news-feed"><button onClick={handleBookmarks} className={`${theme === "light" ? "secondary-button-light" : "secondary-button-dark-night"}`}> Book Marks </button></Link>

                    <Link to="/payments-history"><button className={`${theme === "light" ? "secondary-button-light" : "secondary-button-dark-night"}`}> My Payments </button></Link>

                    <Link to="/instructor-payment"><button className={`${theme === "light" ? "secondary-button-light" : "secondary-button-dark-night"}`}>Premium service </button></Link>

                    <button onClick={handleLogOut} className={`${theme === "light" ? "secondary-button-light" : "secondary-button-dark-night"}`}>Log out</button>

                </div>

            </div>}

        </div>
    );
};

export default UserDetails;