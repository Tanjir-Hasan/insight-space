import useAuth from "./UseAuth";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useQuizResult = () => {
    
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [quizResult, setQuizeResult] = useState([]);
    const [reload, setReload] = useState(false);


    const url = `/exam-test?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(data => {    
                setQuizeResult(data.data)                   
                setReload(true)          
            })
            .catch(err => console.log(err.message))
    }, [url, reload])
    return [quizResult, reload, setReload]
};

export default useQuizResult;