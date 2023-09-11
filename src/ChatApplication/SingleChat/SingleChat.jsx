import { useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import useUsers from '../../Hooks/useUsers';
import useSingleUser from '../../Hooks/useSingleUser';
import useConversations from '../../Hooks/useConversations';


const socket = io(`http://localhost:5000`, {
    transports: ['websocket']
});

const SingleChat = () => {
    const [allUsers] = useUsers();
    const [conversationData] = useConversations();
    const [singleUser] = useSingleUser();

    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [conversationId, setConversationId] = useState('');
    const [participant, setParticipant] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;
        const senderId = singleUser?._id;
        const postData = {
            conversationId,
            senderId,
            message: newMessage
        }
        socket.emit('chatMessage', postData);
    };
    const getConversation = (conversationId, receiveId) => {
        setParticipant(allUsers.find(user => user?._id === receiveId));
        // getAllMessages(conversationId);
        setConversationId(conversationId);
        socket.emit("conversationId", conversationId);
        socket.emit("joinRoom", conversationId);
        socket.on('allMessages', (data) => {
            setMessages(data);
            setNewMessage("");
        })
    }


    const addConversation = (senderId, receiverId) => {
        console.log(senderId, receiverId);
        axios.post(`http://localhost:5000/conversation`, { senderId, receiverId }).
            then((res) => console.log(res.data));
    }


    console.log(messages);
    return (
        <div className="flex h-screen">

            <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto" >
                <div>Conversation Users:</div>
                {conversationData.map((cUser, index) => (
                    <div key={index} className="cursor-pointer flex items-center mb-4" onClick={() => getConversation(cUser?.conversationId, cUser?.user._id)}>
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                            <img src={cUser?.user.image} alt={cUser?.user.name} />
                        </div>
                        <div>
                            <div className="font-semibold">{cUser?.user.name}</div>
                            {/* Other user details... */}
                        </div>
                    </div>
                ))}

            </div>
            <div className="w-2/4 border-l border-r border-gray-300 p-4">
                {
                    participant ?
                        <div className='flex items-center gap-3 bg-lime-200 rounded-lg px-5 py-2'>
                            <div>
                                <img className='w-10 h-10 rounded-full' src={participant.image} alt="" />
                            </div>
                            <div>
                                <h3>{participant.name}</h3>
                            </div>
                        </div>
                        : "Please Select a Participant For chat"
                }
                <div className="h-4/5 bg-white p-4 rounded-lg shadow-md overflow-y-auto">
                    {
                        messages.length > 0 ? messages.map((message, i) =>
                            <div key={i} className={`p-2 max-w-[40%] rounded-b-xl mb-2 ${message.senderId === singleUser?._id ? "bg-blue-300 rounded-tl-xl ml-auto" : "bg-slate-300 rounded-b-xl rounded-tr-xl"}`}>
                                <div className='flex'>
                                    <span>{message?.message}</span>

                                </div>
                            </div>) :
                            <div className='flex justify-center items-center h-full'>
                                <span className='text-3xl'>No Message Available</span>
                            </div>
                    }

                </div>
                <form className="h-1/5 flex items-center" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg px-4 py-2"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto" >
                <div>All Users:</div>
                {allUsers.filter((u) => u._id !== singleUser?._id).map((user, index) => (
                    <div
                        key={index}
                        className="cursor-pointer flex items-center mb-4"
                        onClick={() => addConversation(singleUser?._id, user?._id)}
                    >
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                            <img src={user.image} alt={user.name} />
                        </div>
                        <div>
                            <div className="font-semibold">{user.name}</div>
                            {/* Other user details... */}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default SingleChat;
