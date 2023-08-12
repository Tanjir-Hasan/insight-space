import axios from "axios";
import useAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import usePosts from "./usePosts";


const useBookMarks = () => {
    const { user } = useAuth();
    const [posts] = usePosts();

    const url = `https://insight-space-server.vercel.app/book-marks?email=${user?.email}`
    const { refetch, data } = useQuery({
        queryKey: ['bookmarks', user?.email],
        queryFn: async () => await axios.get(url)
            .then(data => {
                return data.data
            })
    })
    const postId = data?.map(id => id.postId)
    const bookmarks = posts?.filter(p => postId?.includes(p._id))
    // console.log(bookmarks);
    return [bookmarks]
};

export default useBookMarks;