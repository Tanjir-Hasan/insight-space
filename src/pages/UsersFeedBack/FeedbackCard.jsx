import React from 'react';
import moment from "moment/moment";
import Bin from "../../assets/images/icons/bin.png"




const FeedbackCard = ({f, handleDelete, handleUpdate}) => {
    const {_id, userName, email, message, rating, date, status} = f

    
    return (
        <div>
            <div className=''>
                        {/* <td> */}
                            <thead>
                                <tr className="gap-5">
                                    <th className='m-4'>Name</th>
                                    <th className='m-4'>Email</th>
                                    <th className='m-4'></th>
                                    <th className='m-4'>Feedback</th>
                                    <th className='m-4'></th>
                                    <th className='m-4'>Rating</th>
                                    <th className='m-4'>Date & Time</th>
                                    <th className='m-4'>Remove</th>
                                    <th className='m-4'>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="gap-6">
                                    <td className="">
                                    <p className='m-4'>{userName}</p>
                                    </td>
                                    <td><p className='font-[Cinzel] m-4'>{email}</p></td>
                                    <td className='m-4'></td>
                                    <td><p className='font-[Cinzel] m-4'>{message}</p></td>
                                    <td className='m-4'></td>
                                    <td><p className='font-[Cinzel] m-4'>{rating}</p></td>
                                    <td><p className='font-[Cinzel] m-4'>{moment(date).format('LLL')}</p></td>
                                    <td><div className="justify-center items-center ml-3"><button onClick={() => handleDelete(_id)}className="text-center font-semibold text-white mt-2"><img className="w-8 h-8" src={Bin}></img></button></div></td>
                                    <td>
                                        
                                        <div className="justify-center items-center ml-5 w-40 h-25 rounded-xl text-white text-center bg-neutral-700"> {status === 'confirm' ? <span className='font-bold'>Recorded</span> :<button onClick={() => handleUpdate(_id)} >Put on record</button>}</div></td>
                                </tr>
                            </tbody>
                           
                    </div>
        </div>
    );
};

export default FeedbackCard;