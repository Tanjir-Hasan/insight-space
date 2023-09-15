import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructorQuiz = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: instructorQuiz, refetch } = useQuery({
        queryKey: ["instructorQuiz", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructorQuiz?email=${user?.email}`);
            return res.data;
        }
    })
    return [instructorQuiz, refetch]
};

export default useInstructorQuiz;