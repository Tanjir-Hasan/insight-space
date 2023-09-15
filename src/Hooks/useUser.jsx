import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useUser = () => {
    const { user } = useAuth()
    const { refetch, data: userDetails } = useQuery({
        queryKey: ['userDetails'],
        queryFn: () => axios.get(`${import.meta.env.VITE_base_URL}/users?email=${user?.email}`)
            .then(data => {
                return data.data;
            })
    })
    return [userDetails, refetch]
};

export default useUser;