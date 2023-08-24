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
    <form onSubmit={sendMessage} className="flex md:gap-1 rounded-md border-none md:mx-5 mx-1 mb-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-[#f0efeb] w-[80%] text-black focus:outline-none focus:border-[#84a98c] focus:ring-1 focus:ring-[#84a98c] rounded-l-xl px-2"
        type='text'
        placeholder='Message'
      />
      <button className="border p-3 text-xl text-white font-[Poppins] bg-[#84a98c] hover:bg-[#344e41] duration-500 w-[20%] rounded-r-xl" type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
