import { Link } from "react-router-dom";
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
            <div className="p-20 text-2xl font-bold">
                <span>For apply as to be a instructor </span>
                <Link to="/instructor-payment" className="underline text-blue-700">Go here</Link>
            </div>
            {/* display all instructors  */}
            <div className="p-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    instructors?.map(i => <AllInstructorsCard key={i._id} instructor={i}></AllInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default AllInstructor;