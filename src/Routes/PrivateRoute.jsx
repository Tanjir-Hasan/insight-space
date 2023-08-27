import {  Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>
    }
    if (user) {
        return children;
    }else{
        return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
    }
};

export default PrivateRoute;