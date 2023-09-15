import React from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const SearchUser = () => {

    const [searchValue, setSearchValue] = useState('');
    const [userDetails, setUserDetails] = useState(null);

    const handleSearch = async () => {
        if (searchValue.trim() !== '') {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_base_URL}/users?email=${searchValue.trim()}`
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

    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter email"
            />
            <button onClick={handleSearch}>Search</button>

            {userDetails ? (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userDetails.name}</p>
                    <p>Email: {userDetails.email}</p>
                    {/* Display other user details */}
                </div>
            ) : (
                <p>No user details found.</p>
            )}
        </div>
    );
};

export default SearchUser;