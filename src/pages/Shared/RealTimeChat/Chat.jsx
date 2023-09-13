import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import useAuth from '../../../Hooks/useAuth';

const Chat = ({ socket, userName, room, searchEmail, userDetails }) => {
    const {user} = useAuth();
    const [currentMessage, setCurrentMessage] = useState("");

    const [messageList, setMessageList] = useState([]);

    // const sendMessage = async () => {
    //     if (currentMessage !== "") {

    //         const messageData = {
    //             room: room,
    //             author: userName,
    //             messageData: currentMessage,
    //             time: new Date(Date.now()).getHours() +
    //                 ":" +
    //                 new Date(Date.now()).getMinutes(),
    //         };

    //         await socket.emit("send-message", messageData);
    //         setMessageList((list) => [...list, messageData]);
    //         setCurrentMessage("")

    //     };
    // };

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: userName,
                messageData: currentMessage,
                recipient: searchEmail,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send-message", messageData);

            // Save the conversation to the backend
            const conversationData = {
                senderName: userName,
                sender:user?.email ,
                receiver: searchEmail,
                message: currentMessage,
                timestamp: new Date(),
            };

            await axios.post("http://localhost:5001/conversations", conversationData) // Corrected URL
            .then(data => console.log(data.data))
            .catch(err => console.log(err.message))
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };



    useEffect(() => {
        socket.on("receive-message", (data) => {
            if (data.recipient === searchEmail || data.author === searchEmail) {
                setMessageList((newMessage) => [...newMessage, data]);
            }
        });

        return () => {
            socket.off("receive-message");
        };
    }, [socket, searchEmail]);



    return (
        <div>
            <ScrollToBottom className='h-28'>
                {
                    messageList.map((messageContent, index) => {
                        return <div
                            key={index}
                            className={userName === messageContent.author ? "text-right" : "text-left"}
                        >

                            <h3 className=''>{messageContent.messageData}</h3>

                            <p className='text-blue-700'>{messageContent.author}</p>

                            <p className='text-blue-700'>{messageContent.time}</p>

                        </div>;
                    })
                }
            </ScrollToBottom>

            <div>
                <input type="text" name="" id="" placeholder='type your message'
                    className='bg-sky-200'
                    value={currentMessage}
                    onChange={event => { setCurrentMessage(event.target.value) }}
                    onKeyPress={event => { event.key === "Enter" && sendMessage() }}
                />
            </div>

            <div>
                <button onClick={sendMessage}>send</button>
            </div>

        </div>
    );
};

export default Chat;