import { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import useUsers from '../../Hooks/useUsers';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { ThemeContext } from '../../providers/ThemeProvider';
import useTitle from '../../Hooks/useTitle';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import messageLoading from "../../../public/message-loading.json";
import { MdSend } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Search from '../../pages/NewsFeed/Search/Search';
import ScrollToBottom from 'react-scroll-to-bottom';
import moment from 'moment';

const serverUrl = `${import.meta.env.VITE_base_URL}`;
const socket = io(serverUrl, {
    transports: ['websocket']
});

const SingleChat = () => {

    useTitle('Message');

    const { user, searchText } = useAuth();

    const { theme } = useContext(ThemeContext);

    const [isOpenLeft, setOpenLeft] = useState(false);

    const [isOpenRight, setOpenRight] = useState(false);

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
        const date = new Date();

        if (newMessage.trim() === '') return;

        const senderId = singleUserData?._id;

        const postData = {
            conversationId,
            senderId,
            message: newMessage,
            date,
            
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

        socket.emit("addConversation", { senderId, receiverId });
        socket.on("conversation", (data) => {
            if (data.acknowledged === true) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Conversation Successfully created',
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

    // const handleDeleteMsg = (msgId) => {
    //     socket.emit('deleteMessage', msgId);
    //     socket.on('msgDeleteSuccess', (data) => {
    //         if (data.acknowledged === true) {
    //             toast.success('Deleted Successfully!', {
    //                 position: "bottom-center",
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: false,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //             });
    //         }
    //     })
    // }

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

    }, [singleUserData?._id, user?.email]);


    // TODO: SEND BUTTON AND SCROLL Y PROBLEM  

    return (
        <div className={`${theme}`}>

            <>
                <div className='hidden sm:hidden md:hidden lg:block xl:block h-[calc(100vh-130px)]'>

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
                                                    <div className='absolute top-5 right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-b-gray-100' title='Online'></div>
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

                        <div className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#03071e]'} w-2/4 mb-3 p-4`}>

                            <div className='flex justify-center'>
                                <Link to="/group-conversations" className='text-black hover:text-white font-[Cinzel] from-[#0096c7] via-[#00b4d8] to-[#ade8f4] bg-gradient-to-tl my-2 px-8 py-1 rounded-lg hover:rounded-2xl duration-700'>Group Conversation</Link>
                            </div>

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

                                        <ScrollToBottom className={`${theme === 'dark' ? 'bg-gray-900' :
                                            theme === 'night' ? 'night-middle' :
                                                theme === 'light' ? 'bg-[#e0e1dd] text-white' : ''} h-[calc(100vh-35vh)] p-4 rounded-lg shadow-md`}

                                        >

                                            {
                                                messages.length > 0 ? messages?.map((message, i) =>

                                                    <div key={i} className={`p-2 md:w-[60%] mb-2 ${message.senderId === singleUserData?._id
                                                        ? 'bg-[#0077b6] rounded-s-xl rounded-t-xl ml-auto' : 'bg-[#6c757d]  rounded-b-xl rounded-tr-xl'}`}
                                                    >

                                                        <div className='flex justify-between items-center'>
                                                            <span>{message?.message}</span>
                                                            <span>{message?.date && moment(message?.date).format('DD-MM-YYYY')}</span>
                                                        </div>

                                                    </div>)
                                                    :
                                                    <div className='flex justify-center items-center h-full'>
                                                        <span className='text-3xl'>No Message Available</span>
                                                    </div>
                                            }

                                        </ScrollToBottom>

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
                                                className={`duration-700 p-2 rounded-full ${theme === 'light' ? 'message-btn-light' : theme === 'dark' ? 'message-btn-dark' : theme === 'night' ? 'message-btn-night' : ''} ${!newMessage.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                disabled={!newMessage.trim()}
                                            >
                                                <MdSend className='text-2xl ml-1' />
                                            </button>

                                        </form>

                                    </div>

                                    : <div className='hidden sm:hidden md:hidden lg:block xl:block'>
                                        <div className='flex h-[calc(100vh-40vh)] justify-center items-center'>
                                            <div className='flex flex-col items-center justify-center'>
                                                <h1 className='font-[Poppins] text-4xl'>Start your conversation</h1>
                                                <Lottie animationData={messageLoading} loop={true} className='' />
                                            </div>
                                        </div>
                                    </div>
                            }

                        </div>

                        <div className={`${theme === 'dark' ? 'dark-left' :
                            theme === 'night' ? 'night-left' :
                                theme === 'light' ? 'bg-[#f0efeb]' : ''} w-1/4 p-4 h-screen overflow-y-auto`}>

                            <h1 className='font-[Poppins] text-center text-2xl my-3'>People you may know</h1>

                            {/* --------------Search Options ------------*/}
                            <div className='py-4'>
                                <Search placeholder={"Search By Name"}></Search>
                            </div>

                            {
                                allUsers?.filter((u) => u._id !== singleUserData?._id)?.filter((us) => us?.displayName.toLowerCase().includes(searchText.toLowerCase())).map((user, index) => (
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

            </>

            {/* ------------------------show in mobile and tablet------------------------------- */}

            <>

                {/* handle buttons */}

                <div className="md:w-8/12 mx-auto w-full lg:hidden md:block">

                    <div>

                        <div className='flex justify-between px-2 py-3'>
                            {/* open form left */}
                            <div>
                                <button onClick={() => {
                                    setOpenLeft(!isOpenLeft);
                                    setOpenRight(false)
                                }}
                                    className={`border-2 border-[#0096c7] hover:border font-[Cinzel] hover:bg-[#0096c7] px-8 py-1 rounded-lg hover:rounded-2xl duration-700 ${theme === 'light' ? "text-[#0096c7] hover:text-white" : "text-white"}`}>
                                    My Conversation
                                </button>
                            </div>
                            {/* open form left */}

                            {/* open form right */}
                            <div>
                                <button onClick={() => {
                                    setOpenRight(!isOpenRight);
                                    setOpenLeft(false)
                                }}
                                    className={`border-2 border-[#0096c7] hover:border font-[Cinzel] hover:bg-[#0096c7] px-12 py-1 rounded-lg hover:rounded-2xl duration-700 ${theme === 'light' ? "text-[#0096c7] hover:text-white" : "text-white"}`}>
                                    See All User
                                </button>
                            </div>
                            {/* open form right */}
                        </div>

                    </div>

                    <div className='flex justify-center'>
                        <Link to="/group-conversations" className='text-black hover:text-white font-[Cinzel] from-[#0096c7] via-[#00b4d8] to-[#ade8f4] bg-gradient-to-tl my-2 px-8 py-1 rounded-lg hover:rounded-2xl duration-700'>Group Conversation</Link>
                    </div>

                    {/* --------------Search Options ------------*/}
                    <div className='py-1 w-9/12 mx-auto'>
                        <Search placeholder={"Search By Name"}></Search>
                    </div>

                </div>

                {/* handle buttons */}


                {/* open form left */}

                {<div className=' lg:hidden md:block'>

                    {/* Navigation Bar */}
                    <div className={`${isOpenLeft ? 'translate-x-0' : '-translate-x-full'} ${theme} transition-transform duration-300 ease-in-out fixed top-0 left-0 w-80 / bg-[#F0EFEB] px-6 py-4 min-h-screen`}>

                        <div>
                            <button className="text-black hover:text-white font-[Cinzel] bg-[#ade8f4] hover:bg-[#0096c7] mt-20 px-8 py-1 rounded-lg hover:rounded-2xl duration-700" onClick={() => setOpenLeft(!isOpenLeft)}>Close</button>
                        </div>

                        {/* Navigation Content */}

                        <div>
                            <h1 className='font-[Poppins] text-center text-2xl my-3'>My Conversation</h1>

                            {
                                conversationData?.map((singleUserData, index) => (

                                    <div key={index} className={`${theme === 'light' ? 'hover:text-[#3c6e71]' : 'hover:text-[#48cae4]'} duration-700 cursor-pointer flex items-center gap-3 mb-4`}
                                        onClick={() => getConversation(singleUserData?.conversationId, singleUserData?.user._id)}>

                                        <div className='relative'>
                                            <img className="w-10 h-10 rounded-full overflow-hidden mr-2" src={singleUserData?.user?.photoURL} alt={singleUserData?.user?.displayName} />
                                            {
                                                userStatus[singleUserData?.user?._id] === 'online' ? (
                                                    <div className='absolute top-5 right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-b-gray-100' title='Online'></div>
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

                    </div>

                </div>}

                {/* open form left */}


                {/* Conversation Field */}

                <div className={`${theme === 'light' ? 'border-[#3c6e71]' : 'border-[#03071e]'} w-full my-3 p-4`}>
                    {
                        participant ?
                            <div className='flex justify-between flex-col gap-3 lg:hidden md:block'>
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

                                <form className="flex items-center gap-3 pb-10" onSubmit={handleSubmit}>

                                    <input
                                        type="text"
                                        className="flex-1 w-11/12 py-3 px-3 rounded-lg border border-black text-black"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                    />

                                    <button
                                        type="submit"
                                        className={`duration-700 p-2 rounded-full ${theme === 'light' ? 'message-btn-light' : theme === 'dark' ? 'message-btn-dark' : theme === 'night' ? 'message-btn-night' : ''} ${!newMessage.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={!newMessage.trim()}
                                    >
                                        <MdSend className='text-2xl ml-1' />
                                    </button>

                                </form>

                            </div>
                            :
                            <>
                                {
                                    isOpenLeft || isOpenRight ? <div className='h-screen'>{null}</div> : (
                                        <div className='lg:hidden md:block pt-40 h-screen'>
                                            <p className='text-center font-[Poppins] md:text-4xl text-2xl'>Start your conversation.</p>
                                            <Lottie animationData={messageLoading} loop={true} className='w-1/2 mx-auto' />
                                        </div>
                                    )
                                }

                            </>

                    }

                </div>

                {/* Conversation Field */}


                {/* open form right */}

                {<div className='lg:hidden md:block'>


                    {/* Navigation Bar */}
                    <div className={`${isOpenRight ? 'translate-x-0' : 'translate-x-full'} ${theme} transition-transform duration-300 ease-in-out fixed top-0 right-0 w-80 / bg-[#F0EFEB] px-6 py-4 mt-20 min-h-screen`}>

                        <div>
                            <button className="text-black hover:text-white font-[Cinzel] bg-[#ade8f4] hover:bg-[#0096c7] mt-0.3 px-8 py-1 rounded-lg hover:rounded-2xl duration-700" onClick={() => setOpenRight(!isOpenRight)}>Close </button>
                        </div>

                        {/* Navigation Content */}
                        <div>

                            <h1 className='font-[Poppins] text-center text-2xl my-3'>People you may know</h1>

                            {allUsers?.filter((u) => u._id !== singleUserData?._id)?.map((user, index) => (
                                <div
                                    key={index}
                                    className={`${theme === 'light' ? 'hover:text-[#3c6e71]' : 'hover:text-[#48cae4]'} duration-700 cursor-pointer flex items-center mb-4`}
                                    onClick={() => addConversation(singleUserData?._id, user?._id)}>

                                    <div className="relative">
                                        <img className="w-10 h-10 rounded-full overflow-hidden mr-2" src={user.photoURL} alt={user.displayName} />
                                        {userStatus[user._id] === 'online' ? (
                                            <div className='absolute top-5 right-1 h-3 w-3 rounded-full bg-green-500' title='Online'></div>
                                        ) : (
                                            <div className='absolute top-5 right-1 h-4 w-4 rounded-full bg-slate-400 border-4 border-b-gray-100' title='Offline'></div>
                                        )}
                                    </div>

                                    <div>
                                        <div className="font-semibold">{user.displayName}</div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>}

                {/* open form right */}

            </>

        </div>
    );
};

export default SingleChat;