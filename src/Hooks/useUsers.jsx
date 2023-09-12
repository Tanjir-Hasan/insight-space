import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsers = () => {    

    const { refetch, isLoading : adminUserLoading, data:allUsers = []} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async ()=>{
            const response = await axios.get(`http://localhost:5000/chat/allUsers`)
            // console.log("admin all classes",response.data);
            return response.data;
        }
      })


      return [
        allUsers, 
        refetch,
        adminUserLoading
    ]
}

export default useUsers;