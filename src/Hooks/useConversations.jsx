import { useQuery } from "@tanstack/react-query";
import useUser from "./useUser";
import useAxiosSecure from "./useAxiosSecure";


const useConversations = () => {
    const [userDetails] = useUser();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, isLoading: adminUserLoading, data: conversationData = [] } = useQuery({
        queryKey: ['conversationData', userDetails?._id],
        queryFn: async () => {
            const response = await axiosSecure.get(`/conversation/${userDetails?._id}`)
            return response.data;
        }
    }) 

    return [conversationData, refetch, adminUserLoading]
}

export default useConversations;