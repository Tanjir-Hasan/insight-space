import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./UseAuth";

const useUser = () => {
    const {user} = useAuth()
    const [userDetails, setUserDetails] = useState("")
    const url = `https://insight-space-server.vercel.app/users?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(data => setUserDetails(data.data))
    }, [url])
    return [userDetails]
};

export default useUser;