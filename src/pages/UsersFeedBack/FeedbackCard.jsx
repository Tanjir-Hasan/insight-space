import React from 'react';
import moment from "moment/moment";
import Bin from "../../assets/images/icons/bin.png"




const FeedbackCard = ({ feedbacks, handleDelete, handleUpdate }) => {
    return (
        <div>
            <div className='w-full'>
                {/* <td> */}
                <table>
                    <thead>
                        <tr className="gap-5">
                            <th className='m-4'>Name</th>
                            <th className='m-4'>Email</th>
                            <th className='m-4'></th>
                            <th className='m-4'>Feedback</th>
                            <th className='p-4'></th>
                            <th className='m-4'>Rating</th>
                            <th className='m-4'>Date & Time</th>
                            <th className='m-4'>Remove</th>
                            <th className='m-4'>History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feedbacks?.map(f => <tr key={f._id} className="gap-6">
                                <td className="">
                                    <p className='m-4'>{f.userName}</p>
                                </td>
                                <td><p className='font-[Cinzel] m-4'>{f.email}</p></td>
                                <td className='m-4'></td>
                                <td><p className='font-[Cinzel] m-4'>{f.message}</p></td>
                                <td className='p-4'></td>
                                <td><p className='font-[Cinzel] m-4'>{f.rating}</p></td>
                                <td><p className='font-[Cinzel] m-4'>{moment(f.date).format('LLL')}</p></td>
                                <td><div className="justify-center items-center ml-3"><button onClick={() => handleDelete(f._id)} className="text-center font-semibold text-white mt-2"><img className="w-8 h-8" src={Bin}></img></button></div></td>
                                <td>
                                    <div className="justify-center items-center ml-5 w-40 h-25 rounded-xl text-white text-center bg-neutral-700"> {status === 'confirm' ? <span className='font-bold'>Recorded</span> : <button onClick={() => handleUpdate(f._id)} >Put on record</button>}</div></td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default FeedbackCard;