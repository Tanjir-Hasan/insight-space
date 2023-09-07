import { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import FeedbackCard from "./FeedbackCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UsersFeedBack = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const url = `/feedback?email=${user?.email}`;
    const {data:feedbacks , refetch} = useQuery({
        queryKey :["feedback" , url],
        queryFn : () => axiosSecure.get(url)
            .then(data =>{ 
                return data.data
            })
            .catch(err => console.log(err.message))
    })

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if(proceed){
           axiosSecure.delete(`/feedback/${id}`)
            .then(data => { 
            if(data.data.deletedCount > 0){
                alert('deleted successful');
                refetch();
            }
            })
            .catch(err => console.log(err.message))    
        }
    }

    const handleUpdate = id => {
        axiosSecure.patch(`/feedback/${id}`)
        .then(data => {
            if(data.data.modifiedCount > 0){
               refetch();
            }
        })
    }

   

    return (
        <div className="md:w-10/12 w-11/12 mx-auto justify-center items-center h-screen ">

            <div className="md:w-10/12 w-11/12 mx-auto">

                <h1 className='text-center md:text-5xl text-4xl font-[Poppins] border-b-2 border-[#3c6e71] lg:pt-20 pt-10 '>
                    Submitted FeedBacks
                </h1>

            </div>

            <div className='items-center justify-center md:w-10/12 w-11/12 sm:w-10/12 mt-10 mx-auto '>
                {
                   <FeedbackCard 
                    feedbacks ={feedbacks}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    className='hover:bg-[#3c6e71] duration-500 rounded-b-xl p-5 border-double border-4 border-sky-500 hover:text-white'> 
                </FeedbackCard>
                }
            </div>
        </div>
    );
};

export default UsersFeedBack;


// grid grid-cols-1 lg:grid-cols-3 gap-4 p-20


// hover:bg-[#3c6e71] duration-500 rounded-b-xl p-20 border-double border-4 border-sky-500 hover:text-white


// <div key={f._id} className=''>
//                         <div className=''>
//                             {/* <td> */}
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Email</th>
//                                         <th>Feedback</th>
//                                         <th>Rating</th>
//                                         <th>Date</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {/* row 1 */}
//                                     <tr>
//                                         <td>
//                                         <h4 className='text-xl font-[Poppins] mb-5 uppercase'>{f.userName}</h4>
//                                         </td>
//                                         <td><p className='font-[Cinzel]'>{f.email}</p></td>
//                                         <td><p className='font-[Cinzel]'>{f.message}</p></td>
//                                         <td><p className='font-[Cinzel]'>{f.rating}</p></td>
//                                         <td><p className='font-[Cinzel]'>{moment(f.date).format('LLL')}</p></td>
//                                     </tr>
//                                 </tbody>
                               
//                         </div>
//                     </div>