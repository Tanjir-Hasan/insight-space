import React, { useState } from 'react';
import {auth, db} from '../../firebase/config.firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

// const style = {
//   form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
//   input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
//   button: `w-[20%] bg-green-500`,
// };

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, photoURL, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        img: photoURL,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className="flex rounded-md">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-black w-[80%] text-white"
        type='text'
        placeholder='Message'
      />
      <button className="border p-3 bg-green-500 w-[20%]" type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
