import Swal from "sweetalert2";
import useInstructor from "../Hooks/useInstructor";
import usePremiumUser from "../Hooks/usePremiumUser";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Loading";

const PremiumRoute = ({ children }) => {
    const { user, loading } = useAuth();

    const [isPremiumUser, isPremiumUserLoading] = usePremiumUser();
    const [isInstructor, isInstructorLoading] = useInstructor();

    const navigate = useNavigate();

    if (loading || isInstructorLoading || isPremiumUserLoading) {
        return <Loading></Loading>
    }


    if (user && isPremiumUser || isInstructor) {
        return children
    }


    if (!isPremiumUser || !isInstructor) {
        Swal.fire({
            title: 'This Features only for premium users , are you want to be a premium user ?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                navigate("/instructor-payment")
            } else if (result.isDenied) {
                navigate("/mock-test")
            }
        })
    }

};

export default PremiumRoute;