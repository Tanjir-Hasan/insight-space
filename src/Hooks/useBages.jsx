import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useBages = () => {
    const [memberBages, setMemberBages] = useState([])
    const url = "https://insight-space-server.onrender.com/membership-bages"
    useEffect(() => {
        axios.get(url)
            .then(data => setMemberBages(data.data))
    }, [url])
    return [memberBages]
};

export default useBages;