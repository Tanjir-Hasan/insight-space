import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const FriendsSection = () => {
    const [receivedRequests, setReceivedRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [axiosSecure] = useAxiosSecure();

    const fetchReceivedRequests = async () => {
        try {
            const response = await axiosSecure.get('/friend-requests/received');
            setReceivedRequests(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching received friend requests:', error);
            setIsLoading(false);
        }
    };

    const handleAcceptRequest = async (requestId) => {
        try {
            await axiosSecure.put(`/friend-requests/accept/${requestId}`);
            fetchReceivedRequests();
        } catch (error) {
            console.error('Error accepting friend request:', error);
        }
    };

    useEffect(() => {
        fetchReceivedRequests();
    }, [axiosSecure]);

    return (
        <div>
            <h2>Friends Section</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : receivedRequests.length > 0 ? (
                <ul>
                    {receivedRequests.map(request => (
                        <li key={request._id}>
                            {request.sender} sent you a friend request.
                            <button onClick={() => handleAcceptRequest(request._id)}>Accept</button>
                            {/* You can also add a "Deny" button here */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No friend requests received.</p>
            )}
        </div>
    );
};

export default FriendsSection;
