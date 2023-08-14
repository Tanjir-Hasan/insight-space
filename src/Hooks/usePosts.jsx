import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../StateManagment/Posts/postSlice";

const usePosts = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts)
    const dispatch = useDispatch();
    const { refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () => dispatch(fetchPosts())
    })
    return [posts, refetch, isLoading, error]
};

export default usePosts;