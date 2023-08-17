import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (!loading && user?.email) {
                const res = await axiosSecure.get(`/users/admin/${user?.email}`);
                return res.data.admin;
            }
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;