import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useBlog = () => {
    const [axiosSecure] = useAxiosSecure();
    const url = "/blog";
    const { data: blogs, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => axiosSecure.get(url)
            .then(data => {
                return data.data
            })
    })
    return [blogs, refetch]
};

export default useBlog;