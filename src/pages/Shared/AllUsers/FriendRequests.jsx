import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const FriendRequests = ({ currentUserEmail }) => {
    const [sentRequests, setSentRequests] = useState([]);
    const [receivedRequests, setReceivedRequests] = useState([]);

    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        async function fetchRequests() {
            try {
                const response = await axiosSecure.get(`/friend-requests?userEmail=${currentUserEmail}`);
                setSentRequests(response.data.sentRequests);
                setReceivedRequests(response.data.receivedRequests);
            } catch (error) {
                console.error('Error fetching friend requests:', error);
            }
        }
        fetchRequests();
    }, [currentUserEmail]);

    return (
        <div>
            <h2>Sent Friend Requests</h2>
            <ul>
                {sentRequests.map((request) => (
                    <li key={request._id}>
                        To: {request.receiver.email} - Status: {request.status}
                    </li>
                ))}
            </ul>

            <h2>Received Friend Requests</h2>
            <ul>
                {receivedRequests.map((request) => (
                    <li key={request._id}>
                        From: {request.sender.email} - Status: {request.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendRequests;
