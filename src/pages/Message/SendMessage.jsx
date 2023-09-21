import React, { useContext, useState } from 'react';
import { auth, db } from '../../firebase/config.firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { MdSend } from 'react-icons/md';
import { ThemeContext } from '../../providers/ThemeProvider';

const SendMessage = ({ scroll }) => {

  const { theme } = useContext(ThemeContext);

  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
      alert('Please enter a valid message')
      return
    }
    const { uid, photoURL, displayName } = auth.currentUser
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      img: photoURL,
      timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <form onSubmit={sendMessage} className="flex md:gap-1 rounded-md border-none md:mx-5 mx-1 mb-2">

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-[#f0efeb] w-full text-black focus:outline-none focus:border-[#3c6e71] focus:ring-1 focus:ring-[#3c6e71] rounded-xl px-2"
        type='text'
        placeholder='Message'
      />

      {/* <button className="border p-3 text-xl text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] duration-500 w-[20%] rounded-r-xl" type='submit'>
        Send
      </button> */}

      <button
        type='submit'
        className={`duration-700 p-2 rounded-full ${theme === 'light' ? 'message-btn-light' : theme === 'dark' ? 'message-btn-dark' : theme === 'night' ? 'message-btn-night' : ''}`}
      >
        <MdSend className='text-2xl ml-1' />
      </button>

    </form>
  );
};

export default SendMessage;
