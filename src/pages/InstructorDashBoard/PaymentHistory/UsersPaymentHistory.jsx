import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UsersPaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: students = [], refetch } = useQuery({
        queryKey: ["students"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users-payment");
            return res.data;
        }
    })
    console.log(students);
    
    return (
        <div>

        </div>
    );
};

export default UsersPaymentHistory;