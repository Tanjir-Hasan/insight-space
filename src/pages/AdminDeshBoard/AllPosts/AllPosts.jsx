import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { FaHistory } from "react-icons/fa";
import moment from "moment";
import Swal from "sweetalert2";


const AllPosts = () => {
    const [axiosSecure] = useAxiosSecure();
    const [id, setId] = useState(null);
    const { theme } = useContext(ThemeContext);
    const { data: posts, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: () => axiosSecure.get("/allPosts")
            .then(data => {
                return data.data
            })
    })

    const handleDeletePost = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/post?id=${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'This Post hasbeen removed',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => console.log(err.message))

            }
        })
    }



    return (
        <div className="w-1/3 mx-auto py-4">
            {
                posts && posts.map(p => <div key={p._id}
                    className={`${theme === 'dark' ? 'dark' : 'bg-[#f0efeb]'} my-6 rounded-lg border border-[#84a98c]`}
                >
                    <div className="p-4">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img src={p.userPhoto} alt="user photo" className="w-12 h-12 rounded-full" />
                                <div className="mx-2">
                                    <p className="text-lg font-semibold pt-1">{p.userName}</p>
                                    <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>{moment(p.date).startOf('hour').fromNow()}</h6>
                                </div>
                            </div>
                            <button onClick={() => handleDeletePost(p._id)} className="border-2 border-[#84a98c] text-[#84a98c] hover:bg-[#84a98c] hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out">delete post</button>
                        </div>
                        <div className="my-4">
                            <span hidden={id === p._id}>{p.text?.slice(0, 300)}</span>
                            <span hidden={p.text?.length < 300}>
                                <span hidden={id !== p._id}>{p.text}</span>
                                <span hidden={id === p._id} onClick={() => setId(p._id)} className="underline underline-offset-4 ms-2 text-sm text-green-600">See More</span>
                                <span hidden={id !== p._id} onClick={() => setId(0)} className="underline underline-offset-4 ms-2 text-sm text-green-600">See Less</span>
                            </span>
                        </div>
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