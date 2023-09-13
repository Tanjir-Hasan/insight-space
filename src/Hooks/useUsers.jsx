import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, isLoading: adminUserLoading, data: allUsers = [] } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/chat/allUsers`)
            return response.data;
        }
    })

    return [allUsers, refetch, adminUserLoading]
}

export default useUsers;