import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
    const {user} = useAuth()
    // const [userDetails, setUserDetails] = useState({})
    // const url = `https://insight-space-server.vercel.app/users?email=${user?.email}`
    // useEffect(() => {
    //     axios.get(url)
    //         .then(data => setUserDetails(data.data))
    // }, [url])
    // return [userDetails]
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