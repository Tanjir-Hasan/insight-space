import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useMyFriends from '../../../Hooks/useMyFriends';


const FriendsAndSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [receivedRequests, setReceivedRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [friends] = useMyFriends();
    console.log(friends);
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


    const sendFriendRequest = () => {
        axiosSecure.post(`/friendRequests/send?email=${userDetails.email}`)
            .then(data => {
                console.log(data.data);
                fetchReceivedRequests();
            })
            .catch(error => console.log(error.message))
    };


    const fetchReceivedRequests = async () => {
        axiosSecure.get(`/friendRequests/received`)
            .then(data => setReceivedRequests(data.data))
            .catch(error => console.log(error))
    };


    const handleAcceptRequest = (requestId) => {
        axiosSecure.patch(`/friendRequests/accept/${requestId}`)
            .then(data => {
                console.log(data.data)
                fetchReceivedRequests();
            })
            .catch(err => console.log(err.message))
    };

    const handleDenyRequest = (requestId) => {
        axiosSecure.delete(`/friendRequests/deny/${requestId}`)
            .then(data => {
                console.log(data.data);
                fetchReceivedRequests();
            })
            .catch(err => console.log(err.message))
    };

    useEffect(() => {
        fetchReceivedRequests();
    }, [axiosSecure]);


    return (
        <div className='min-h-screen p-10'>
            {/* User search input and search button */}
            <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter email"
            />
            <button className='text-center text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41]duration-700 py-2 rounded-lg w-32 mx-2' onClick={handleSearch}>Search</button>

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
            ) : receivedRequests?.length > 0 ? (
                <ul>
                    {receivedRequests?.map(request => (
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
                ) : friends?.length > 0 ? (
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
