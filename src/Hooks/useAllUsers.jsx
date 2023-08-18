import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: () => axiosSecure.get("/allUsers")
            .then(data => {
                return data.data;
            })
    })
    return [users, refetch]
};

export default useAllUsers;