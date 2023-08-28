import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const FriendsAndSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchEmail, setSearchEmail] = useState("");
    const [userDetails, setUserDetails] = useState(null);
    const [receivedRequests, setReceivedRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [friends, setFriends] = useState([]);
console.log(receivedRequests)
    const [axiosSecure] = useAxiosSecure();

    // User search function (similar to SearchUser component)
    const handleSearch = async () => {
        if (searchValue.trim() !== '') {
            try {
                const response = await fetch(
                    `https://insight-space-server.vercel.app/users?email=${searchValue.trim()}`
                );

                if (response.ok) {
                    const data = await response.json();
                    setUserDetails(data);
                } else {
                    console.error('Error fetching user details:', response.statusText);
                    setUserDetails(null);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
                setUserDetails(null);
            }
        } else {
            setUserDetails(null);
        }
    };

    const sendFriendRequest = async () => {
        try {
            await axiosSecure.post('/friendRequests/send', {
                receiverId: userDetails.email, // Use the correct identifier for the receiver
            });
            console.log('Friend request sent successfully');
        } catch (error) {
            console.error('Error sending friend request:', error);
        }
    };

    // Fetch received friend requests (similar to FriendSection component)
    const fetchReceivedRequests = async () => {
        try {
            const response = await axiosSecure.get('/friendRequests/received');
            setReceivedRequests(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching received friend requests:', error);
            setIsLoading(false);
        }
    };

    // Accept friend request function (similar to FriendSection component)
    const handleAcceptRequest = async (requestId) => {
        try {
            await axiosSecure.put(`/friendRequests/accept/${requestId}`);
            fetchReceivedRequests(); // Refresh friend requests after accepting
        } catch (error) {
            console.error('Error accepting friend request:', error);
        }
    };


    const handleDenyRequest = async (requestId) => {
        try {
            await axiosSecure.put(`/friendRequests/deny/${requestId}`);
            fetchReceivedRequests(); // Refresh friend requests after denying
        } catch (error) {
            console.error('Error denying friend request:', error);
        }
    };

    const fetchFriends = async () => {
        try {
            const response = await axiosSecure.get('/friends');
            setFriends(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching friends:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReceivedRequests();
        fetchFriends();
    }, [axiosSecure]);

    return (
        <div>
            {/* User search input and search button */}
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter email"
            />
            <button onClick={handleSearch}>Search</button>

            {/* Display user details (if found) */}
            {userDetails ? (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userDetails.name}</p>
                    <p>Email: {userDetails.email}</p>
                    <button onClick={sendFriendRequest}>Send Friend Request</button>
                    {/* Display other user details */}
                </div>
            ) : (
                <p>No user details found.</p>
            )}

            <br />

            {/* Display received friend requests */}
            <h2>Friend Requests</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : receivedRequests.length > 0 ? (
                <ul>
                    {receivedRequests.map(request => (
                        <li className='space-x-5' key={request._id}>
                            {request.sender}
                            <button className='bg-green-700 p-2' onClick={() => handleAcceptRequest(request._id)}>Accept</button>
                            <button className='bg-rose-700 p-2' onClick={() => handleDenyRequest(request._id)}>Deny</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No friend requests received.</p>
            )}

            <br />

            <div>
                <h2>My Friends</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : friends.length > 0 ? (
                    <ul>
                        {friends.map((friend) => (
                            <li key={friend._id}>
                                {friend.name} - {friend.email}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No friends found.</p>
                )}
            </div>

        </div>
    );
};

export default FriendsAndSearch;
