import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useSingleUser from "./useSingleUser";


const useConversations = () => {
    const [singleUser] = useSingleUser();

    const {
        refetch,
        isLoading: adminUserLoading,
        data: conversationData = []
    } = useQuery({
        queryKey: ['conversationData', singleUser?._id],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/conversation/${singleUser?._id}`)
            // console.log("admin all classes",response.data);
            return response.data;
        }
    })


    return [
        conversationData,
        refetch,
        adminUserLoading
    ]
}

export default useConversations;