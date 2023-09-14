import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePremiumUser = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isPremiumUser, isLoading: isPremiumUserLoading } = useQuery({
        queryKey: ['isPremiumUsers', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (!loading && user?.email) {
                const data = await axiosSecure.get(`/users/premiumUser/${user?.email}`);
                return data.data.premiumUser;
            }
        }
    })
    return [isPremiumUser, isPremiumUserLoading]
};

export default usePremiumUser;