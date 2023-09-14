import { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import useUsers from '../../Hooks/useUsers';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { ThemeContext } from '../../providers/ThemeProvider';
import useTitle from '../../Hooks/useTitle';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

// const serverUrl = `http://localhost:5000`;
const serverUrl = `https://insight-space-server.onrender.com`;
const socket = io(serverUrl, {
    transports: ['websocket']
});

const SingleChat = () => {

    useTitle('Message');

    const {user} = useAuth();

    const { theme } = useContext(ThemeContext);

    const [allUsers] = useUsers();

    const [axiosSecure] = useAxiosSecure();

    const [newMessage, setNewMessage] = useState('');

    const [messages, setMessages] = useState([]);

    const [conversationId, setConversationId] = useState('');

    const [participant, setParticipant] = useState(null);

    const [userStatus, setUserStatus] = useState({});

    const [singleUserData, setSingleUserData] = useState()

    const [conversationData, setConversationData] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (newMessage.trim() === '') return;

        const senderId = singleUserData?._id;

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
    };


    const addConversation = (senderId, receiverId) => {
        // axiosSecure.post(`/conversation`, { senderId, receiverId })
        //     .then((res) => {
        //         console.log(res.data)
        //         refetch();
        //     })
        //     .catch(err => console.log(err.message))
        socket.emit("addConversation", { senderId, receiverId });
        socket.on("conversation", (data) => {
            if (data.acknowledged === true) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                socket.emit("getConversationData", singleUserData?._id);
                socket.on("conversationUserData", (data) => {
                    setConversationData(data);
                })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Already created',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    };

    useEffect(() => {
        socket.emit("getSingleUser", user?.email);
        socket.on("userData", (data) => {
            const userData = JSON.parse(data);
            setSingleUserData(userData);
        });

        socket.emit("user-connected", singleUserData?._id);

        socket.emit("getConversationData", singleUserData?._id);
        socket.on("conversationUserData", (data) => {
            setConversationData(data);
        })

        socket.on('user-status', (updatedUserStatus) => {
            setUserStatus(updatedUserStatus);
        });

    }, [singleUserData?._id, user?.email])

    return (
        <div className={`${theme} h-[calc(100vh-96px)]`}>

            <div className="flex">

                <div className={`${theme === 'dark' ? 'dark-right' :
                    theme === 'night' ? 'night-right' :
                        theme === 'light' ? 'bg-[#f0efeb]' : ''} w-1/4 p-4 overflow-y-auto`}>

                    <h1 className='font-[Poppins] text-center text-2xl my-3'>My Conversation</h1>

                    {
                        conversationData?.map((singleUserData, index) => (

                            <div key={index} className={`${theme === 'light' ? 'hover:text-[#3c6e71]' : 'hover:text-[#48cae4]'} duration-700 cursor-pointer flex items-center gap-3 mb-4`}
                                onClick={() => getConversation(singleUserData?.conversationId, singleUserData?.user._id)}>

                                <div className='relative'>
                                    <img className="w-10 h-10 rounded-full overflow-hidden mr-2" src={singleUserData?.user?.photoURL} alt={singleUserData?.user?.displayName} />
                                    {
                                        userStatus[singleUserData?.user?._id] === 'online' ? (
                                            <div className='absolute top-5 right-1 h-3 w-3 rounded-full bg-green-500' title='Online'></div>
                                        ) : (
                                            <div className='absolute top-5 right-1 h-4 w-4 rounded-full bg-slate-400 border-4 border-b-gray-100' title='Offline'></div>
                                        )
                                    }
                                    
                                </div>

                                <div>
                                    <div className="font-semibold">{singleUserData?.user?.displayName}</div>
                                </div>

                            </div>
                        ))
                    }

                </div>

                <div className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#03071e]'} w-2/4 my-3 p-4`}>
                    {
                        participant ?
                            <div className='flex justify-between flex-col gap-3'>
                                {/* sending message person name on the top */}

                                <div className='flex items-center gap-3 bg-[#84a98c] rounded-lg px-5 py-2'>

                                    <div>
                                        <img className='w-10 h-10 rounded-full' src={participant.photoURL} alt="" />
                                    </div>
                                    <div>
                                        <h3>{participant.displayName}</h3>
                                    </div>

                                </div>

                                {/* all messages */}

                                <div className={`${theme === 'dark' ? 'bg-gray-900' :
                                    theme === 'night' ? 'night-middle' :
                                        theme === 'light' ? 'bg-[#e0e1dd] text-white' : ''} h-[calc(100vh-33vh)] p-4 rounded-lg shadow-md overflow-y-auto`}

                                >

                                    {
                                        messages.length > 0 ? messages?.map((message, i) =>

                                            <div key={i} className={`p-2 max-w-[60%] mb-2 ${message.senderId === singleUserData?._id
                                                ? 'bg-[#0077b6] rounded-s-xl rounded-t-xl ml-auto' : 'bg-[#6c757d]  rounded-b-xl rounded-tr-xl'}`}
                                            >

                                                <div className='flex'>
                                                    <span>{message?.message}</span>
                                                </div>

                                            </div>)
                                            :
                                            <div className='flex justify-center items-center h-full'>
                                                <span className='text-3xl'>No Message Available</span>
                                            </div>
                                    }

                                </div>

                                {/* send messages field */}

                                <form className="flex items-center gap-3" onSubmit={handleSubmit}>

                                    <input
                                        type="text"
                                        className="flex-1 w-11/12 py-3 px-3 rounded-lg border border-black text-black"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                    />

                                    <button
                                        type="submit"
                                        className={`${theme === 'light' ? 'message-btn-light' : 'message-btn-dark-night'}`}
                                    >
                                        Send
                                    </button>

                                </form>
                            </div>

                            : <h1 className='flex h-[calc(100vh-40vh)] justify-center items-center font-[Poppins] text-3xl'>Start your conversation.</h1>
                    }

                </div>

                <div className={`${theme === 'dark' ? 'dark-left' :
                    theme === 'night' ? 'night-left' :
                        theme === 'light' ? 'bg-[#f0efeb]' : ''} w-1/4 p-4 h-screen overflow-y-auto`}>

                    <h1 className='font-[Poppins] text-center text-2xl my-3'>All Users:</h1>

                    {
                        allUsers?.filter((u) => u._id !== singleUserData?._id)?.map((user, index) => (
                            <div
                                key={index}
                                className={`${theme === 'light' ? 'hover:text-[#3c6e71]' : 'hover:text-[#48cae4]'} duration-700 cursor-pointer flex items-center mb-4`}
                                onClick={() => addConversation(singleUserData?._id, user?._id)}>

                                <div className="relative">
                                    <img className="w-10 h-10 rounded-full overflow-hidden mr-2" src={user.photoURL} alt={user.displayName} />
                                    {
                                        userStatus[user._id] === 'online' ? (
                                            <div className='absolute top-5 right-1 h-3 w-3 rounded-full bg-green-500' title='Online'></div>
                                        ) : (
                                            <div className='absolute top-5 right-1 h-4 w-4 rounded-full bg-slate-400 border-4 border-b-gray-100' title='Offline'></div>
                                        )
                                    }
                                </div>

                                <div>
                                    <div className="font-semibold">{user.displayName}</div>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default SingleChat;