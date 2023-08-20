import React, { useState } from 'react';
import { io } from 'socket.io-client';
import Chat from './Chat';
import useAuth from '../../../Hooks/UseAuth';
import { useRef } from 'react';
import axios from 'axios';

const socket = io.connect("http://localhost:5001")

const RealTimeChat = () => {

    const [userName, setUserName] = useState("");

    const [room, setRoom] = useState("");

    // user search functionality

    const [searchEmail, setSearchEmail] = useState("");
    const [userDetails, setUserDetails] = useState(null);
    const { user } = useAuth();
    const ref = useRef();

    // user search functionality

    const [showChat, setShowChat] = useState(false);

    // const joinRoom = () => {
    //     if (userName !== "" && room !== "") {
    //         socket.emit("join-room", room);
    //         setShowChat(true);
    //     };
    // };

    const joinRoom = () => {
        if (userName !== "" && room !== "") {
            socket.emit("join-room", room, { name: userName, email: searchEmail });
            setShowChat(true);
        }
    };



    // user search function

    const handleSearch = () => {

        if (searchEmail.trim() !== "") {

            const url = `http://localhost:5000/users?email=${searchEmail.trim()}`;

            axios.get(url)
                .then(data => {
                    setUserDetails(data.data);
                })
                .catch(error => {
                    console.error("Error fetching user details:", error);
                    setUserDetails(null);
                });

        } else {
            setUserDetails(null);
        }
    };

    // retrieve conversation

    const retrieveConversations = async () => {
        const response = await axios.get("http://localhost:5001/conversations");
        const conversations = response.data;
        // Filter conversations based on the selected recipient's email
        const filteredConversations = conversations.filter(conversation =>
            conversation.receiver === searchEmail || conversation.sender === searchEmail
        );
        // Display conversations in your UI (e.g., using a list of messages)
        setConversationHistory(filteredConversations);
    };
    
    // Call retrieveConversations when initiating a conversation
    const initiateConversation = (selectedUser) => {
        setUserName(selectedUser.name);
        setSearchEmail(selectedUser.email);
        setShowChat(true);
        retrieveConversations();
    };
    


    return (
        <div>
            <h1>Real Time Chat Loading</h1>

            {
                !showChat ?
                    <>
                        <input type="text"
                            placeholder='NAME'
                            // onChange={event => { setUserName(event.target.value) }}
                            onChange={(e) => setSearchEmail(e.target.value)} />

                        <input type="text"
                            placeholder='ROOM ID'
                            onChange={event => { setRoom(event.target.value) }} />


                        {userDetails ? (
                            <div>
                                <h2>User Details</h2>
                                <p>Name: {userDetails.name}</p>
                                <p>Email: {userDetails.email}</p>
                                <button onClick={() => initiateConversation(userDetails)}>Start Conversation</button>
                            </div>
                        ) : (
                            <p>No user details found.</p>
                        )}


                        <button className='bg-red-500 p-3 mx-2' onClick={handleSearch}>Search</button>

                        <button className='bg-red-500 p-3 mx-2' onClick={joinRoom}>Join</button>

                    </>
                    :
                    <Chat socket={socket} userName={userName} room={room} searchEmail={searchEmail} userDetails={userDetails}></Chat>
            }

        </div>
    );
};

export default RealTimeChat;