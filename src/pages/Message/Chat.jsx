import React, { useState, useEffect, useRef, useContext } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../../firebase/config.firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { ThemeContext } from '../../providers/ThemeProvider';
import ScrollToBottom from 'react-scroll-to-bottom';
import useTitle from '../../Hooks/useTitle';
import { Link } from 'react-router-dom';


const Chat = () => {

  useTitle('Group Chat');

  const { theme } = useContext(ThemeContext);

  const [messages, setMessages] = useState([]);

  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);


  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} py-8`}>

      <div className='flex justify-center'>
        <Link to="/single-chat" className='text-black hover:text-white font-[Cinzel] bg-[#ade8f4] hover:bg-[#0096c7] px-8 py-1 rounded-lg hover:rounded-2xl duration-700'>My Messages</Link>
      </div>

      <div className="mt-10 w-full px-2 mx-auto">

        <ScrollToBottom className='mb-5 h-[calc(100vh-35vh)]'>

          {
            messages &&
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))
          }

        </ScrollToBottom>

        <SendMessage scroll={scroll} />

        <span ref={scroll}></span>

      </div>

    </div>
  );
};

export default Chat;
