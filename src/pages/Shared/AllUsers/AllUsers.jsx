import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AllUsersData = ({ currentUserEmail }) => {

    const [searchEmail, setSearchEmail] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const [axiosSecure] = useAxiosSecure();

    const handleSearch = async () => {
        try {
            const response = await axiosSecure.get(`/users?email=${searchEmail}`);
            setSearchResult(response.data);
        } catch (error) {
            console.error('Error searching for user:', error);
        }
    };

    const sendFriendRequest = async (receiverId) => {
        try {
            await axiosSecure.post('/friend-requests/send', { receiverId });
            // toast.success('Friend request sent successfully', {
            //     position: toast.POSITION.BOTTOM_CENTER,
            // });

        } catch (error) {
            console.error('Error sending friend request:', error);
            // toast.warning('Already sent the request', {
            //     position: toast.POSITION.BOTTOM_CENTER,
            // });
        }
    };

    return (
        <>

            <div>
                <input
                    type="email"
                    placeholder="Enter email to search"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
                {searchResult && (
                    <div>
                        <h2>Search Result</h2>
                        {searchResult.email === currentUserEmail ? (
                            <p>This is your own email.</p>
                        ) : (
                            <div>
                                <p>Email: {searchResult.email}</p>
                                <p>Name: {searchResult.name}</p>
                                <button onClick={() => sendFriendRequest(searchResult._id)}>Send Friend Request</button>
                            </div>
                        )}
                    </div>
                )}
            </div>

        </>
    );
};

export default AllUsersData;