import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useBages = () => {
    const [memberBages, setMemberBages] = useState([])
    const url = "http://localhost:5000/membership-bages"
    useEffect(() => {
        axios.get(url)
            .then(data => setMemberBages(data.data))
    }, [url])
    return [memberBages]
};

export default useBages;