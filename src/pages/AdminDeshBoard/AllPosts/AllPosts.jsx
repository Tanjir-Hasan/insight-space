import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { FaHistory } from "react-icons/fa";
import moment from "moment";

const AllPosts = () => {
    const [axiosSecure] = useAxiosSecure();
    const { theme } = useContext(ThemeContext);
    const { data: posts, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: () => axiosSecure.get("/allPosts")
            .then(data => {
                return data.data
            })
    })
    return (
        <div className="w-1/3 mx-auto py-4">
            {
                posts && posts.map(p => <div key={p._id}
                    className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} my-6 rounded-lg border border-[#84a98c]`}
                >
                    <div className="p-4">
                        <div className="flex space-x-2 mb-4">
                            <img src={p.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="text-lg font-semibold pt-1">{p.userName}</p>
                                <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(p.date).startOf('hour').fromNow()}</h6>
                            </div>
                        </div>
                        <button className="border-2 border-[#84a98c] text-[#84a98c] hover:bg-[#84a98c] hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out">delete post</button>
                        <p>{p.text}</p>
                    </div>
                    <div>
                        {
                            p.imgURL && <img src={p.imgURL} className="w-full max-h-[600px]" alt="blog image" />
                        }
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllPosts; 