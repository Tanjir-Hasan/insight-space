import useAuth from "./UseAuth";
import usePosts from "./usePosts";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useBookMarks = () => {
    const { user } = useAuth();
    const [posts] = usePosts();
    const [axiosSecure] = useAxiosSecure();
    const [bookMarks, setBookMarks] = useState([]);
    const [reload, setReload] = useState(false);
    const url = `https://insight-space-server.vercel.app/book-marks?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(data => {
                const postId = data.data?.map(id => id.postId)
                const bookmarks = posts?.filter(p => postId?.includes(p._id))
                setBookMarks(bookmarks)
            })
    }, [url, reload])
    return [bookMarks, reload, setReload]
};

export default useBookMarks;