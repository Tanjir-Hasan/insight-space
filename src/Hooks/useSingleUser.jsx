import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";


const useSingleUser = () => {
    const {user, loading} = useAuth();
    const {data: singleUser} = useQuery({
        queryKey: ['singleUser', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const result = await axios.get(`http://localhost:5000/chat/singleUser/${user?.email}`);
            return result.data;
        }
    })
    return [singleUser]

}
export default useSingleUser;