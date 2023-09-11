import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
    const {user} = useAuth()
    const { refetch, data: userDetails } = useQuery({
        queryKey: ['userDetails'],
        queryFn: () => axios.get(`https://insight-space-server.vercel.app/users?email=${user?.email}`)
            .then(data => {
                return data.data;
            })
    })
    return [userDetails, refetch]
};

export default useUser;