
import React, { useState, useRef } from 'react';
import useAuth from '../../Hooks/UseAuth';
import axios from 'axios';

const Chat = () => {
    const [searchEmail, setSearchEmail] = useState("");
    const [userDetails, setUserDetails] = useState(null);
    const { user } = useAuth();
    const ref = useRef()

    const handleSearch = () => {
        if (searchEmail.trim() !== "") {
            const url = `https://insight-space-server.vercel.app/users?email=${searchEmail.trim()}`;

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
    const [message, setMessage] = useState("");
    const [receivedMessage, setReceivedMessage] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault()
        const data = ref.current.value
        const date = new Date();
        const newText = { date, data }
        const newMessage = { message: newText, sender: user?.email, receiver: userDetails?.email }
        axios.post("http://localhost:5000/chatMessage", newMessage)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
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


            <br />

            <form onSubmit={handleSubmit}>
                <textarea ref={ref} name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit" />
            </form>

        </>

    );
};

export default Chat;