import {  Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useAuth();

    const location = useLocation();

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (user) {
        return children;
    }

    <Navigate to="/login" redirect></Navigate>
};

export default PrivateRoute;