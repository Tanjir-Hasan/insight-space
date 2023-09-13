import React, { useState, useEffect, useRef, useContext } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../../firebase/config.firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { ThemeContext } from '../../providers/ThemeProvider';
import ScrollToBottom from 'react-scroll-to-bottom';
import useTitle from '../../Hooks/useTitle';


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

      <div className="mt-10 w-8/12 mx-auto">

        <div className='grid mb-5'>

          {
            messages &&
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))
          }

        </div>

        <SendMessage scroll={scroll} />

        <span ref={scroll}></span>

      </div>

    </div>
  );
};

export default Chat;
