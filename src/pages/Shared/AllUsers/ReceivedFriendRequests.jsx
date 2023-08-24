import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ReceivedFriendRequests = ({ currentUserEmail }) => {

    const [receivedRequests, setReceivedRequests] = useState([]);

    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        async function fetchReceivedRequests() {
            try {
                const response = await axiosSecure.get(`/friend-requests/received?receiverId=${currentUserEmail}`);
                setReceivedRequests(response.data);
            } catch (error) {
                console.error('Error fetching received friend requests:', error);
            }
        }

        fetchReceivedRequests();
    }, [currentUserEmail]);

    const handleAcceptRequest = async (requestId) => {
        try {
            await axiosSecure.put(`/friend-requests/accept/${requestId}`);
            // Update UI or fetch updated received requests
        } catch (error) {
            console.error('Error accepting friend request:', error);
        }
    };

    const handleDenyRequest = async (requestId) => {
        try {
            // Send a DELETE request to deny the friend request
            await axiosSecure.delete(`/friend-requests/${requestId}`);
            // Update UI or fetch updated received requests
        } catch (error) {
            console.error('Error denying friend request:', error);
        }
    };

    return (
        <div>
            <h2>Received Friend Requests</h2>
            <ul>
                {receivedRequests.map((request) => (
                    <li key={request._id}>
                        From: {request.sender.email} - Status: {request.status}
                        <button onClick={() => handleAcceptRequest(request._id)}>Accept</button>
                        <button onClick={() => handleDenyRequest(request._id)}>Deny</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReceivedFriendRequests;
