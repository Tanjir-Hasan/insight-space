import ScrollToBottom from 'react-scroll-to-bottom';
import { auth } from '../../firebase/config.firebase';
import useAuth from '../../Hooks/UseAuth';

const Message = ({ message }) => {
  const { user } = useAuth();

  const messageClass =
    message.uid === auth.currentUser.uid
      ? 'bg-[#0e6ba8] text-white flex-row-reverse text-end float-right rounded-bl-full'
      : 'bg-[#e5e5ea] text-black float-left rounded-br-full';

  return (
      <div className='md:px-5 px-1'>
        <div className={`flex gap-4 items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full ${messageClass}`}>
          <img className='rounded-full h-5' src={message.img} alt="" />
          <p className="absolute mt-[-4rem] text-gray-600 text-xs">{message.name}</p>
          <p>{message.text}</p>
        </div>
      </div>
  );
};

export default Message;
