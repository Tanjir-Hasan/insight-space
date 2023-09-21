import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../providers/ThemeProvider';

const MessagesIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}`} style={{height: "0px"}}>

            <button onClick={() => setIsOpen(!isOpen)}>
                <img src="https://i.ibb.co/bzywHzS/mail.png" alt="" className="fixed bottom-2 right-10 w-12" />
            </button>

            {
                isOpen && (
                    <div className="flex flex-col gap-3 rounded fixed bottom-16 right-10 p-2">

                        {/* <Link to='/group-conversations' className="bg-[#0d1b2a] font-[Cinzel] rounded-lg py-1 px-5 text-white hover:text-[#90e0ef] duration-700">Group Chat</Link> */}

                        <Link to='/single-chat' className="bg-[#0d1b2a] font-[Cinzel] rounded-lg py-1 px-5 text-white hover:text-[#90e0ef] duration-700">Messages</Link>

                    </div>
                )
            }

        </div>
    );
};

export default MessagesIcon;
