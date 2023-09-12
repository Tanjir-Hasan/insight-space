import useAuth from "./UseAuth";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useQuizResult = () => { 
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [quizResult, setQuizeResult] = useState([]);
    const [mockTest, setMockTest] = useState([])
    const [modelTest, setModelTest] = useState([])
    const [reload, setReload] = useState(false);


    const url = `/exam-test?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(data => {   
                const mockData = data?.data?.slice(0, 10).filter(mock => mock.examName === 'Mock Test') 
                setMockTest(mockData)
                const modelTestData = data?.data?.slice(0, 10).filter(model => model.examName === 'Model Test') 
                setModelTest(modelTestData)
                setQuizeResult(data.data.slice(0, 10))                   
                setReload(true)          
            })
            .catch(err => console.log(err.message))
    }, [url, reload])
    return [quizResult, mockTest, modelTest, reload, setReload]
};

export default useQuizResult;