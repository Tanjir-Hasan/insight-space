import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return <h2>Loading...</h2>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" replace ></Navigate>
};

export default AdminRoute;