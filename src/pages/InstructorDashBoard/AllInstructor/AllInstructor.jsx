import AllInstructorsCard from "./AllInstructorsCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axiosSecure.get("/all-instructors")
            return res.data;
        }
    })

    return (
        <div>
            {/* display all instructors  */}
            <div className="md:p-8 grid gap-4 grid-cols-1 md:grid-cols-2">
                {
                    instructors && instructors?.map(i => <AllInstructorsCard key={i._id} instructor={i.instructorData}></AllInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default AllInstructor;