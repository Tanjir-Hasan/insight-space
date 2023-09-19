import { Link } from "react-router-dom";
import AllInstructorsCard from "./AllInstructorsCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Button from "../../../components/Button";

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
            <div className="md:p-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    instructors && instructors?.map(i => <AllInstructorsCard key={i._id} instructor={i.instructorData}></AllInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default AllInstructor;