import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./UseAuth";

const useMyFriends = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: friends, refetch } = useQuery({
        queryKey: ["friends", user?.email],
        queryFn: () => axiosSecure.get(`/myFriends?email=${user?.email}`)
            .then(data => {
                return data.data;
            })
    })
  return [friends , refetch]
};
export default useMyFriends;