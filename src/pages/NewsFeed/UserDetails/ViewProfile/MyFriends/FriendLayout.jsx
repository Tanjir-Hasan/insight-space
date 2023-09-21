import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useMyFriends from '../../../../../Hooks/useMyFriends';


const FriendLayout = () => {
    const [friends] = useMyFriends();

    // console.log(friends)
    return (
        <div className=''>
            <p className="text-xl pb-2 border-[#3c6e71] font-bold mb-3 border-b ">
                Total Friends <span className='bg-[#344e41] text-white rounded-full p-1 px-3'>{friends?.length}</span>

            </p>

            {
                friends?.length >0 ?
                    (
                        <div className='grid md:grid-cols-2 p-2 gap-5 items-center'>
                            {
                                friends?.map(friend => <div key={friend?._id}>

                                    <div className='flex items-center gap-3 mt-1   p-2 rounded-md'>
                                        <div className=''>
                                            <img className='rounded-full h-12 w-12 lg:h-20 lg:w-20' src={friend?.photoURL} alt="" />
                                        </div>
                                        <div>
                                            <p className='font-semibold text-sm lg:text-base'>{friend?.displayName}</p>
                                            <p className='text-xs lg:text-sm text-slate-500'>{friend?.role}</p>
                                            <Link to={"/single-chat"}>
                                                <button className="btn text-xs lg:text-sm  border rounded-md px-2 bg-[#185325] text-white">
                                                    Message
                                                </button>
                                            </Link>
                                        </div>
                                    </div>


                                </div>

                                )
                            }
                        </div>
                    )
                    :
                    (
                        <h2 className='lg:text-3xl text-xl  font-semibold text-center mt-20'>There are no friends you!</h2>
                    )
            }

        </div>
    );
};

export default FriendLayout;