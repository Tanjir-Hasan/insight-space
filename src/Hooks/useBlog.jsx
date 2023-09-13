import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useBlog = () => {
    const [axiosSecure] = useAxiosSecure();
    const url = "/posts";
    const { data: blogs, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => axiosSecure.get(url)
            .then(data => {
                const findData = data?.data.filter(blog => blog.category === 'Blog')
                return findData;
            })
    })
    return [blogs, refetch]
};

export default useBlog;