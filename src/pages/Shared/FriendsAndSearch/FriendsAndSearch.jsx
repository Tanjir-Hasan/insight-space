import React, { useState, useEffect, useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useMyFriends from '../../../Hooks/useMyFriends';
import MyFriends from '../MyFriends/MyFriends';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { PiCardholderLight } from 'react-icons/pi';
import { FaHandHolding } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';


const FriendsAndSearch = () => {

    const { theme } = useContext(ThemeContext);

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
                    `https://insight-space-server.onrender.com/users?email=${searchValue.trim()}`
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


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    return (
        <div className={`${theme} min-h-screen p-10`}>

            <div className='lg:w-11/12 mx-auto space-y-6'>

                <div className='flex flex-col justify-center space-y-3'>

                    {/* User search input and search button */}
                    <input
                        type="text"
                        className="text-black border border-black p-2 rounded-md lg:w-5/12 w-10/12 mx-auto focus:outline-none focus:border-[#0096c7]"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Enter email"
                    />

                    <div className='flex justify-center'>

                        <button
                            className='text-xl text-black hover:text-white font-[Poppins] lg:w-2/12 w-1/2 mx-auto bg-[#ade8f4] hover:bg-[#0096c7] px-8 py-2 rounded-lg hover:rounded-2xl duration-700'
                            onClick={handleSearch}>Search</button>
                    </div>


                    {/* Display user details (if found) */}

                    {userDetails ? (
                        <div>

                            <div className={`rounded-lg p-5 w-1/2 mx-auto ${theme === 'dark' ? 'bg-[#1d2d44] text-white' : 'bg-[#f0efeb]'}`}>

                                <div className='flex justify-between items-center'>

                                    <div className='inline-flex gap-3 items-center'>

                                        <img src={userDetails.photoURL} alt={userDetails.displayName} className='rounded-full h-20 w-20' />

                                        <p className='font-[Cinzel]'>Name: {userDetails.displayName}</p>

                                    </div>


                                    <button className='border text-[#0096c7] hover:text-white border-[#0096c7] hover:border font-[Poppins] hover:bg-[#0096c7] px-8 py-2 rounded-lg hover:rounded-2xl duration-700'
                                        onClick={sendFriendRequest}>Send Friend Request</button>


                                </div>

                            </div>

                        </div>
                    ) : (
                        <p className='font-[Cinzel] text-center'></p>
                    )}

                </div>

                <div className='lg:flex gap-10'>

                    <div className={`lg:w-1/3 flex flex-col rounded-lg p-5 lg:mb-0 mb-3 ${theme === 'dark' ? 'dark' :
                        theme === 'night' ? 'night' :
                            theme === 'light' ? 'bg-[#f0efeb]' : ''}`}>

                        <h1 className='font-[Poppins] text-2xl mb-5'>Manage my network</h1>

                        <div className='inline-flex gap-3'>
                            <p className='font-[Cinzel] text-lg'>Pending Request</p>
                            <FaHandHolding className='text-xl' />
                        </div>

                        <div className='inline-flex items-center gap-3'>
                            <p className='font-[Cinzel] text-lg'>My Friends</p>
                            <FaUserFriends className='text-xl' />
                        </div>

                    </div>

                    <div className={`lg:w-2/3 flex flex-col rounded-lg p-5 ${theme === 'dark' ? 'dark' :
                        theme === 'night' ? 'night' :
                            theme === 'light' ? 'bg-[#f0efeb]' : ''}`}>

                        {/* Display received friend requests */}
                        <div className='flex justify-between mb-5'>

                            <h2 className='text-xl font-[Cinzel]'>Friend Requests</h2>
                            <p className='text-xl font-[Cinzel] cursor-pointer hover:text-[#0096c7] duration-700'>See All</p>

                        </div>

                        {isLoading ? (
                            <p>Loading...</p>
                        ) : receivedRequests?.length > 0 ? (
                            <ul>
                                {receivedRequests?.map(request => (
                                    <li className='space-x-5 lg:flex justify-between gap-5 items-center' key={request._id}>

                                        <p className='text-lg font-serif'>{request.sender}</p>

                                        <div className='flex gap-2 lg:my-0 my-2'>

                                            <button
                                                className='text-black hover:text-white font-[Cinzel] bg-[#ade8f4] hover:bg-[#0096c7] px-8 py-1 rounded-lg hover:rounded-2xl duration-700'
                                                onClick={() => handleAcceptRequest(request._id)}>Accept</button>

                                            <button className='border text-[#0096c7] hover:text-white border-[#0096c7] hover:border font-[Cinzel] hover:bg-[#0096c7] px-8 py-1 rounded-lg hover:rounded-2xl duration-700'
                                                onClick={() => handleDenyRequest(request._id)}>Ignore</button>

                                        </div>

                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='font-[Cinzel]'>Locking for someone! Start making friends.</p>
                        )}

                    </div>

                </div>

                <MyFriends></MyFriends>

            </div>

        </div>
    );
};

export default FriendsAndSearch;
