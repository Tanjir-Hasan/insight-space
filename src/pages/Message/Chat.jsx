import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../../firebase/config.firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';



const Chat = () => {
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
    <>
      <div className=" mt-10 w-10/12 md:w-8/12 lg:w-8/12 mx-auto border ">

       <div className='grid'>
       {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
       </div>
       <SendMessage scroll={scroll} />
      <span ref={scroll}></span>

      </div>

      
      {/* Send Message Compoenent */}

    </>
  );
};

export default Chat;
