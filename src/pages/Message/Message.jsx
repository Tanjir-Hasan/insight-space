import ScrollToBottom from 'react-scroll-to-bottom';
import { auth } from '../../firebase/config.firebase';
import useAuth from '../../Hooks/useAuth';
import { Timestamp } from 'firebase/firestore';
import moment from 'moment';

const Message = ({ message }) => {
  const { user } = useAuth();
  // Convert the Firestore Timestamp to a JavaScript Date object
  const timestamp = message.timestamp instanceof Timestamp ? message.timestamp.toDate() : null;

  // Format the timestamp as a string (adjust the format as needed)
  const formattedTimestamp = timestamp ? timestamp.toLocaleString() : '';

  const messageClass =
    message?.uid === auth?.currentUser?.uid
      ? 'bg-[#0077b6] ml-auto rounded-s-xl rounded-t-xl' : 'bg-[#6c757d] rounded-b-xl rounded-tr-xl';

  return (
    <div className={`md:px-5 px-1 mt-3 mb-2 `}>
      <div className={`flex justify-between items-center shadow-md py-2 px-3 w-[60%] text-white ${messageClass}`}>
        <div className='flex items-center gap-3'>
          <img className='rounded-full h-5' src={message.img} alt="" />
          <p>{message.text}</p>
        </div>
        <p>{moment(formattedTimestamp).format('YYYY-MM-DD')}</p>
      </div>
    </div>
  );
};

export default Message;
