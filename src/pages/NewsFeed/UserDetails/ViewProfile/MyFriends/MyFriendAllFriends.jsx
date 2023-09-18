import React from 'react';
import useMyFriends from '../../../../../Hooks/useMyFriends';

const MyAllFriends = () => {
    const [friends] = useMyFriends();
    return (
        <div className='animate-zoom-in'>
            <p className="lg:text-xl text-sm pb-2  font-bold mb-3">
                Total Friends <span className='bg-[#344e41] text-white  rounded-full lg:p-1  px-2 lg:px-3'>{friends?.length}</span>

            </p>

            <div className='grid grid-cols-3 gap-2'>
                {
                    friends?.length > 0 ? (
                        friends?.map((friend) => (
                            <div key={friend?._id} className=''>
                                <div className="flex flex-col items-center justify-center ">
                                    <img className="w-full " src={friend?.photoURL} alt={friend?.displayName} />
                                    <h3 className="text-xs">{friend?.displayName}</h3>
                                </div>
                            </div>
                        ))
                    )
                        :
                        <p className='font-[Cinzel] text-center'>No friends found.</p>
                }
            </div>

        </div>
    );
};

export default MyAllFriends;