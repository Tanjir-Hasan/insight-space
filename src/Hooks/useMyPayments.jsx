import useAuth from "./UseAuth";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";



const useMyPayments = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [myPayments, setMyPayments] = useState([]);
    const [bages, setBages] = useState([]);
    const [reload, setReload] = useState(false);


    const url = `/payments-history?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(data => {    
                setMyPayments(data.data)       
                const findData = data.data?.find(pd => pd.email === user?.email)
                setBages(findData)    
                setReload(true)          
            })
    }, [url, reload])
    return [myPayments, bages, reload, setReload]



};

export default useMyPayments;