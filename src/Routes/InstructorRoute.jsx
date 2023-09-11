import useAuth from "../Hooks/UseAuth";
import useInstructor from "../Hooks/useInstructor";
import Loading from "../components/Loading";

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor , isInstructorLoading] = useInstructor();

    if (loading || isInstructorLoading) {
        return <Loading></Loading>
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" replace ></Navigate>
};

export default InstructorRoute;