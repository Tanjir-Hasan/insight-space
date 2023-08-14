import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (user) {
        return children;
    }
    <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;