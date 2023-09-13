import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (!loading && user?.email) {
                const data = await axiosSecure.get(`/users/instructor/${user?.email}`);
                return data.data.instructor;
            }
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;