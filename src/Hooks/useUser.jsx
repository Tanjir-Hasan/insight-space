import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";

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