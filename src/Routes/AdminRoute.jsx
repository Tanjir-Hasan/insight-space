import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../components/Loading";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" replace ></Navigate>
};

export default AdminRoute;